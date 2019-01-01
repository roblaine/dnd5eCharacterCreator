const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const port = process.env.PORT || 3001;
const app = express();
//var database = require('./interface/database');

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:28015/dndtracker", 
	{useNewUrlParser: true});

var characterSchema = new mongoose.Schema({
	name: String,
	level: Number,
	race: String,
	class: String,
	age: Number
});

var Character = new mongoose.model("Character", characterSchema);

var demoChar = new Character({
	name: 'jogn', 
	level: 1, 
	race: 'Dwarf',
	class: 'Cleric',
	age: 43
});

demoChar.save()
.then(item => {console.log(`Character: ${item}`)})
.catch(err => {console.log(err)});

var spellSchema = new mongoose.Schema({
	name: String,
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
app.listen(port, () => console.log(`Listening on port ${port}`));

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
	)
	.then(res.send(chr));
});

