// models/Webinar.js
import mongoose from "mongoose";

const webinarSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    speaker: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    timezone: { type: String, default: "IST" },
    duration: { type: Number, required: true }, // in minutes
    registered: { type: Number, default: 0 },
    live: { type: Boolean, default: false },
    category: { type: String },
    rating: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    description: { type: String },
    speakerBio: { type: String },
    learningPoints: [String],
    audience: [String],
    price: { type: Number, default: 0 }, // ✅ for PayU payment
  },
  { timestamps: true }
);

export default mongoose.model("Webinar", webinarSchema);
