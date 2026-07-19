const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/authRoutes");

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to ParkWise");
});

// Authentication Routes
app.use("/api/auth", authRoutes);

module.exports = app;