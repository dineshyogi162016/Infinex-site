require("../Connection")
const { type } = require("@testing-library/user-event/dist/type")
const mongoose = require("mongoose")

const LoginSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true, 'Email is required'],
        unique : [true, 'Email must be unique']
    },
    password : {
        type : String,
        required : [true, "Password is required"]
    }
})



module.exports = mongoose.model("LoginData", LoginSchema)