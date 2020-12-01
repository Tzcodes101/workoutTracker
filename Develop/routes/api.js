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
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    );
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
    Workout.find({highVal: { $lte: 8 } }, (err, data) =>{
        if(err) {
            console.log(err);
        } 
        else {
            res.json(data);
        };
    });
});

//router.delete(/api/workouts)
router.delete("api/workouts/:id", (req, res) => {
    Workout.deleteOne({ _id: req.params.id}, (err, data) => {
        if(err) {
            console.log(err);
        } 
        else {
            res.json(data);
            console.log("Workout deleted");
        };
    });
});
//export router
module.exports = router;