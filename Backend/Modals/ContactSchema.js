require("../Connection")

const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    name : String,
    email : String,
    subject : String,
    message : String,
    read : Boolean
})

module.exports = mongoose.model("contactdata", ContactSchema)