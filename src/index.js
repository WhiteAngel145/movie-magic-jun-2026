import express from 'express';
import handlebars from 'express-handlebars';


const app = express();

// Setup Handlebars
app.engine('hbs', handlebars.engine({
	extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Setup static files /middlewares
app.use(express.static('src/public'));

// Routers
app.get('/', (req, res) => {
	res.render('home');
});

//Start Servers
app.listen(5000, () => console.log('Server is listening on http://localhost:5000.....'));