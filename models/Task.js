const mongoose = require("mongoose");
const { Schema } = mongoose;

// !! TODO Add new values here once
// !! we realize what the shape should be.

const TaskSchema = new Schema({
  title: { type: String, required: [true, "can't be blank"] },
  description: { type: String, required: [true, "can't be blank"] },
  children: { type: [this] }
});

//  Make note, the children array will not happen
//  if there is nothing in it.
//  Don't make a function that explicitly depends on it existing.

mongoose.model("tasks", TaskSchema);
