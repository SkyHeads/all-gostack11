import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotificationsRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '../../../shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let fakeCacheProvider: FakeCacheProvider;
let fakeNotificationsRepository: FakeNotificationsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    fakeNotificationsRepository = new FakeNotificationsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
      fakeNotificationsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 6, 10, 12).getTime();
    });

    const appointment = await createAppointment.execute({
      date: new Date(2020, 6, 10, 13),
      user_id: '12345',
      provider_id: '12321424',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12321424');
  });

  it('should not be able to create two appointments on the same time', async () => {
    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 6, 10, 12).getTime();
    });

    const appointmentDate = new Date(2020, 6, 10, 12);

    await createAppointment.execute({
      date: appointmentDate,
      user_id: '12345',
      provider_id: '12321424',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: '12345',
        provider_id: '12321424',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointments on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 6, 20, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 6, 20, 11),
        user_id: '12345',
        provider_id: '12321424',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 6, 20, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 6, 20, 13),
        user_id: '12345',
        provider_id: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment before 8am and after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 6, 20, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 6, 21, 7),
        user_id: '12345',
        provider_id: '12321424',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.execute({
        date: new Date(2020, 6, 21, 18),
        user_id: '12345',
        provider_id: '12321424',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
