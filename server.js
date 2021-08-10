/* REQUIRED MODULES */
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

// Index page
app.get('/', (req, res) => {
    res.render('index.ejs');
})

/* START THE SERVER */
app.listen(port, () => {
    console.log(`Server is running on port: ${PORT}`);
    rowdyResults.print();
})