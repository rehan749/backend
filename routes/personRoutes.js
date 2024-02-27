const express = require('express');
const router = express.Router();


// POST route to add person data
router.post('/person', async (req, res) => {
    // Access the parsed JSON data from req.body
    const data = req.body;

    try {
          // Create a newperson instance
          const newPerson = new Person(data);

          // Save the newperson to the database
          await newPerson.save();
          console.log('data saved')
          // Respond with a success message
          res.status(200).json(newPerson)

    } catch (error) {
          console.error('Error saving person data:', error);
          // Respond with an error message
          res.status(500).json({ error: 'Failed to save person data' });
    }
});


//Get the data form the database 
router.get('/person', async (req, res) => {
    try {
          const data = await Person.find();
          console.log('data fetched');
          res.status(200).json(data);


    } catch (error) {
          console.error('Error fetching person data:', error);
          // Respond with an error message
          res.status(500).json({ error: 'Failed to fetch person data' });
    }
})

module.exports = router;