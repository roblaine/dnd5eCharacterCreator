const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);


// Declare api endpoints
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/api/class', (req, res) => {
  const className = req.query.className || 'Fighter';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ classData: { name: `John`, age: 24 } }));
 });


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  console.log('Receiving API query for express backend');
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', (req, res) => {
  res.send({ express: 'Hi' });
});

