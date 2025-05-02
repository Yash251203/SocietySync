const mongoose = require('mongoose');

// You can replace this with a real Admin ObjectId later
const defaultAdminId = '660000000000000000000000'; // Example ObjectId

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: defaultAdminId,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
