
// const express = require('express');
// const jsonServer = require('json-server');
// const path = require('path');
// const cors = require('cors');

// const app = express();
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');

// const middlewares = jsonServer.defaults();

// const buildPath = path.join(__dirname, 'build')
// console.log(buildPath)

// server.use(middlewares);
// server.use(router);

// const port = 3000;
// const appPort = 8000;

// // app.use(express.static(path.join(buildPath)));
// app.use(express.static(buildPath));
// app.use(express.json())
// app.use(cors())

// app.get('*', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'))
// })

// app.listen(appPort, () => {
//   console.log(`Frontend Server is running on port ${appPort}`);
// })

// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });

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
apiServer.use('/api', apiRouter);

// Redirect all other routes to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the combined server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});