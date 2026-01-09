const express = require("express")
const Router = express.Router()
const upload = require("../Middleware/ImageUpload")

const {Signup, Login, LogOut, CheckLogin, SendOTP} = require("../Controller/AdminController/AuthAPI's")
const {AddMember, UpdateMember, DeleteMember, GetMembers} = require("../Controller/AdminController/TeamAPI's")
const {GetJobs, AddJob, UpdateJob, DeleteJob, ApplyJob, GetJobApplications, DeleteJobApplicatoins, ReadJobApplication, showHideJob} = require("../Controller/AdminController/CareersAPI's")
const {DeleteContact,UpdateContact, AddContact, GetContact, ReadContactMessage, GetCompnayData, AddCompanyData, UpdateCompanyData} = require("../Controller/AdminController/ContactAPI's")
const TokenVarify = require("../Middleware/TokenVarify")

Router.post("/signup", Signup)
Router.post("/login", Login)
Router.post("/logout", LogOut)
Router.get("/checklogin", CheckLogin)
Router.post("/send-otp", SendOTP)

// Manage Team 
Router.post('/manageteam/addmember', AddMember)
Router.put('/manageteam/updatemember/:_id', UpdateMember)
Router.delete('/manageteam/deletemember/:_id', DeleteMember)
Router.get('/manageteam/getmembers', GetMembers)


// Manage Career 
Router.post('/managecareer/addjob', AddJob)
Router.get('/managecareer/getjobs', GetJobs)
Router.put('/managecareer/updatejob/:_id', UpdateJob)
Router.delete('/managecareer/deletejob/:_id', DeleteJob)
Router.put('/managecareer/showHideJob/:_id', showHideJob)

Router.post('/managecareer/applyjob', upload.single('resume') , ApplyJob)
Router.get('/managecareer/getjobapplications', GetJobApplications)
Router.delete('/managecareer/DeleteJobApplicatoins/:_id', DeleteJobApplicatoins)
Router.put('/managecareer/ReadJobApplicatoins/:_id', ReadJobApplication)


// Manage Contact 
Router.post('/managecontact/AddContact', AddContact, )
Router.put('/managecontact/UpdateContact/:_id', UpdateContact)
Router.put('/managecontact/ReadContactMessage/:_id', ReadContactMessage)
Router.delete('/managecontact/DeleteContact/:_id', DeleteContact)
Router.get('/managecontact/GetContact', GetContact)

// Manage Company Contact 
Router.post('/managecontact/addCompanyData', AddCompanyData)
Router.get('/managecontact/getCompanyData', GetCompnayData)
Router.put('/managecontact/updateCompanyData/:_id', UpdateCompanyData)


module.exports = Router