import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response) {
    return response.json();
  }
}
