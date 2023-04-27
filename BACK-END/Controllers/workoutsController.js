// made this file as we want diff fnc to bulid here than impoirt directly in routesfile as to clean code


let Workout = require("../model/WorkoutsModel")
let mongoose = require("mongoose")


// to create a new workout
let createWorkout = async (req, res) => {
    let { title, load, reps } = req.body;

    try {
        let workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

// to get all workouts
let getWorkouts = async (req, res) => {
    try {
        let workout = await Workout.find({}).sort({ createdAt: -1 })
        res.status(200).json(workout)

    }
    catch (error) {
        console.log(error);
    }
}

// to get one workout
let getSingleWorkout = async (req, res) => {

    if (!mongoose.Types.objectId.isValid(id)) {
        return res.status(404).json({
            error: "id is incorrect"
        })
    }



    // to get that particulat id to display that workout
    let { id } = req.params;
    try {
        let workout = await Workout.findById(id);
        if (!workout) {
            return res.status(404).json({ error: "cannot find that id" })
        }
        return res.status(200).json(workout)


    }
    catch (error) {
        console.log(error);
    }
}



// to delete

let D = async (req, res) => {
    // ac check that if id give is wrong
    if (!mongoose.Types.objectId.isValid(id)) {
        return res.status(404).json({
            error: "id is incorrect"
        })
    }

    // to get that particulat id to display that workout
    let { id } = req.params;
    try {
        let workout = await Workout.findOneAndDelete({ _id: id });
        if (!workout) {
            return res.status(404).json({ error: "cannot find that id" })
        }
        return res.status(200).json(workout)


    }
    catch (error) {
        console.log(error);
    }

}


// to update a workout

let updateWorkout = async (req, res) => {
    // ac check that if id give is wrong
    if (!mongoose.Types.objectId.isValid(id)) {
        return res.status(404).json({
            error: "id is incorrect"
        })
    }

    // to get that particulat id to display that workout
    let { id } = req.params;
    try {
        let workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
        if (!workout) {
            return res.status(404).json({ error: "cannot find that id" })
        }
        return res.status(200).json(workout)


    }
    catch (error) {
        console.log(error);
    }

}









module.exports = {
    createWorkout, getSingleWorkout, getWorkouts, D, updateWorkout
}