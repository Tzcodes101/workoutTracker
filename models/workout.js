
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//workoutSchema = new Workout
const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"

                },
                duration: {
                    type: Number,
                    required: "Enter how long the exercise was done in minutes"
                },
                weight: {
                    type: Number,
                    //required: "Enter exercise weight"
                },
                reps: {
                    type: Number,
                    //required: "Enter the number of sets"
                },
                sets: {
                    type: Number,
                    //required: "Enter the number of reps"
                },
                distance: {
                    type: Number,
                    //required: "Enter the distance of the exercise"
                }

            }
        ]
    },
    {
        toJSON: {
        virtuals: true
        }
    }
    );

//workoutSchema.virtual; starting wtih 0, give total amount of exercises 
WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema)

//export Workout
module.exports = Workout;