const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const workerModel = require('../models/workerModel');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Try to find the user in both models
    let user = await userModel.findById(decoded.id).select('-password');
    if (!user) {
      user = await workerModel.findById(decoded.id).select('-password');
    }

    if (!user) return res.status(404).json({ message: 'User or worker not found' });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
