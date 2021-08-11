const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/weddb';

// Fire off the connection to Mongo DB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});


// Making the Event model available from this file
module.exports = {
  Event: require('./events/Event.js'),
}