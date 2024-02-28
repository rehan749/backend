const express = require('express');
const router = express.Router();
const Person = require('../models/Person');


// POST route to add person data
router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
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

router.get('/:workType', async (req, res) => {
      try {
            const WorkType = req.params.workType;
            if (WorkType === 'manager' || WorkType === 'chef' || WorkType === 'waiter') {
                  const response = await Person.find({ work: WorkType });
                  console.log('Data fetched');
                  res.status(200).json(response);
            } else {
                  res.status(404).json({ error: 'Invalid work type' });
            }
      } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
      }
});

// PUT method to update the person data 
router.put('/:id', async (req, res) => {
      try {
            // Find the person by ID and update it
            const Id = req.params.id;
            const updatePersonData = req.body;

            const response = await Person.findByIdAndUpdate(Id, updatePersonData, {
                  new: true, //return the updated document
                  runValidtors: true,  //run mongoose validtion 
            })

            if (!response) {
                  return res.status(404).json({ error: 'Person not found' });
            }
            console.log('person data updated')
            res.status(200).json(response)


      } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Internal Server error' });
      }
})

// Delete method to delete the person data with id 
router.delete('/:id', async (req, res) => {
      try {
            const Id = req.params.id
            const response = await Person.findByIdAndDelete(Id)
            if (!response) {
                  return res.status(404).json({ error: 'Person not found' });
            }
            console.log('person data deleted')
            res.status(200).json({message:'Person data delete Succesfull'})

      } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Internal Server error' });
      }
})

module.exports = router;