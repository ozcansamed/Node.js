'use strict';

const express = require('express');
const axios = require('axios');
const expressHandlebars = require('express-handlebars');

// init express
const app = express();

// Create endpoints/route handlers
app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

// listen on a port
app.listen(3000, () => {
  console.log('Server is on fire!')
});