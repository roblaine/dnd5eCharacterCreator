const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Schema
const SessionSchema = new Schema({
  timestamps: {
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() }
  }
});

module.exports = Session = mongoose.model("sessions", SessionSchema);
