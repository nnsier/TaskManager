const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: [true, "can't be blank"] },
  email: {
    type: String,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"]
  },
  password: {
    type: String,
    required: [true, "can't be blank"]
  }
});

module.exports = User = mongoose.model("users", UserSchema);
