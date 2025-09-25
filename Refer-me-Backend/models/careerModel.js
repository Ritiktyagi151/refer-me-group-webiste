import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true }, // store icon name like "FaUserTie"
    whatsappLink: { type: String, required: true },
    whatsappChannel: { type: String },
    features: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export default mongoose.model("CareerGroup", careerSchema);
