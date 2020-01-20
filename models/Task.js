const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: { type: String, required: [true, "can't be blank"] },
  description: { type: String, required: [true, "can't be blank"] },
  children: [this]
});

mongoose.model("tasks", taskSchema);
