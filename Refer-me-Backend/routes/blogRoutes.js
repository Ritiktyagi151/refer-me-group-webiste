// routes/blogRoutes.js
import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  uploadImage,
} from "../controllers/blogController.js";
import upload from "../middleware/upload.js"; // Adjust path if needed

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);
router.post("/upload", upload.single("image"), uploadImage); // New upload route

export default router;