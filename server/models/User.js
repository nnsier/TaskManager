const user = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  });

  User.associate = models => {
    User.hasMany(models.Task, { onDelete: "CASCADE" });
  };

  return User;
};

module.exports = user;
