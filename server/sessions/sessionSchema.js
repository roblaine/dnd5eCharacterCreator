const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Schema
const SessionSchema = new Schema({
  host: { type: 'ObjectId', ref: 'User', required: true },
  players: [
    { type: 'ObjectId', ref: 'User' }
  ],
  name: { type: String, required: true },
  description: String,
  public: { type: Boolean, required: true, default: false },
  timestamps: {
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() }
  }
});

module.exports = Session = mongoose.model("sessions", SessionSchema);
