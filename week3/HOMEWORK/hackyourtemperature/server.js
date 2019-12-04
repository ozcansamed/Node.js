'use strict';

const express = require('express');
const axios = require('axios');
const expressHandlebars = require('express-handlebars');
const apiKey = require('./sources/keys.json').API_KEY;

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
    axios(`https://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${cityName}&units=metric`)
      .then(response => {
        res.render("index", {
          weatherText: `${response.data.name} : ${response.data.main.temp} °C`
        });
      })
      .catch(() => {
        res.render("index", {
          weatherText: "City is not found!"
        });
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