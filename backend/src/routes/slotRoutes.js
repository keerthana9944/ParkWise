const express = require("express");

const { generateSlots, getSlotsByParking, getSlotById, updateSlot, deleteSlot, } = require("../controllers/slotController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
    "/generate",
    authMiddleware,
    roleMiddleware("owner", "admin"),
    generateSlots
);

router.get(
    "/parking/:parkingId",
    getSlotsByParking
);

router.get(
    "/:id",
    getSlotById
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("owner","admin"),
    updateSlot
);

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("owner", "admin"),
    deleteSlot
);

module.exports = router;