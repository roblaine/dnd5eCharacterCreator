const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Base races in 5e to reference when create new character is called
const RaceSchema = new Schema({
  name: String,
  // Subraces is just an array of race names, ie for dwarf it will be
  // ["HillDwarf", "MountainDwarf"]
  subraces: [
    // Render data based on a db query against
    // race.subraces.Map(name => (
    //  db.races.findOne({ name: name });
    // ));
    String
  ],
  traits: {
    speed: {
      // eg dwarf:
      //  Speed: 25
      //  description: Your speed is not reduced by wearing heavy armor
      distance: Number,
      description: String
    },
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
    generic: [
      {
        name: String,
        description: String
      }
    ]
  },
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
