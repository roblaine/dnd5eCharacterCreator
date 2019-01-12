// API endpoint for creating, updating, and deleting a session
const express = require('express');
const router = express.Router();

// Load the input validation method
const validateSessionCreate = require('../../sessions/validation/creation');
// const validateSessionQuery = require('../../sessions/validation/query');
// const validateSessionUpdate = require('../../sessions/validation/update');

// Load the session model
const session = require('../../sessions/sessionSchema');

// @route POST api/sessions/query
// @desc Query Sessions
// @access Public
router.post('/query', (req, res) => {
  const public = req.body.public;
  if(public) {
    // Get all of the public sessions that a user can join
    Session.find({ public: true })
    .then(sessions => {
      res.send(sessions);
    })
  } else {
    // Find the user
    User.findOne({ email: req.body.email })
    .then(user => {
      // Find the sessions hosted by a user
      Session.find({ host: user.id })
      .then(session => {
        res.send(session);
      });
    });
  }
});

// @route POST api/sessions/add
// @desc Create a new session
// @access Public
router.post('/add', (req, res) => {
  // Validate the inputs before assigning anything
  const { errors, isValid } = validateSessionCreate(req.body);

  if(!isValid) {
    // Return 400 status and json errors on invalid form submission
    return res.status(400).json(errors);
  }

  const email = req.body.host;
  const public = req.body.public;
  const name = req.body.name;

  User.findOne({ email: email })
  .then(host => {
    if(!host) {
      return res.status(400).json({ email: 'User not found with that email'});
    }

    Session.findOne({ name: name })
    .then(session => {
      if(session) {
        return res.status(400).json({ name: 'You already have a session with this name' });
      }
      const newSession = new Session({
        host: host,
        name: req.body.name,
        public: public
      });

      newSession
      .save()
      .then(session => res.json(session))
      .catch(err => console.log(err));
    });
  });
});

// @route POST api/sessions/delete
// @desc Delete an existing session
// @access Public
router.post('/delete', (req, res) => {

});


// @route POST api/sessions/join
// @desc Join an existing session
// @access Public
router.post('/join', (req, res) => {

});


module.exports = router;
