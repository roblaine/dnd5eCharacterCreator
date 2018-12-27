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

app.get('/api/classData', (req, res) => {
  const className = req.query.className || 'Fighter';
  console.log(`Recieving API query for class with name: ${className}`);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ data: { name: `John`, age: 24 } }));
 });


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  console.log('Receiving API query for express backend');
  res.send({ data: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', (req, res) => {
  res.send({ data: 'Hi' });
});

