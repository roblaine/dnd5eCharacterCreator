const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const port = process.env.PORT || 3001;
const app = express();
//var database = require('./interface/database');

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:28015/dndtracker");

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

app.post('/spells/new', (req, res) => {
	var newSpell = new Spell(req.body);
	newSpell.save()
	.then(item => {
		res.send(`Saved succesfully the new spell: ${req.body.name}`);
	})
	.catch(err => {
		res.status(400).send('Unable to save to database')
	});
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

// Declare api endpoints
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/api/classData', (req, res) => {
  const className = req.query.className || 'Fighter';
  console.log(`Recieving API query for class with name: ${className}`);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ data: { name: 'John', age: 24 } }));
});

// create a GET route
app.get('/express_backend', (req, res) => {
  console.log('Receiving API query for express backend');
  res.send({ data: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', (req, res) => {
  res.send({ data: 'Hi' });
});

