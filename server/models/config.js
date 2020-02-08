require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    user: process.env.PROD_DATABASE_USER,
    database: process.env.PROD_DATABASE,
    password: process.env.PROD_DATABASE_PASSWORD,
    dialect: "postgres"
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres"
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  }
};
