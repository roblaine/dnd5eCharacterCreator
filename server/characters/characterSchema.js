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
  ]
});

module.exports = Character = mongoose.model("characters", CharacterSchema);
