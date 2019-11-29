'use strict';

const fs = require('fs');
const path = require('path');

function getBlogs(req, res) {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    res.sendFile(path.join(__dirname, title));
  } else {
    // NOT FOUND
    res.statusCode = 404;
    res.send("NOT FOUND");
  }
}

function createBlogs(req, res) {
  const {
    title,
    content
  } = req.body;
  let response = "";
  if (title && content) {
    fs.writeFileSync(title, content);
    response = "ok";
  } else {
    // BAD REQUEST
    res.statusCode = 400;
    response = "failure";
  }
  res.send(response);
}

function updateBlogs(req, res) {
  const {
    title,
    content
  } = req.body;
  let response = "";
  if (title && content) {
    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      response = "ok";
    } else {
      // NOT FOUND
      res.statusCode = 404;
      response = "post does not exist";
    }
  } else {
    // BAD REQUEST
    res.statusCode = 400;
    response = "failure";
  }
  res.send(response);
}

function deleteBlogs(req, res) {
  const title = req.params.title;
  let response = "";
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    response = "ok";
  } else {
    // NOT FOUND
    response = "NOT FOUND";
    res.statusCode = 404;
  }
  res.send(response);
}


module.exports = {
  getBlogs,
  createBlogs,
  updateBlogs,
  deleteBlogs
}