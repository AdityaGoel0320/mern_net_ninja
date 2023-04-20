require("dotenv").config()
let express = require("express")
let mongoose = require("mongoose")
let app = express();


// routes
let workoutroutes = require("./routes/workouts")


// connecting to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(process.env.PORT, () => {
            console.log(`connected to db and port ${process.env.PORT}`)
        })

    })
    .catch((error) => {
        console.log(error)
    }
    )

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use("/api/workouts", workoutroutes);






