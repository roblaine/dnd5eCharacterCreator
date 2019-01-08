// Basic user schema for the app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Schema
const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  class: [{
    primary: {
      name: {
        type: String,
        required: true
      },
      level: Number
    },
    secondary: {
      name: String,
      level: Number
    }
  }],
  race: {

  }
});

module.exports = Character = mongoose.model("characters", CharacterSchema);
