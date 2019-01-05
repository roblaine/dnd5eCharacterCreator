const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require("path");
const mongoose = require("mongoose");
const app = express();

// Load all of our env vars
const port = process.env.PORT || 3001;
const host = process.env.HOST || '0.0.0.0';
const mongodb_ip = process.env.APP_MONGO_URL;

app.use(express.static('public'))

mongoose.Promise = global.Promise;
mongoose.connect(
	`mongodb://${mongodb_ip}:27017/dndtracker`, 
	{ useNewUrlParser: true }
)
.then(() => console.info('Connected to mongodb'))
.catch(err => {
	console.error(err);
});

// TODO Move these to their own file
var userSchema = new mongoose.Schema({
	username: { 
		type: String, 
		unique: true,
		lowercase: true
	},
	password: String
});

var User = new mongoose.model("User", userSchema);

var demoUser = new User({
	username: 'johnny bravo',
	password: 'monkey'
});

demoUser.save()
.then(item => {console.log(`User: ${item}`)})
.catch(err => {console.log(err)});


var characterSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		lowercase: true
	},
	level: Number,
	race: String,
	class: String,
	age: Number,
	creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

var Character = new mongoose.model("Character", characterSchema);

var demoChar = new Character({
	name: 'jogn', 
	level: 1, 
	race: 'Dwarf',
	class: 'Cleric',
	age: 43,
	creator: demoUser
});

demoChar.save()
.then(item => {console.log(`Character: ${item}`)})
.catch(err => {console.log(err)});

var spellSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		lowercase: true
	},
	level: Number,
	school: String,
	caster_class: String,
	desc: String,
	ritual: Boolean,
	range: Number,
	damage: String
});

var Spell = new mongoose.model("Spell", spellSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(pino);
app.listen(port, host);

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

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
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
	let currentUser = null;
	[username, password] = [req.body.username, req.body.password];
	console.log('username: %s\npassword: %s', username, password);

	User.findOne({'username': username.toLowerCase(), }, 'username', 
		function(err, user) {
			if(err) { return handleError(err) };
			if(user.password === password) {
				currentUser = user;
			}
			console.log('current: %s', user);
		}
	).then(res.send(currentUser));
});

app.get('/public/character', (req, res) => {
	res.sendFile(__dirname + '/public/character.html');
});

