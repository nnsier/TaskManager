const { models } = require("../models");

const runSeeds = async () => {
  await models.User.create({
    username: "Leif",
    password: "good pass"
  });
  await models.Task.create({
    title: "top level",
    description: "level 1",
    UserId: 1
  });
  await models.Task.create({
    title: "second level",
    description: "level 2",
    parentId: 1,
    UserId: 1
  });
  await models.Task.create({
    title: "third level",
    description: "level 3",
    parentId: 2,
    UserId: 1
  });
  await models.Task.create({
    title: "still third level",
    description: "level 3",
    parentId: 2,
    UserId: 1
  });
};

exports.runSeeds = runSeeds;
