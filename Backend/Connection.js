const mongoose = require("mongoose");
require("dotenv").config();

const DATABASE_URI = process.env.DATABASE_URI;

if (!DATABASE_URI) {
  throw new Error("DATABASE_URI is not defined. Check your .env file.");
}

mongoose
  .connect(DATABASE_URI, { dbName: "Infinex" })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });