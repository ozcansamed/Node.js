'use strict';

const express = require('express');
const fs = require('fs');
const methods = require('./methods');

const app = express(); // Init Express
app.use(express.json()); // for parsing json in request body

// Define methods, routes
app.get('/blogs/:title', methods.getBlogs);

app.post('/blogs', methods.createBlogs);

app.put('/blogs', methods.updateBlogs);

app.delete('/blogs/:title', methods.deleteBlogs);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});