'use strict';

const express = require('express');

// // Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from web server');
});

app.get('/getUser', (req, res) => {
  res.send('getUser Api from web server');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);