// Using Node.js `require()`
const mongoose = require('mongoose');
require('dotenv').config(); 

// Using ES6 imports
// import mongoose from 'mongoose';

const MongoURL = process.env.MongoURL;

// console.log(process.env);


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
