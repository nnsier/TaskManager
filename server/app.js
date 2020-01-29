const express = require("express");
const bodyParser = require("body-parser");
// const passport = require("passport");
const path = require("path");
require("dotenv").config();

const app = express();

const { db, models } = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./models/Task");
require("./routes/api/taskRoutes")(app);

// app.use(passport.initialize());

// require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`You're listening to your favorite station. Enjoy ${PORT}`);
    });
    console.log("Database connected....");
  })
  .error(err => {
    console.log(err);
  });
