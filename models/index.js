const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/weddb';

// Fire off the connection to Mongo DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`);
});

mongoose.connection.on("error", (err) => {
  console.log("Could not connect to MongoDB!", err);
});

// Making the Event model available from this file
module.exports = {
  Event: require('./events/Event.js'),
  Vendor: require('./vendors/Vendor.js')
}