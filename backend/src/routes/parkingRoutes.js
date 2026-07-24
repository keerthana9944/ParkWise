const express = require("express");

const { createParking } = require("../controllers/parkingController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("owner", "admin"),
  createParking
);

module.exports = router;