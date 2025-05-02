// app.js
const session = require('express-session')

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
// Serve static files from the 'public' directory
app.use(express.static('public'))

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }))
// Set up session management with a secret key
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }))


// Sample route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
