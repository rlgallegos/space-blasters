const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const backendPort = 9000;
const frontendPort = 8000;

app.use(express.static(path.join(__dirname, 'public')));

server.use(middlewares);
server.use(router);

server.listen(backendPort, () => {
  console.log(`JSON Server is running on port ${backendPort}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(frontendPort, () => {
  console.log(`Static files server is running on port ${frontendPort}`);
});