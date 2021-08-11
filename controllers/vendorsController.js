// Express Router
const express = require('express');
const db = require('../models/index.js');
const router = express.Router();

//ROUTES

//INDEX
router.get('/', (req, res) => {
    db.Vendor.find({}, (err, allVendors) => {
        res.render('vendors/vendorsIndex.ejs', {
            allVendors: allVendors
        })
    })
})

//NEW
router.get('/new', (req, res) => {
    res.render('vendors/vendorsNew.ejs')
})

// //SHOW
// router.get('/:id', (req, res) => {
//     db.Event.findById(req.params.id, (err, foundEvent) => {
// 		if (err) return console.log(err);
//         res.render('events/eventsShow.ejs', { oneEvent: foundEvent });
// 	});
// });

//CREATE
router.post('/', (req, res) => {
    db.Vendor.create(req.body, (err, createdVendor) => {
        if (err) return console.log(err);
        res.redirect('vendors');
    });
  });

// // EDIT
// router.get('/:id/edit', (req, res) => {
//     db.Event.findById(req.params.id, (err, oneEvent) => {
//         if (err) return console.log(err);
//         console.log(oneEvent);
//         res.render('events/eventsEdit.ejs', { oneEvent: oneEvent });
//     } )
// })

// // EDIT PUT
// router.put('/:id', (req, res) => {
//     db.Event.findByIdAndUpdate(req.params.id, req.body, (err, oneEvent) => {
//         if (err) res.send(err);
//         res.redirect(`./${req.params.id}`);
//         // res.render('/events/eventsShow.ejs', { oneEvent: oneEvent });
//     })    
// })

// DELETE
router.delete('/:id', async (req, res) => {
    await db.Vendor.findByIdAndDelete(req.params.id)
    res.redirect('/vendors');
});



module.exports = router;