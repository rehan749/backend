// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
// import mongoose from 'mongoose';

const MongoURL = 'mongodb://127.0.0.1:27017/hotel'

// setup mongodb connection 
// mongoose.connect(MongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// Connect to MongoDB
mongoose.connect(MongoURL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Export the database connection
module.exports = mongoose;
