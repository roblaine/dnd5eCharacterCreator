const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Base races in 5e to reference when create new character is called
const RaceSchema = new Schema({
  name: String,
  subclasses: [
    // eg path of the totem warrior
    {
      name: String,
      proficiencies: {
        skills: [
          String
        ],
        attributes: [
          String
        ]
      },
      traits: [
        // Eg darkvision: Can see better in the dark
        {
          Name: String,
          description: String
        }
      ]
    }
  ],
  speed: Number,
  proficiencies: {
    skills: [
      String
    ],
    attributes: [
      String
    ]
  },
  modifiers: [
    {
      name: String,
      value: Number
    }
  ]
});

module.exports = Race = mongoose.model("races", RaceSchema);
