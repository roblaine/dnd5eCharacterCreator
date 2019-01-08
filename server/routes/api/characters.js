const express = require('express');
const router = express.Router();

// Load the character model
const character = require('../../characters/characterSchema');

// @route GET api/characters/retrieve
// @desc Retrieve Characters
// @access Public
router.get('/retrieve', (req, res) => {
  res.send(
    {
      characters: {
        'char1' : 'jogn',
        'char2' : 'bob'
      }
    }
  );
});

// @route POST api/characters/add
// @desc Add Character
// @access Public
router.post('/add', (req, res) => {
  
});

module.exports = router;
