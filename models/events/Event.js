const mongoose = require('mongoose')

// The schema
const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String,
    date: String,
    photographer: String,
    officiator: String,
    venue: String,
    caterer: String,
    baker: String,
    musician: String,
})


// The Model
const Event = mongoose.model('Event', eventSchema)

// Export it
module.exports = Event