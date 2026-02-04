const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv")
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
   res.send("My-Portfolio server running successfylly")
})


// Router for Admin API's 
const AdminRouter = require("./Router/AdminRouter")
app.use('/admin', AdminRouter)

// Router for User API's 
const UserRouter = require("./Router/UserRouter")
app.use('/user', UserRouter)



app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})

export default app;