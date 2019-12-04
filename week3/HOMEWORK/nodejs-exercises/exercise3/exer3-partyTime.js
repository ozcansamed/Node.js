'use strict';

const nodeFetch = require('node-fetch');

nodeFetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
  method: 'post',
  body: JSON.stringify({
    name: 'Samed',
    numberOfPeople: 3,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(console.error);
