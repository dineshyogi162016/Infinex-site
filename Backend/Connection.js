const mongoose = require("mongoose");
require("dotenv").config();

const DATABASE_URI = process.env.DATABASE_URI;
const DB_NAME = process.env.DB_NAME;

let connectionPromise;

const connectDatabase = () => {
  if (!DATABASE_URI) {
    return Promise.reject(new Error("DATABASE_URI is not defined. Check your environment variables."));
  }

  if (mongoose.connection.readyState === 1) {
    return Promise.resolve();
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(DATABASE_URI, { dbName: `${DB_NAME}` })
      .then(() => console.log("MongoDB connected"))
      .catch((error) => {
        connectionPromise = undefined;
        throw error;
      });
  }

  return connectionPromise;
};

module.exports = connectDatabase;