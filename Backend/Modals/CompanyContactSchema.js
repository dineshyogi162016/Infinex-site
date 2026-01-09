require("../Connection")

const mongoose = require("mongoose")

const CompanyContactSchema = new mongoose.Schema({
    email : String,
    contact : String,
    address : String,
    OpenHour : String,
    LocationMap : String,
    SocialMedia : {
        Instagram : String,
        Facebook : String,
        Linkedin : String,
        GitHub : String
    }
})

module.exports = mongoose.model("CompanyContact", CompanyContactSchema)