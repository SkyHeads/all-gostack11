import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentRouter = Router();
const appointmentsController = new AppointmentsController();
const providerController = new ProviderAppointmentsController();

appointmentRouter.use(ensureAuthenticated);

appointmentRouter.post('/', appointmentsController.create);

appointmentRouter.get('/me', providerController.index);

export default appointmentRouter;
