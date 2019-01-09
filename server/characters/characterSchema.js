// Basic user schema for the app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Schema
// Reference a user for each created character
const CharacterSchema = new Schema({
  owner: { type: 'ObjectId', ref: 'User', required: true },
  name: { type: String, required: true },
  race: { type: String, required: true },
  classes: [
    {
      name: { type: String, required: true },
      level: { type: Number, default: 1 }
    }
  ],
  attributes: [
    {
      name: { type: String, required: true },
      level: { type: Number, default: 10 },
      modifier: { type: Number, default: 0 }
    }
  ],
  skills: [
    {
      name: { type: String, required: true },
      level: { type: Number, default: 0 },
      proficient: { type: Boolean, default: false }
    }
  ]
});

module.exports = Character = mongoose.model("characters", CharacterSchema);
