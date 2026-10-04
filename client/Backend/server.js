import"dotenv/config"
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js"; 
import Task from "./models/Tasks.js";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// ---- Middleware ----
app.use(cors());          // React app (port 5173) ko is API (port 5000) ko call karne deta hai
app.use(express.json());  // request body ka JSON parse karta hai

  connectDB(); // MongoDB se connect karne ke liye function call

  app.get("/", (req, res) => {
    res.send("API is running...");
  });

  app.use("/api/tasks" ,taskRoutes);      // Task routes use karein
  app.use("/api/auth", authRoutes);      // Auth routes use karein

  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

