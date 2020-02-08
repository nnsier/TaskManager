const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config");

exports.createAuthToken = user => {
  return jwt.sign({ user }, config.jwt.secret, {
    expiresIn: config.jwt.expiry
  });
};

exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json(info);
    const token = this.createAuthToken(user);
    res.json({ token });
  })(req, res);
};

exports.verify = req => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    console.log(token);
    var decoded = jwt.verify(token, config.jwt.secret);
    console.log(decoded);
    return decoded;
  } catch (err) {
    return err;
  }
};

exports.jwtAuth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    req.user = user;
    next();
  })(req, res);
};

exports.postAuth;
