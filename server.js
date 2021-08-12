/* REQUIRED MODULES */
require('dotenv').config()
const express = require('express');
const rowdy = require('rowdy-logger');
const methodOverride = require('method-override');

const eventsController = require('./controllers/eventsController.js');

/* CONFIGURATION */
const app = express();
const port = 4000;
app.set('view engine', 'ejs');
const rowdyResults = rowdy.begin(app);

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/events', eventsController);

/* ROUTES */

// Index page/Home
app.get('/', (req, res) => {
    res.render('index.ejs');
})

//Services Page
app.get('/services', (req, res) => {
    res.render('services.ejs')
})

/////////////////////////////////////////////
//Bakers Page
app.get('/services/bakers', (req, res) => {
    res.render('bakers.ejs')
})

//Caterers Page
app.get('/services/caterers', (req, res) => {
    res.render('caterers.ejs')
})

//Facilities Page
app.get('/services/facilities', (req, res) => {
    res.render('facilities.ejs')
})

//musicians Page
app.get('/services/musicians', (req, res) => {
    res.render('musicians.ejs')
})

//Officiators Page
app.get('/services/officiators', (req, res) => {
    res.render('officiators.ejs')
})

//Photographers Page
app.get('/services/photographers', (req, res) => {
    res.render('photographers.ejs')
})

//About Page
app.get('/about', (req, res) => {
    res.render('about.ejs')
})


/* START THE SERVER */
app.listen(process.env.port, () => {
    console.log(`Server is running on port: ${port}`);
    rowdyResults.print();
})

