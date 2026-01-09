require("../Connection")
const mongoose = require("mongoose")

const CareersData = new mongoose.Schema({
    name : String,
    email : String,
    contact : String,
    resume : String,
    coverLetter : String,
    read : Boolean
})


module.exports = mongoose.model("CareersData", CareersData)