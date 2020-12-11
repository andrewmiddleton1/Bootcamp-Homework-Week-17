const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: String,
  iscardio: Boolean,
  duration: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
