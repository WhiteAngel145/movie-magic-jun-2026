import { Router } from "express";

const movieController = Router();

movieController.get('/movies/create', (req, res) => {	

	res.render('create');
});

movieController.post('/movies/create', (req, res) => {

	console.log(req.body);

	res.end();
})


export default movieController;