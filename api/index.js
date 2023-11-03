import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./database.js";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
const app = express();
const port = 8000;
dotenv.config();

//Middleware
app.use("api/v1/register", authRoute);
app.use("api/v1/hotels", hotelsRoute);
app.use("api/v1/user", usersRoute);
app.use("api/v1/rooms", roomsRoute);

app.listen(port, () => {
  connectDB();
  console.log("listening on port " + port);
});
