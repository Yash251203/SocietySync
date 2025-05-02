const mongoose = require('mongoose');

// Create a User schema for Google OAuth
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,  // Google ID is unique for each user
  },
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
    required: true,
    trim: true,
  }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
