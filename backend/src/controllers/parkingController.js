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

module.exports = {
    createParking,
};