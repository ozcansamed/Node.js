'use strict';

const nodeFetch = require('node-fetch');

nodeFetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
    headers: {
      Authorization: "Basic YWRtaW46aHZnWDhLbFZFYQ=="
    },
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(console.error);

/* ===  BONUS PART  ===
// encode the username and password to base64 using javascript code

'use strict';

const nodeFetch = require('node-fetch');

nodeFetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
    headers: {       // encode the username and password to base64 using javascript code
      Authorization: `Basic ${Buffer.from("admin:hvgX8KlVEa").toLocaleString("base64")}`
    },
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(console.error);
*/