'use strict';

const http = require('http');

//create a server
let server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    // res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(`<html>
  <head>
    <title>My First Web Server</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <h1>Hello, anyone there?</h1>
    <div id="content"></div>
    <script src="script.js"></script>
  </body>
</html>`); //send a response back to the client
  } else if (req.url === '/style.css') {
    res.setHeader('Content-Type', 'text/css');
    // res.writeHead(200, {'Content-Type' : 'text/css'});
    res.write(`#content { color: blue }`);
  } else if (req.url === '/script.js') {
    res.setHeader('Content-Type', 'text/javascript');
    // res.writeHead(200, {'Content-Type' : 'text/javascript'});
    res.write(`document
    .getElementById('content')
    .appendChild(document.createTextNode('Welcome to Server-land!'));`);
  } else {
    res.setHeader('Content-Type', 'text/plain');
    // res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Page Not Found');
  }
  res.end(); //end the response
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('Server started...');
}); //the server listens on port 3000
