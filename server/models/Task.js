const task = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Task.associate = models => {
    Task.belongsTo = models.User;
  };

  Task.isHierarchy();

  return Task;
};

module.exports = task;
