import mongoose from "mongoose";

const manthanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    // --- Added fields ---
    time: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    // --------------------
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: ["upcoming", "past"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Manthan", manthanSchema);