// declare all of the required modules
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require("path");
const mongoose = require("mongoose");
const app = express();

// Database models
const User = require('./database/schema').User;
const Character = require('./database/schema').Character;
const Spell = require('./database/schema').Spell;
const Seed = require('./database/schema').seedDatabase;

// Load all of our env vars
const port = process.env.PORT || 3001;
const host = process.env.HOST || '0.0.0.0';
const mongodbIp = process.env.APP_MONGO_URL;

app.use(express.static('public'))

mongoose.Promise = global.Promise;
mongoose.connect(
	`mongodb://${mongodbIp}:27017/dndtracker`,
	{ useNewUrlParser: true }
)
.then(() => {
	console.log('\nConnected to mongodb\n');
	// Seed the database
	Seed();
})
.catch(err => {
	console.error(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(pino);
app.listen(port, host, () => {
	const listenLog = `> Server live at ${host}:${port}\n`;
	console.log(listenLog);
});

app.post('/users/new', (req, res) => {
  db.collection('users').insertOne(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }

    console.log(`saved user '${req.body.username}' to the database`);
    res.redirect('/');
  });
});

app.get('/users', (req, res) => {
  const users = db.collection('users').find();
  console.log(`${users}`);

  res.send(JSON.stringify({ users: `${users}` }));
});


app.get('/api/characters', (req, res) => {
  //const username = req.query.username;
  //console.log(`Recieving API query for char belonging to: ${username}`);
  res.setHeader('Content-Type', 'application/json');
	// find the character and return it as a json object
	// TODO make this dynamic instead of hardcoding the demo name
	let chr = null;
	Character.findOne({ 'name': 'jogn' }, 'name',
		function(err, character) {
			if(err) { return handleError(err) };
			chr = JSON.stringify({ data: { 'name': character.name } });
			console.log(chr);
		}
	).then(res.send(chr));
});

app.post('/login', function(req, res) {
	[username, password] = [req.body.username, req.body.password];
	console.log('username: %s\npassword: %s', username, password);

	const loggedInUser = User.findOne({ 'username': username.toLowerCase() }, 'username',
    function(err, user) {
			if(err) {
        return handleError(err);
      }
      console.log('current: %s', user);
      // loggedInUser = user;
			return user;
		}
	)
	.then((e) => {
      res.send({ 'data' : `${e}` });
  })
	.catch(err => console.log(err));
});

// Static character sheet for demo
app.get('/character', (req, res) => {
	res.sendFile(__dirname + '/public/character.html');
});
