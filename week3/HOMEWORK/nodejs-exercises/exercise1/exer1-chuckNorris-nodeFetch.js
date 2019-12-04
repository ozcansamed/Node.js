'use strict';

const nodeFetch = require('node-fetch');

nodeFetch('http://api.icndb.com/jokes/random/')
  .then(response => response.json())
  .then(data => console.log(data.value.joke))
  .catch(console.error);