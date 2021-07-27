const express = require("express");
require('dotenv').config()

const app = express();

const mongoURI = process.env.MONGO_URI

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
})