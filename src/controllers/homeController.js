import {Router} from "express";

const homeControllers = Router();

homeControllers.get('/', (req, res) => {
	res.render('home');
});


homeControllers.get('/about', (req, res) => {
	res.render('about');
});
export default homeControllers;