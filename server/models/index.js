const Sequelize = require("sequelize-hierarchy")();
require("dotenv").config();
const config = require("./config");

let db;

console.log(process.env.NODE_ENV);

var environment = process.env.NODE_ENV || "development";

if (environment == "production") {
  db = new Sequelize(config.url);
  //this is going to probably cause us issue...
  //point to .env with that
} else if (environment == "test") {
  console.log("test...");
} else if (environment == "development") {
  db = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    { dialect: "postgres" }
  );
}

const models = {
  User: db.import("./User"),
  Task: db.import("./Task")
};
Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { models, db };
