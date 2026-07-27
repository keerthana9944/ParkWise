const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema(
    {
        parking: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Parking",
            required: true,
        },

        slotNumber: {
            type: String,
            required: true,
            trim: true,
        },

        vehicleType: {
            type: String,
            enum: ["2-wheeler", "4-wheeler"],
            required: true,
        },

        isEV: {
            type: Boolean,
            default: false,
        },

        status: {
            type: String,
            enum: [
                "available",
                "reserved",
                "occupied",
                "maintenance",
            ],
            default: "available",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Slot", slotSchema);