//dependencies
//router, Workout (from model)
const router = require("express").Router();
const Workout = require("../models/workout.js");

//routes

//router.post (/api/workouts)
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            if (err) {
                console.log(err);
            }
        });
});

//router.put(/api/workouts/:id)
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
});

//router.get(/api/workouts)
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//router.get(/api/workouts/range)
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            if (err) {
                console.log(err);
            }
        });
});


module.exports = router;