const mongoose = require('mongoose');

// Maintenance Schema
const maintenanceSchema = new mongoose.Schema({
  residentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['paid', 'unpaid', 'pending'],
    required: true,
    default: 'unpaid',
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'upi', 'card', 'bank'],
    default: 'cash',
  },
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);

module.exports = Maintenance;
