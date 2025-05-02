const express = require('express');
const session = require('express-session');
const jwt = require("jsonwebtoken");
const cors = require('cors');
const passport = require('passport');
const app = express();
require('dotenv').config();
require('./configs/passport');
const PORT = process.env.PORT;
const connectDB = require('./configs/mongodb-connection');
connectDB();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// Serve static files from the 'public' directory
app.use(express.static('public'))

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }))
// Set up session management with a secret key
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }))

const JWT_SECRET = process.env.JWT_SECRET;

app.get('/api/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Google callback + JWT generation
app.get('/api/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  const user = req.user;
  const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, { expiresIn: '1h' });

  // Redirect to frontend with JWT (you could also use res.json())
  res.json({message: "Login Successful"});
});

app.get('/', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ message: 'Protected data', user: decoded });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
