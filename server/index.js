const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const MongoClient = require('mongodb').MongoClient

const port = process.env.PORT || 3001;
const app = express();

//var database = require('./interface/database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

var db;

console.log(`Setting up database conn.`);
MongoClient.connect('mongodb://localhost:28015', (err, client) => {
  if (err) { 
		console.log(`Error: ${err}`);
  };
  db = client.db('dndtracker');
  console.log(`Database: ${db}.`);
  app.listen(port, () => console.log(`Listening on port ${port}`));
});

//db = database.createDatabase();

if(db == undefined) { 
  console.log(`Failed to set the database`); 
  process.exit();
}


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
  res.send(JSON.stringify({ data: { name: `John`, age: 24 } }));
});

// create a GET route
app.get('/express_backend', (req, res) => {
  console.log('Receiving API query for express backend');
  res.send({ data: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', (req, res) => {
  res.send({ data: 'Hi' });
});

