const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("../config");

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: "secret",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (token, done) => done(null, token.user)
);

module.exports = jwtStrategy;
