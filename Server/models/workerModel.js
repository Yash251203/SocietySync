const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    data: Buffer,
    contentType: String,
  },
  password: {
    type: String,
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  }
  // Optional if you don't want to populate manually
  // servicesAssigned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'service' }],
  // servicesPending: [{ type: mongoose.Schema.Types.ObjectId, ref: 'service' }],
  // servicesCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'service' }]
});

const workerModel = mongoose.model('worker', workerSchema);
module.exports = workerModel;
