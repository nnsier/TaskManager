const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

require("./models/Task");

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/TaskManager`,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

app.use(bodyParser.json());

require("./routes/taskRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`You're listening to your favorite station. Enjoy ${PORT}`);
});