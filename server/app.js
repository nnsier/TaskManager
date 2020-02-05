const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const localStrategy = require("./auth/local");
const jwtStrategy = require("./auth/jwt");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("common"));
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

require("dotenv").config();

const { db, models } = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require("./routes/api/userRoutes")(app);
// require("./routes/api/taskRoutes")(app);

require("./routes")(app);

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

db.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`You're listening to your favorite station. Enjoy ${PORT}`);
    });
    console.log("Database connected....");
  })
  .error(err => {
    console.log(err);
  });
