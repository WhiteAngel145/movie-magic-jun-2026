import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';


const app = express();

// Setup Handlebars
app.engine('hbs', handlebars.engine({
	extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Setup static files /middlewares
app.use(express.static('src/public'));

//Parse form date from request req
app.use(express.urlencoded());

// Routers
app.use(routes);

//Start Servers
app.listen(5000, () => console.log('Server is listening on http://localhost:5000.....'));