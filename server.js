

const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Serve the React app static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Enable CORS for API routes
app.use(cors());

// Create an instance of JSON server
const apiServer = jsonServer.create();

// Load the JSON file and create the router
const db = require('./db.json');
const apiRouter = jsonServer.router(db);

// Mount the API router to '/api'
app.use('/api', apiRouter);

// Redirect all other routes to the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the combined server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});