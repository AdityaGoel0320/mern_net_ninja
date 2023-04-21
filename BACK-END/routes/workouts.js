let express = require("express")
let router = express.Router();


// importing fnc from controller
let { createWorkout, getSingleWorkout, getWorkouts } = require("../Controllers/workoutsController")



router.get("/", getWorkouts)


router.get("/:id", getSingleWorkout)

// POST a new workout

// now i want to directly import fnc of create a workout

router.post("/", createWorkout);




// UPDATE a new workout
router.patch("/:id", (req, res) => {
    res.json({
        msg: "update a new workout"
    })
})




// DELETE a new workout
router.delete("/:id", (req, res) => {
    res.json({
        msg: "DELETE a new workout"
    })
})



module.exports = router; 