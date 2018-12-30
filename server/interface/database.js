// File to define interactions between the database and the app
const MongoClient = require('mongodb').MongoClient


module.exports = { 
  createDatabase: function() { 
    var db;
    console.log(`Setting up database conn.`);
    MongoClient.connect('mongodb://localhost:28015', (err, client) => {
      if (err) { 
        console.log(`Error: ${err}`);
      };
      db = client.db('dndtracker');
      console.log(`Database: ${db}.`);
      return db;
    });
  }
};

