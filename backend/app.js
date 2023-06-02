const express = require("express");

const path = require("path");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

mongoose
  .connect(
    "mongodb+srv://Namit5151:MERNstack@cluster0.9dlxj.mongodb.net/expenses?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected!");
    app.listen(8001);
  })
  .catch((err) => {
    console.log(err);
  });
