import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Import routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// Load environment variables first
dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Test basic route before loading other routes
app.get("/api/healthcheck", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// API Routes
try {
  app.use("/api/auth", authRoutes);
  app.use("/api/messages", messageRoutes);
  app.use("/api/users", userRoutes);
  console.log("All routes loaded successfully");
} catch (err) {
  console.error("Error loading routes:", err);
  process.exit(1);
}

// Static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// SPA fallback - must be last
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start server
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});