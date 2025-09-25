import { Router } from "express";
import upload from "../middlewares/upload.js";
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/courseController.js";

const router = Router();

// Course CRUD
router.get("/", getCourses);
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

// Category CRUD inside course
router.post("/:courseId/categories", upload.single("image"), addCategory);

router.put("/:courseId/categories/:categoryId", updateCategory);
router.delete("/:courseId/categories/:categoryId", deleteCategory);

export default router;
