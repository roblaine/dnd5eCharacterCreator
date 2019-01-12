// declare all of the required imports
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');

// Import the routes
const users = require('./routes/api/users');
const characters = require('./routes/api/characters');
const sessions = require('./routes/api/sessions');

// Declare our app to use express
const app = express();

// Load all of our env vars
const port = process.env.PORT || 3001;
const host = process.env.HOST || '0.0.0.0';

// DB Config
const db = require('./config/keys').mongoURI;

app.use(express.static('public'))

mongoose.Promise = global.Promise;
mongoose.connect(
  db,
  { useNewUrlParser: true }
)
.then(() => {
  console.log('\nConnected to mongodb\n');
  // Seed the database
})
.catch(err => {
  console.error(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino);
// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/characters', characters);
app.use('/api/sessions', sessions);

// Static character sheet for demo
app.get('/character', (req, res) => {
  res.sendFile(__dirname + '/public/character.html');
});

// Initialize the app
app.listen(port, host, () => {
  const listenLog = `> Server live at ${host}:${port}\n`;
  console.log(listenLog);
});
