import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/movies/create', (req, res) => {	

	res.render('create');
});

movieController.post('/movies/create', (req, res) => {
	const movieData = req.body;

	const movie = movieService.create(movieData);

	res.redirect('/');
})
movieController.get('/movies/:movieId/details', (req, res) => {
	const movieId = req.params.movieId;
	const movie = movieService.getOne(movieId);

	console.log(movie);
	
	res.end();
	
})

export default movieController;