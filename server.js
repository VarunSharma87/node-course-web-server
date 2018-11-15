let express = require('express');
let hbs = require('hbs');

let app = express();
let port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// app.use((req, res, next) => {
// 	res.render('maintenance.hbs');
// });

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('capitalise', text => {
	return text.toUpperCase();
});

// app.get('/', (req, res) => {
// 	res.send({
// 		name: 'Varun',
// 		app: 'Test server',
// 		page: 'Main page'
// 	});
// });

app.get('/projects', (req, res) => {
	res.render('projects.hbs', {
		pageTitle: 'Projects'
		headerTitle: 'Projects page'
	})
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home',
		headerTitle: 'Home page',
	});
});

app.get('/about', (req, res)=>res.send('<h2>About page</h2>'));

app.get('/sanchi', (req, res)=>res.send('<h2>Love you janeman</h2>'));

app.get('/bad', (req, res)=>res.send({
	status: 400,
	errorMessage: 'Bad request'
}));

app.listen(port, ()=> console.log(`App listening on port ${port}`));