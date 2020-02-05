const bcrypt = require("bcrypt");

const user = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.isValidPassword = async function(password, email) {
    const user = await User.findOne({ where: { email: email } });
    return await bcrypt.compare(password, user.password);
  };
  User.addHook("beforeCreate", async user => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

  User.associate = models => {
    User.hasMany(models.Task, { onDelete: "CASCADE" });
  };

  return User;
};

module.exports = user;
