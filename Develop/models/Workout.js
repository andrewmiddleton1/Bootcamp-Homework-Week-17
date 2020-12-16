const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: String,
  name: String,
  date: {
    type: Date,
    default: Date.now
  },
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number
});

const WorkoutSchema = new Schema({
  type: String,
  name: String,
  day: {
    type: Date,
    default: Date.now()
  },
  totalDuration: Number,
  totalDistance: Number,
  exercises: [ExerciseSchema]
});



const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;
