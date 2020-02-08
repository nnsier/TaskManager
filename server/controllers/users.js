const { body, validationResult } = require("express-validator");
const { login, createAuthToken } = require("../auth");
const { models } = require("../models");
const { User } = models;

exports.login = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  login(req, res, next);
};

exports.register = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  try {
    const { email, username, password } = req.body;
    const user = await User.create({ email, username, password });
    const token = createAuthToken(user.toJSON());
    res.status(201).json({ token });
  } catch (err) {
    res.status(401).json({ message: "Must be a unique email" });
  }
};

exports.validate = () => {
  const errors = [
    body("email")
      .exists()
      .withMessage("is required")

      .custom(value => value.trim() === value)
      .withMessage("cannot start or end with whitespaces")

      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      .withMessage("must be a valid email"),

    body("username")
      .exists()
      .withMessage("is required")

      .isLength({ min: 1 })
      .withMessage("cannot be blank")

      .isLength({ max: 32 })
      .withMessage("must be at most 32 characters long")

      .custom(value => value.trim() === value)
      .withMessage("cannot start or end with whitespace")

      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage("contains invalid characters"),

    body("password")
      .exists()
      .withMessage("is required")

      .isLength({ min: 1 })
      .withMessage("cannot be blank")

      .isLength({ min: 8 })
      .withMessage("must be at least 8 characters long")

      .isLength({ max: 72 })
      .withMessage("must be at most 72 characters long")
  ];

  return errors;
};
