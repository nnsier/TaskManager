module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET || "development_secret",
    expiry: "7d"
  }
};
