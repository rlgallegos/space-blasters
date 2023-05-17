const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const serverPort = 9000;
const appPort = 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

server.use(middlewares);
server.use(router);

server.listen(serverPort, () => {
  console.log(`JSON Server is running on port ${serverPort}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(appPort, () => {
  console.log(`Static files server is running on port ${appPort}`);
});