require("../Connection")
const mongoose = require("mongoose")

const CareerSchema = new mongoose.Schema({
    name : String,
    department : String,
    location : String,
    jobType : String,
    jobLevel : String,
    openings : Number,
    experience : String,
    postedDate : { type: Date, default: Date.now },
    // postedDate : Date,
    applyEndDate : Date,
    description : String,
    responsibilities : String,
    requirements : String,
    benefits : String,
    link : String,
    show : Boolean
})


module.exports = mongoose.model("CareerSchema", CareerSchema)