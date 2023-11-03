import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error);
  }

  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error("Connection error:", error);
  });

  db.once("open", () => {
    console.log("Connected to MongoDB");
  });

  // Handle disconnect events
  db.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });

  // Handle close events
  db.on("close", () => {
    console.log("MongoDB connection closed");
  });

  process.on("SIGINT", () => {
    db.close(() => {
      console.log("MongoDB connection closed due to application termination");
      process.exit(0);
    });
  });
};

export default connectDB;
