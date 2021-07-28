const express = require("express");
const mongoose =require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error in connecting to mongo", err)
})

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
})