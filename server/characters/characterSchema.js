// Basic user schema for the app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Schema
// Reference a user for each created character
const CharacterSchema = new Schema({
  owner: { type: 'ObjectId', ref: 'User', required: true },
  name: { type: String, required: true },
  race: { type: String, required: true },
  alignment: [
    {
      law: { type: String, required: true, default: 'Nuetral' },
      chaos: { type: String, required: true, default: 'Nuetral' }
    }
  ],
  background: { type: String },
  classes: [
    {
      name: { type: String, required: true },
      level: { type: Number, default: 1 }
    }
  ],
  hasInspiration: { type: Boolean, default: false },
  passivePerception: { type: Number, required: true, default: 1 },
  attributes: [
    {
      name: { type: String, required: true },
      level: { type: Number, default: 10 },
      modifier: { type: Number, default: 0 }
    }
  ],
  savingThrows: [
    {
      name: { type: String },
      level: { type: Number, default: 0 },
      proficient: { type: Boolean, default: false }
    }
  ],
  skills: [
    {
      name: { type: String, required: true },
      level: { type: Number, default: 0 },
      proficient: { type: Boolean, default: false }
    }
  ],
  languages: [
    {
      name: { type: String }
    }
  ],
  combat: {
    ac: { type: Number, required: true , default: 1 },
    initiative: { type: Number, required: true, default: 1 },
    speed: { type: Number, required: true, default: 25 },
  },
  hitpoints: {
    max: { type: Number, required: true, default: 1 },
    current: { type: Number, required: true, default: 1 },
    temp: { type: Number, required: true, default: 0 }
  },
  hitdice: {
    total: { type: Number, required: true, default: 1 },
    die: { type: String, required: true, default: 1 },
    failure: { type: Number, required: true, default: 0 },
    success: { type: Number, required: true, default: 0 },
  },
  attacks: {
    weapons: [
      // TODO Create a weapon model and reference it here in future
      {
        name: { type: String },
        attackBonus: { type: Number, default: 0 },
        proficient: { type: Boolean, default: false },
        damageType: { type: String }
      }
    ]
  },
  equipment: {
    items: [
      {
        name: { type: String },
        acBonus: { type: Number, default: 0 },
        proficient: { type: Boolean, default: false }
      }
    ],
    wallet: {
      cp: { type: Number, default: 0 },
      sp: { type: Number, default: 0 },
      ep: { type: Number, default: 0 },
      gp: { type: Number, default: 0 },
      pp: { type: Number, default: 0 }
    }
  },
  features: {
    personality: { type: String },
    bonds: { type: String },
    ideals: { type: String },
    flaws: { type: String },
    traits: { type: String }
  }
});

module.exports = Character = mongoose.model("characters", CharacterSchema);
