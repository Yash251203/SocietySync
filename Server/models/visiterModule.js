const mongoose = require('mongoose');

// Create a Visitor schema
const visitorSchema = new mongoose.Schema({
  residentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  visName: {
    type: String,
    required: true,
    trim: true,
  },
  visMobileNo: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, // Store image URL or base64 string
    default: '',
  },
  otp: {
    type: String,
  },
  entryTime: {
    type: Date,
    default: Date.now,
  },
  exitTime: {
    type: Date,
    default: null, // Initially null; updated when visitor leaves
  },
  vehicleNo: {
    type: String,
    trim: true,
  },
});

// Create a model from the schema
const visitor = mongoose.model('visitor', visitorSchema);

module.exports = visitor;
