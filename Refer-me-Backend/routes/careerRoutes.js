import express from "express";
import {
  getCareerGroups,
  createCareerGroup,
  updateCareerGroup,
  deleteCareerGroup,
} from "../controllers/careerController.js";

const router = express.Router();

// Public Routes
router.get("/", getCareerGroups);

// Admin Routes
router.post("/", createCareerGroup);
router.put("/:id", updateCareerGroup);
router.delete("/:id", deleteCareerGroup);

export default router;
