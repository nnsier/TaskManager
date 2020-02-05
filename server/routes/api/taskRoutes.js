const { models } = require("../../models");

const { Task } = models;

// If we want to get all tasks back with the hierarchy in check,
// you can pass { hierarchy: true } to findAll()

//going to have to use authorization and middleware to correctly grab the request, here.

//only check if you can delete those based on your userId. You'll have to prove that

//protect user's data of course.

module.exports = app => {
  app.get("/api/task", async (req, res) => {
    const UserId = { UserId: 1 };
    let tasks = await Task.findAll({ where: UserId });
    return res.status(200).send(tasks);
  });

  app.post("/api/task", async (req, res) => {
    try {
      console.log(req.body);
      let task = await Task.create(req.body);
      return res.status(201).send({
        error: false,
        task
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  });

  app.put("/api/task/:id", async (req, res) => {
    const { title, description, parentId } = req.body;

    const task = Task.update(
      { title, description, parentId },
      { where: { id: req.params.id } }
    );

    return res.status(202).send({
      error: false,
      task
    });
  });

  app.delete("/api/task/:id", async (req, res) => {
    const task = await Task.destroy({ where: { id: req.params.id } });

    return res.status(202).send({
      error: false,
      task
    });
  });
};
