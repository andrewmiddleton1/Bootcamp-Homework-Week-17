var db = require("../models");
const express = require("express");
const userRouter = express.Router();

//GET route for all workouts
userRouter.get("/api/workouts", function (req, res) {

  db.Workout.find({})
    .then(function (dbWorkouts) {
      res.json(dbWorkouts);

    });

});

// Route for getting workouts in the last 7 days
userRouter.get("/api/workouts/range", function (req, res) {

  db.Workout.find({}).limit(7).then(function (dbWorkouts) {
    res.json(dbWorkouts);

  });

});

// //POST route, for creating new workout
userRouter.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body).then(dbWorkouts => {
    res.json(dbWorkouts);
  })
    .catch(err => {
      res.json(err);
    });
});

// PUT route for updating workouts (with exercises)
userRouter.put("/api/workouts/:id", function (req, res) {
  console.log(req.body);
  console.log(req.params.id);
  db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body }, $inc: { totalDuration: req.body.duration }, totalDistance: req.body.distance },

  ).then(function (updatedWorkout) {
    res.json(updatedWorkout);
  });
});

module.exports = userRouter;
