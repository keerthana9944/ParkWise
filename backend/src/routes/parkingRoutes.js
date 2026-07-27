const express = require("express");

const { createParking, getAllParkings, getParkingById, updateParking, deleteParking,} = require("../controllers/parkingController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getAllParkings);

router.get("/:id", getParkingById);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("owner", "admin"),
  createParking
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("owner", "admin"),
    updateParking
);

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("owner", "admin"),
    deleteParking
);

module.exports = router;