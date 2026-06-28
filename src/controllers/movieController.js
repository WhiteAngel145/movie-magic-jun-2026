import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/movies/create', (req, res) => {	

	res.render('create');
});

movieController.post('/movies/create', async (req, res) => {
	const movieData = req.body;

	const movie = await movieService.create(movieData);

	res.redirect('/');
});

movieController.get('/movies/:movieId/details', async (req, res) => {
	const movieId = req.params.movieId;
	const movie = await movieService.getOne(movieId);
	
	// TODO Prepare view data (temporary solution)
	const ratingViewData = '&#x2605;'.repeat(Math.trunc(movie.rating));

	res.render('details', { movie, rating: ratingViewData });
});

movieController.get('/movies/search', async (req, res) => {
	const filter = req.query;

	const movies = await movieService.getAll(filter);
	
	res.render('search', { movies, filter, pageTitle: 'Search Movies' });
});

export default movieController;