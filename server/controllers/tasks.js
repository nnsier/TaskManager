const { body, validationResult } = require("express-validator");
const { verify } = require("../auth/index");
const { models } = require("../models");
const { Task } = models;

exports.createTask = async (req, res, next) => {
  const decoded = verify(req);
  const UserId = decoded.user.id;
  try {
    const { title, description, parentId } = req.body;
    const task = await Task.create({ UserId, title, description, parentId });

    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong." });
  }
};

exports.loadTasks = async (req, res, next) => {
  const decoded = verify(req);
  const UserId = decoded.user.id;
  const tasks = await Task.findAll({ where: { UserId } });
  res.status(200).json(tasks);
};

exports.validate = () => {
  const errors = [];
  return errors;
};
