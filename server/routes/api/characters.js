const express = require('express');
const router = express.Router();

// Load the input validation method
const validateCreationInput = require('../../characters/validation/creation');
// Load the character model
const character = require('../../characters/characterSchema');

// @route GET api/characters/retrieve
// @desc Retrieve Characters
// @access Public
router.get('/retrieve', (req, res) => {

});

// @route POST api/characters/add
// @desc Add Character
// @access Public
router.post('/add', (req, res) => {
  // Validate the creation Form
  const { errors, isValid } = validateCreationInput(req.body);

  if(!isValid) {
    // Return 400 status and json errors on invalid form submission
    return res.status(400).json(errors);
  }

  // Find the character from the name, if it already exists, ret error
  Character.findOne({ name: req.body.name })
  .then(char => {
    if(char) {
      return res.status(400).json({ name: 'Character name taken' });
    }

    // Find the user that this new character will belong to from the email
    User.findOne({ email: req.body.owner })
    .then(owner => {
      if(!owner) {
        return res.status(400).json({ owner: 'Invalid email provided'});
      }

      // Create the new char. Class.level will default to 1
      const newChar = new Character({
        // Attach the currently logged in user as the owner
        // owner: req.body.currentUser,
        name: req.body.name,
        race: req.body.race,
        classes: [{
          name: req.body.class
        }],
        owner: owner
      });

      // Finally save the new character
      newChar
      .save()
      .then(char => res.json(char))
      .catch(err => console.log(err));
    });

  });
});

module.exports = router;
