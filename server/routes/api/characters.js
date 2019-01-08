const express = require('express');
const router = express.Router();

// Load the input validation method
const validateCharacterCreate = require('../../characters/validation/creation');
const validateCharacterQuery = require('../../characters/validation/query');
// Load the character model
const character = require('../../characters/characterSchema');

// @route POST api/characters/query
// @desc Query Characters
// @access Public
router.post('/query', (req, res) => {
  // Make sure that req contains an email
  const { errors, isValid } = validateCharacterQuery(req.body);

  if(!isValid) {
    // Return 400 status and json errors on invalid form submission
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
  .then(owner => {
    // Return message on invalid email
    if(!owner) {
      return res.status(400).json({ email: 'Invalid email provided'});
    }

    Character.find({ owner: owner.id })
    .then(characters => {
      // Return an array of character objects
      res.send(characters);
    });
  });
});

// @route POST api/characters/add
// @desc Add Character
// @access Public
router.post('/add', (req, res) => {
  // Validate the creation Form
  const { errors, isValid } = validateCharacterCreate(req.body);

  if(!isValid) {
    // Return 400 status and json errors on invalid form submission
    return res.status(400).json(errors);
  }

  // Validates the email first before even querying for characters
  // Find the user that this new character will belong to from the email
  User.findOne({ email: req.body.email })
  .then(owner => {
    if(!owner) {
      return res.status(400).json({ email: 'Invalid email provided'});
    }

    // Find the character from the name, if it already exists, ret error
    Character.findOne({ name: req.body.name })
    .then(char => {
      if(char) {
        return res.status(400).json({ name: 'Character name taken' });
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
