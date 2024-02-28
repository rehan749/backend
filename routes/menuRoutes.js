const express = require('express');
const router = express.Router();
const menuItem = require('../models/MenuItem');



// POST method to post the menu item 
router.post('/', async (req, res) => {
      const data = req.body
      try {
            const newMenuItem = new menuItem(data)
            await newMenuItem.save();

            console.log('menu data saved');
            res.status(200).json(newMenuItem)
      } catch (error) {
            console.log('Failed to save data', error)
            res.status(500).json({ error: 'Internal Server error' });
      }

})

// GET mehtod to get the menu item 
router.get('/', async (req, res) => {
      try {
            const data = await menuItem.find()
            console.log("menu data fetched");
            res.status(200).json(data);

      } catch (error) {
            console.log('Failed to fetch data', error)
            res.status(500).json({ error: 'Internal Server error' });
      }
})



module.exports = router;