const mongoose = require('mongoose')

// The schema
const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String
})


// The Model
const Event = mongoose.model('Event', eventSchema)

// Export it
module.exports = Event