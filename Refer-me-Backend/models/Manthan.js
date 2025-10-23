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
