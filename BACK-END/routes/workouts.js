let express = require("express")
let router = express.Router();


router.get("/", (req, res) => {
    res.json({
        msg: "get all workout"
    })
})


router.get("/:id", (req, res) => {
    res.json({
        msg: "get a single workout"
    })
})

// POST a new workout
router.post("/:id", (req, res) => {
    res.json({
        msg: "add a new workout"
    })
})




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