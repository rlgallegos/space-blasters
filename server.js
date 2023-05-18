// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);

// const port = 3000;

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });

const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const buildPath = path.join(__dirname, 'build')
console.log(buildPath)

server.use(middlewares);
server.use(router);

const port = 3000;
const appPort = 8000;

// app.use(express.static(path.join(buildPath)));
app.use(express.static(buildPath));
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(appPort, () => {
  console.log(`Frontend Server is running on port ${appPort}`);
})

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});