'use strict';

const express = require('express');
const axios = require('axios');
const expressHandlebars = require('express-handlebars');

// init express
const app = express();

app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", express.urlencoded({
  extended: true
}), (req, res) => {
  const cityName = req.body.cityName;
  if (cityName) {
    res.send({
      cityName
    });
  } else {
    res.status(400);
    res.send();
  }
});

// listen on a port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});