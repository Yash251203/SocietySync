const mongoose = require('mongoose');

// Create a Theft Report schema
const theftSchema = new mongoose.Schema({
  residentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  media: {
    type: String, // URL or base64 string (optional)
    default: '',
  },
  detail: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

const theft = mongoose.model('theft', theftSchema);

module.exports = theft;
