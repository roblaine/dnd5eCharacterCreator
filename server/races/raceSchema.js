// Basic user schema for the app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Schema for base races in 5e to create new characters with
const RaceSchema = new Schema({
  name: {},
  subclasses: [
    {
      name: {}
    }
  ],
  speed: {},
  proficiencies: {
    skills: [
      {
        name: {}
      }
    ],
    attributes: [
      {
        name: {}
      }
    ]
  },
  moodifiers: [
    {
      name: {},
      value: {}
    }
  ]
});
module.exports = Race = mongoose.model("races", RaceSchema);
