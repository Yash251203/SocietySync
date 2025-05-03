const mongoose = require('mongoose');

// Create a User schema for Google OAuth
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, 
    trim: true,
  },
  profilePicture: {
    type: String,  // URL to user's profile picture (optional)
    default: '',  // Default value in case the user doesn't have one
  },
  houseNo: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Create a model from the schema
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
