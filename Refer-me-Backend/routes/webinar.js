import express from "express";
import {
  getWebinars,
  getWebinarById,
  addWebinar,
  updateWebinar,
  deleteWebinar,
} from "../controllers/webinarController.js";

const router = express.Router();

// CRUD APIs
router.get("/list", getWebinars);
router.get("/list/:id", getWebinarById);
router.post("/list", addWebinar);
router.put("/list/:id", updateWebinar);
router.delete("/list/:id", deleteWebinar);

export default router;
