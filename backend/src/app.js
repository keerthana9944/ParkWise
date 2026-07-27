const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/authRoutes");
const parkingRoutes = require("./routes/parkingRoutes");
const slotRoutes = require("./routes/slotRoutes");

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to ParkWise");
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// Parking Routes
app.use("/api/parkings", parkingRoutes);

// Slot Routes
app.use("/api/slots", slotRoutes);

module.exports = app;