// Express Router
const express = require('express');
const db = require('../models/index.js');
const router = express.Router();

//ROUTES

//INDEX
router.get('/', (req, res) => {
    db.Event.find({}, (err, allEvents) => {
        res.render('index.ejs', {
            allEvents: allEvents
        })
    })
})

//NEW
router.get('/new', (req, res) => {
    res.render('events/eventsNew.ejs')
})

//SHOW
router.get('/:id', (req, res) => {
    db.Event.findById(req.params.id, (err, foundEvent) => {
		if (err) return console.log(err);
        res.render('events/eventsShow.ejs', { event: foundEvent });
	});
});

//CREATE
router.post('/', (req, res) => {
    db.Event.create(req.body, (err, createdEvent) => {
        if (err) return console.log(err);
        res.redirect('/events');
    });
  });


  //DELETE
  router.delete('/:id', async (req, res) => {
	await db.Event.findByIdAndDelete(req.params.id)
		res.redirect('/events');
	});



module.exports = router;