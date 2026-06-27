import Movie from "../models/Movies.js";



export default {
	getAll() {
	return Movie.find();
	},
	create(movieData) {
		//TODO Create movie

		console.log(movieData);
		
	}
}