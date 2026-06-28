import Movie from "../models/Movies.js";



export default {
	getAll() {
	return Movie.find();
	},
	create(movieData) {

		const movie = new Movie(movieData);

		return movie.save();
	}
}