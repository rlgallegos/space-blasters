const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

server.use(middlewares);
server.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
