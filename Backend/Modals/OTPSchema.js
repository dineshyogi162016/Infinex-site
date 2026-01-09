require("../Connection")
const mongoose = require("mongoose")

const OTP_Data = new mongoose.Schema({
    user_identifier : String,
    otp_code : Number,
    created_at : { type: Date, default: Date.now },
    expires_at : { type : Date, default : () => Date.now() + 5 * 60 * 1000, index :{ expires: '0s' } }
})


module.exports = mongoose.model("OTP", OTP_Data)