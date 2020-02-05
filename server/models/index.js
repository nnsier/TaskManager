const Sequelize = require("sequelize-hierarchy")();
require("dotenv").config();
const db = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres"
  }
);
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
