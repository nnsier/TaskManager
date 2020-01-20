const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String
});

mongoose.model("tasks", taskSchema);
