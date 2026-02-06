require("../Connection")
// const { type } = require("@testing-library/user-event/dist/type")
const mongoose = require("mongoose")

const SignupSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required']
    },
    email : {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : [true, 'Password is required']
    },
    role : {
        type : String,
    },
    status : Boolean

})


module.exports = mongoose.model("SignupDatas", SignupSchema)