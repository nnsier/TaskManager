const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/TaskManager`
);

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`You're listening to your favorite station. Enjoy ${PORT}`);
});
