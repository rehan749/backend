// import express from 'express';
const express = require('express');
const mongoose = require('./db');


const menuItem = require('./models/MenuItem')

const app = express();
const PORT = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get("/", (req, res) => {
      res.send("Hello, this is the Node.js server");
});



const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes)


const menuRoutes = require('./routes/menuRoutes')
app.use('/menu',menuRoutes)


app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
});
