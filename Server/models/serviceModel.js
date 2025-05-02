const mongoose = require('mongoose');

// Create a Service Request schema
const serviceSchema = new mongoose.Schema({
  residentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  category: {
    type: String,
    enum: ['plumbing', 'carpentering', 'electrical', 'cleaning', 'other'],
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open',
  },
  request: {
    type: Date,
    default: Date.now,
  },
  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming worker is also a user
    default: null,
  },
});

const service = mongoose.model('service', serviceSchema);

module.exports = service;
