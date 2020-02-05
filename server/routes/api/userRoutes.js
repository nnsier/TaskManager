const { models } = require("../../models");

const { User } = models;

// If we want to get all tasks back with the hierarchy in check,
// you can pass { hierarchy: true } to findAll()

//going to have to use authorization and middleware to correctly grab the request, here.

//only check if you can delete those based on your userId. You'll have to prove that

//protect user's data of course.

module.exports = app => {
  app.get("/api/user", async (req, res) => {
    let users = await User.findAll();
    console.log(users);
    return res.status(200).send(users);
  });

  app.post("/api/user", async (req, res) => {
    try {
      let user = await User.create(req.body);
      await User.isValidPassword(req.body.password, user.email);
      return res.status(201).send({
        error: false,
        user
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  });

  app.delete("/api/user/:id", async (req, res) => {
    const task = await User.destroy({ where: { id: req.params.id } });

    return res.status(202).send({
      error: false,
      task
    });
  });
};
