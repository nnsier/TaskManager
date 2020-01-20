const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: { type: String, required: [true, "can't be blank"] },
  password: {
    type: String,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  }
});
