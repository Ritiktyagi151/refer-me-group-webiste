// routes/courseRoutes.js
import { Router } from "express";
import upload from "../middlewares/upload.js"; // Make sure this path is correct
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

const router = Router();

// Define fields jo hum upload karenge
const courseUploadFields = [
  { name: "bannerImage", maxCount: 1 },
  { name: "curriculumPdfUrl", maxCount: 1 },
];

// Course CRUD
router.get("/", getCourses);

// POST route ab file uploads ko handle karega
router.post("/", upload.fields(courseUploadFields), createCourse);

// PUT route bhi ab file uploads ko handle karega
router.put("/:id", upload.fields(courseUploadFields), updateCourse);

router.delete("/:id", deleteCourse);

export default router;
