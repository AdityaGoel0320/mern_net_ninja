let mongoose = require("mongoose")
let Schema = mongoose.Schema;


let workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    },
}, { timestamps: true })


module.exports  = mongoose.model("workout" , workoutSchema)