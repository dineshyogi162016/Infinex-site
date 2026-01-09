require("../Connection")
const mongoose = require("mongoose")


const TeamSchema = new mongoose.Schema({
    name : String,
    image : String,
    email : String,
    jobrole : String,
    contact : String,
    address : String,
    bio : String,
    skills : String,
    show : Boolean
})


module.exports = mongoose.model("TeamData", TeamSchema)