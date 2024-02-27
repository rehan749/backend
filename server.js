// import express from 'express';
const express = require('express');
const mongoose = require('./db');

const Person = require('./models/Person');
const menuItem = require('./models/MenuItem')

const app = express();
const PORT = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get("/", (req, res) => {
      res.send("Hello, this is the Node.js server");
});





// POST method to post the menu item 
app.post('/menu', async (req, res) => {
      const data = req.body
      try {
            const newMenuItem = new menuItem(data)
            await newMenuItem.save();
            console.log('menu data saved');
            res.status(200).json(newMenuItem)
      } catch (error) {
            console.log('Failed to save data', error)
            res.status(500).json({ error: 'Failed to save person data' });
      }

})

// GET mehtod to get the menu item 
app.get('/menu', async (req, res) => {
      try {
            const data = await menuItem.find()
            res.status(200).json(data);
            console.log("data fetched")

      } catch (error) {
            console.log('Failed to fetch data', error)
            res.status(500).json({ error: 'Failed to fetch menu data' });
      }
})

app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
});
