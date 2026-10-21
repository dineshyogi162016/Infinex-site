// const express = require("express")
// const cors = require("cors")
// const dotenv = require("dotenv")
// const cookieParser = require('cookie-parser');

import express from "express";
const app = express()
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import connectDatabase from "./Connection.js";

dotenv.config()

const port = process.env.PORT || process.env.PORT_VALUE || 4200

const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(express.json())
app.use(cookieParser());

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
      return
    }

    callback(null, false)
  },
  credentials: true
}));
app.use("/uploads", express.static("uploads")); // Backend folder ki image ko url ke throw frontend me show karwane ke liye 


// Testing End Point 
app.get("/", (req, res)=>{
   res.send("Infinex Site server running successfully")
})

app.use(async (req, res, next) => {
  try {
    await connectDatabase();
    next();
  } catch (error) {
    console.error("Database connection error:", error.message);
    res.status(503).json({
      status: 503,
      success: false,
      message: "Database unavailable"
    });
  }
});


// Router for Admin API's 
import AdminRouter from "./Router/AdminRouter.js"
app.use('/admin', AdminRouter)

// Router for User API's 
import UserRouter from "./Router/UserRouter.js"
app.use('/user', UserRouter)




if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
  })
}

export default app;