import mongoose from "mongoose";
import { isDevelopment } from "../config/constants.js";

const DEV_DB = process.env.DEV_DB;
const PROD_DB = process.env.PROD_DB;
const PROD_DB_NAME = process.env.PROD_DB_NAME;
const DEV_DB_NAME = process.env.DEV_DB_NAME;

const DB_URI = isDevelopment ? DEV_DB : PROD_DB;
const DBNAME = isDevelopment ? DEV_DB_NAME : PROD_DB_NAME;

const dbConn = mongoose.connection;
dbConn.on("connected", () => {
  console.log("Mongoose connected");
});

const connectDB = () => {
  mongoose.connect(DB_URI, {
    dbName: DBNAME,
    autoIndex: false,
  });
};

const disconnectDB = () => {
  mongoose.connection.close();
};

export { connectDB, disconnectDB };
