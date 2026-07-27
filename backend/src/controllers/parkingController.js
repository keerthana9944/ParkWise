const Parking = require("../models/Parking");

const createParking = async (req, res) => {
    try {

        const {
            name,
            description,
            address,
            city,
            state,
            pincode,
            vehicleTypes,
            evDetails,
            totalSlots,
            pricing,
        } = req.body;

        const parking = await Parking.create({
            name,
            owner: req.user.id,
            description,
            address,
            city,
            state,
            pincode,
            vehicleTypes,
            evDetails,
            totalSlots,
            availableSlots: totalSlots,
            pricing,
        });

        return res.status(201).json({
            success: true,
            message: "Parking created successfully",
            data: parking,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to create parking",
            error: error.message,
        });

    }
};

const getAllParkings = async (req, res) => {
    try {

        const parkings = await Parking.find({
            isActive: true,
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: parkings.length,
            data: parkings,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch parkings",
            error: error.message,
        });

    }
};

const getParkingById = async (req, res) => {
    try {

        const { id } = req.params;

        const parking = await Parking.findById(id);

        if (!parking) {
            return res.status(404).json({
                success: false,
                message: "Parking not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: parking,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch parking",
            error: error.message,
        });

    }
};

const updateParking = async (req, res) => {
    try {

        const { id } = req.params;

        const parking = await Parking.findById(id);

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
                message: "You are not authorized to update this parking.",
            });
        }

        const updatedParking = await Parking.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        return res.status(200).json({
            success: true,
            message: "Parking updated successfully",
            data: updatedParking,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to update parking",
            error: error.message,
        });

    }
};

const deleteParking = async (req, res) => {
    try {

        const { id } = req.params;

        const parking = await Parking.findById(id);

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
                message: "You are not authorized to delete this parking.",
            });
        }

        await Parking.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Parking deleted successfully",
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to delete parking",
            error: error.message,
        });

    }
};

module.exports = {
    createParking,
    getAllParkings,
    getParkingById,
    updateParking,
    deleteParking,
};