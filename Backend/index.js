// const express = require("express")
// const cors = require("cors")
// const dotenv = require("dotenv")
// const cookieParser = require('cookie-parser');

import express from "express";
const app = express()
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

dotenv.config()

const port = process.env.PORT_VALUE || 4200

app.use(express.json())
app.use(cookieParser());

app.use(cors({
  origin: 'https://infinex-site.vercel.app', // frontend origin for Live  
  origin: 'http://localhost:3000', // your frontend origin For Local
    credentials: true                // allow sending cookies
  }));
app.use("/uploads", express.static("uploads")); // Backend folder ki image ko url ke throw frontend me show karwane ke liye 


// Testing End Point 
app.get("/", (req, res)=>{
   res.send("Infinex Site server running successfully")
})


// Router for Admin API's 
import AdminRouter from "./Router/AdminRouter.js"
app.use('/admin', AdminRouter)

// Router for User API's 
import UserRouter from "./Router/UserRouter.js"
app.use('/user', UserRouter)



app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})

export default app;