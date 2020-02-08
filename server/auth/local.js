const { Strategy: LocalStrategy } = require("passport-local");
const { models } = require("../models");
const { User } = models;

const localStrategy = new LocalStrategy(async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) return done(null, false, { message: "user not found" });

    const valid = await user.isValidPassword(password);
    if (!valid) return done(null, false, { message: "invalid password" });

    return done(null, user.toJSON());
  } catch (err) {
    done(err);
  }
});

module.exports = localStrategy;
