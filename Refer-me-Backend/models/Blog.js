import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Image URL or path
    required: true,
  },
  author: {
    type: String,
    default: "Admin",
  },
  category: {
    type: String,
    required: true,
  },
  tags: [String],
  slug: {
    type: String,
    required: true,
    unique: true,
  }
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);
