const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a collection of reference objects, such as base classes
const ClassSchema = new Schema({
  name: String,
  features: [
    {
      name: {},
      level: {},
      effects: [
        String
      ],
      durationMins: Number,
      restRequired: String,
      usesPerRest: Number,
    }
  ]
  proficiency: {
    bonus: {
      value: Number,
      level: Number
    },
    savingThrows: [
      {
        name: String
      }
    ],
    skills: {
      count: Number,
      names: [
        String
      ]
    },
    tools: [
      {
        name: String
      }
    ],
    armor: [
      {
        name: String
      }
    ]
  },
  hitPoints: {
    hitDice : {
      sideCount: Number,
      count: Number
    },
    levelOne: {
      base: Number,
      modifier: String
    },
    higherLevels: {
      alternate: Number
    }
  },
  startingGold: {
    // Eg or start with 2d4 x 10GP
    dieCount: Number,
    die: Number,
    denominationCount: Number,
    denomination: String
  },
  startingEquipment: {
    weapon: {
      a: {
        name: String
      },
      b: {
        name: String
      }
    },
    offWeapon: {
      a: {
        name: String
      },
      b: {
        name: String
      }
    },
    // eg An explorer's pack and four javelins
    pack: {
      a: {
        name: String,
        count: Number
      },
      b: {
        name: String,
        count: Number
      }
    }
  }
});

module.exports = Class = mongoose.model("classes", ClassSchema);
