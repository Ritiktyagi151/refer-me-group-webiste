// models/Course.js
import mongoose from "mongoose";

// Main Course Schema
const courseSchema = new mongoose.Schema(
  {
    // --- YEH LINE HATA DEIN ---
    // id: { type: String, unique: true },
    // -------------------------

    // Category ab simple string hai
    category: String,

    curriculumPdfUrl: String,
    title: String,

    shortDesc: String,
    longDesc: String,

    type: String,
    duration: String,
    enrolled: String,
    bannerImage: String,

    // Fields from Admin Panel
    recommended: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
    mostPurchased: { type: Boolean, default: false },
    topRanked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
