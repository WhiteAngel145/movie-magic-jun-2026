import {Router} from "express";
import movieService from "../services/movieService.js";

const homeControllers = Router();

homeControllers.get('/', (req, res) => {
	const movies = movieService.getAll();
	console.log(movies);
	res.render('home');
});


homeControllers.get('/about', (req, res) => {
	res.render('about');
});
export default homeControllers;