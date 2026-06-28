import { Router } from 'express';

import homeControllers from './controllers/homeController.js ';
import movieController from './controllers/movieController.js';

const routes = Router();

routes.use(homeControllers);
routes.use(movieController);

// Add not found page 
routes.get('*splat', (req, res) => {
	res.render('404');
});

export default routes;