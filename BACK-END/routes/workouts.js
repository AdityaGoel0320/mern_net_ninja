let express = require("express")
let router = express.Router();


// importing fnc from controller
let { createWorkout, getSingleWorkout, getWorkouts , D , updateWorkout } = require("../Controllers/workoutsController")



router.get("/", getWorkouts)


router.get("/:id", getSingleWorkout)

// POST a new workout

// now i want to directly import fnc of create a workout

router.post("/", createWorkout);




// UPDATE a new workout
router.patch("/:id",updateWorkout)




// DELETE a new workout
router.delete("/:id",D) ; 



module.exports = router; 