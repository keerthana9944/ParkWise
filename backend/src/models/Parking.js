const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Parking name is required"],
      trim: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },

    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },

    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
    },

    pincode: {
      type: String,
      required: [true, "Pincode is required"],
      trim: true,
    },

    vehicleTypes: {
      type: [String],
      enum: ["2-wheeler", "4-wheeler", "ev"],
      required: [true, "Select at least one vehicle type"],
    },

    evDetails: {
      supportedVehicleTypes: {
        type: [String],
        enum: ["2-wheeler", "4-wheeler"],
        default: [],
      },

      chargingAvailable: {
        type: Boolean,
        default: false,
      },
    },

    totalSlots: {
      type: Number,
      required: [true, "Total slots are required"],
      min: 1,
    },

    availableSlots: {
      type: Number,
      required: true,
      min: 0,
    },

    pricing: {
      twoWheeler: {
        type: Number,
        default: 0,
        min: 0,
      },

      fourWheeler: {
        type: Number,
        default: 0,
        min: 0,
      },

      evTwoWheeler: {
        type: Number,
        default: 0,
        min: 0,
      },

      evFourWheeler: {
        type: Number,
        default: 0,
        min: 0,
      },
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Parking", parkingSchema);