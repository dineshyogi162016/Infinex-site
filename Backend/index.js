// const express = require("express")
import express from "express";
const app = express()
// const cors = require("cors")
import cors from "cors";
// const dotenv = require("dotenv")
import dotenv from "dotenv"

const cookieParser = require('cookie-parser');
dotenv.config()

const port = process.env.PORT_VALUE || 4200

app.use(express.json())
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000', // your frontend origin
    credentials: true                // allow sending cookies
  }));
app.use("/uploads", express.static("uploads")); // Backend folder ki image ko url ke throw frontend me show karwane ke liye 


// Testing End Point 
app.get("/", (req, res)=>{
   res.send("Infinex Site server running successfully")
})


// Router for Admin API's 
import AdminRouter from "./Router/AdminRouter"
app.use('/admin', AdminRouter)

// Router for User API's 
import UserRouter from "./Router/UserRouter"
app.use('/user', UserRouter)



app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})

export default app;