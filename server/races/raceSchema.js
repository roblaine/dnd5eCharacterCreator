const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Base races in 5e to reference when create new character is called
const RaceSchema = new Schema({
  name: String,
  abilityScoreIncrease: {
    name: String,
    value: Number
  },
  size: String,
  alignment: {
    law: String,
    moral: String
  },
  height: {
    min: Number,
    max: Number
  },
  age: {
    lifespan: Number,
    mature: Number,
    mentallyMature: Number
  },
  subrace: [

  ],
  speed: {
    // eg dwarf:
    //  Speed: 25
    //  description: Your speed is not reduced by wearing heavy armor
    distance: Number,
    description: String
  },
  traits: [
    {
      name: String,
      description: String
    }
  ],
  modifiers: [
    {
      name: String,
      value: Number
    }
  ],
  languages: [
    String
  ]
});

module.exports = Race = mongoose.model("races", RaceSchema);
