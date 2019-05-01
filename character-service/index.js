const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger');
const path = require('path');
const mongoose = require('mongoose');

// Import the characters api endpoint
const characters = require('./routes/api/characters');

// Declare our micro-service to use express
const app = express();

// Load all of our env vars
const port = process.env.PORT || 3002;
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
  console.log(`\nConnected to mongodb at ${db}\n`);
  // Seed the database
})
.catch(err => {
  console.error(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino);

app.use('/api/characters', characters);

// Static character sheet for demo
app.get('/character', (req, res) => {
  res.sendFile(__dirname + '/public/character.html');
});

// Initialize the microservice
app.listen(port, host, () => {
  const listenLog = `> Characters Service live at ${host}:${port}\n`;
  console.log(listenLog);
});
