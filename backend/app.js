const express = require("express");

const path = require("path");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

require('dotenv').config();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

const URI=process.env.MONGO_URI;

mongoose
  .connect(
    URI
  )
  .then((result) => {
    console.log("Connected!");
    app.listen(8001);
  })
  .catch((err) => {
    console.log(err);
  });
