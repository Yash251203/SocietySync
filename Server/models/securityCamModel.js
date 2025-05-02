const mongoose = require('mongoose');

// Create a Security Camera schema
const securityCamSchema = new mongoose.Schema({
  cameraName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  streamURL: {
    type: String,
    required: true,
    trim: true,
  }
});

const SecurityCam = mongoose.model('SecurityCam', securityCamSchema);

module.exports = SecurityCam;
