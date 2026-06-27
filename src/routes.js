import { Router } from 'express';

import homeControllers from './controllers/homeController.js ';
import movieController from './controllers/movieController.js';

const routes = Router();

routes.use(homeControllers);
routes.use(movieController);

export default routes;