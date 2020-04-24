import { getCustomRepository, getRepository } from 'typeorm';
import TransactionsRepositories from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import Category from '../models/Category';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepo = getCustomRepository(TransactionsRepositories);
    const categoryRepo = getRepository(Category);

    const { total } = await transactionsRepo.getBalance();

    if (type === 'outcome' && total < value) {
      throw new AppError('You do not have enough balance');
    }

    let transactionCategory = await categoryRepo.findOne({
      where: {
        title: category,
      },
    });

    if (!transactionCategory) {
      transactionCategory = categoryRepo.create({
        title: category,
      });

      await categoryRepo.save(transactionCategory);
    }
    const transaction = transactionsRepo.create({
      title,
      value,
      type,
      category: transactionCategory,
    });

    await transactionsRepo.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
