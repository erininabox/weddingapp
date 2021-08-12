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

//SHOW
router.get('/:id', (req, res) => {
    db.Vendor.findById(req.params.id, (err, foundVendor) => {
		if (err) return console.log(err);
        res.render('vendors/vendorsShow.ejs', { oneVendor: foundVendor });
	});
});

//CREATE
router.post('/', (req, res) => {
    db.Vendor.create(req.body, (err, createdVendor) => {
        if (err) return console.log(err);
        res.redirect('vendors');
    });
  });

// EDIT
router.get('/:id/edit', (req, res) => {
    db.Vendor.findById(req.params.id, (err, oneVendor) => {
        if (err) return console.log(err);
        console.log(oneVendor);
        res.render('vendors/vendorsEdit.ejs', { oneVendor: oneVendor });
    } )
})

// EDIT PUT
router.put('/:id', (req, res) => {
    db.Vendor.findByIdAndUpdate(req.params.id, req.body, (err, oneVendor) => {
        if (err) res.send(err);
        res.redirect(`./${req.params.id}`);
        // res.render('/vendors/vendorsShow.ejs', { oneVendor: oneVendor });
    })    
})

// DELETE
router.delete('/:id', async (req, res) => {
    await db.Vendor.findByIdAndDelete(req.params.id)
    res.redirect('/vendors');
});



module.exports = router;