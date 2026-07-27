const Parking = require("../models/Parking");
const Slot = require("../models/Slot");

const generateSlots = async (req, res) => {
    try {

        const {
            parkingId,
            prefix,
            count,
            vehicleType,
            isEV,
        } = req.body;

        // Check if parking exists
        const parking = await Parking.findById(parkingId);

        if (!parking) {
            return res.status(404).json({
                success: false,
                message: "Parking not found",
            });
        }

        const slots = [];

        for (let i = 1; i <= count; i++) {

            slots.push({
                parking: parkingId,
                slotNumber: `${prefix}${i}`,
                vehicleType,
                isEV,
                status: "available",
            });

        }

        const createdSlots = await Slot.insertMany(slots);

        return res.status(201).json({
            success: true,
            message: "Slots generated successfully",
            count: createdSlots.length,
            data: createdSlots,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to generate slots",
            error: error.message,
        });

    }
};

const getSlotsByParking = async (req, res) => {
    try {

        const { parkingId } = req.params;

        const parking = await Parking.findById(parkingId);

        if (!parking) {
            return res.status(404).json({
                success: false,
                message: "Parking not found",
            });
        }

        const slots = await Slot.find({
            parking: parkingId,
        }).sort({
            slotNumber: 1,
        });

        return res.status(200).json({
            success: true,
            count: slots.length,
            data: slots,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch slots",
            error: error.message,
        });

    }
};

const getSlotById = async (req, res) => {
    try {

        const { id } = req.params;

        const slot = await Slot.findById(id).populate(
            "parking",
            "name city address"
        );

        if (!slot) {
            return res.status(404).json({
                success: false,
                message: "Slot not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: slot,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch slot",
            error: error.message,
        });

    }
};


const updateSlot = async (req, res) => {
    try {
        
        const { id } = req.params;
        
        const slot = await Slot.findById(id);
        
        if (!slot) {
            return res.status(404).json({
                success: false,
                message: "Slot not found",
            });
        }
        
        const parking = await Parking.findById(slot.parking);
        
        if (!parking) {
            return res.status(404).json({
                success: false,
                message: "Parking not found",
            });
        }
        console.log("Parking Owner:", parking.owner.toString());
        console.log("Logged In User:", req.user.id);
        console.log("Role:", req.user.role);

        if (
            parking.owner.toString() !== req.user.id &&
            req.user.role !== "admin"
        ) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this slot.",
            });
        }

        const updatedSlot = await Slot.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        return res.status(200).json({
            success: true,
            message: "Slot updated successfully",
            data: updatedSlot,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to update slot",
            error: error.message,
        });

    }
};

const deleteSlot = async (req, res) => {
    try {

        const { id } = req.params;

        const slot = await Slot.findById(id);

        if (!slot) {
            return res.status(404).json({
                success: false,
                message: "Slot not found",
            });
        }

        const parking = await Parking.findById(slot.parking);

        if (!parking) {
            return res.status(404).json({
                success: false,
                message: "Parking not found",
            });
        }

        if (
            parking.owner.toString() !== req.user.id &&
            req.user.role !== "admin"
        ) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this slot.",
            });
        }

        await Slot.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Slot deleted successfully",
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to delete slot",
            error: error.message,
        });

    }
};

module.exports = {
    generateSlots,
    getSlotsByParking,
    getSlotById,
    updateSlot,
    deleteSlot,
};