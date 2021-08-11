const mongoose = require('mongoose')

// The schema
const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    type: String,
})


// The Model
const Vendor = mongoose.model('Vendor', vendorSchema)

// Export it
module.exports = Vendor