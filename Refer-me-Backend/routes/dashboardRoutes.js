import express from "express";
import User from "../models/User.js";
import Blog from "../models/Blog.js";
import Course from "../models/Course.js";
import Contact from "../models/ContactMessage.js";
import Career from "../models/careerModel.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const users = await User.countDocuments();
    const blogs = await Blog.countDocuments();
    const courses = await Course.countDocuments();
    const messages = await Contact.countDocuments();
    const careers = await Career.countDocuments();

    res.json({
      users,
      blogs,
      courses,
      messages,
      careers,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

export default router;
