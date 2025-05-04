const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  residentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Reference to the User model
    required: true,
  },
  houseNo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Maintainance", "Billing", "Noise", "Security"],
    required: true
  },
  detail: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const complaintModel = mongoose.model('complaint', complaintSchema);

module.exports = complaintModel;
