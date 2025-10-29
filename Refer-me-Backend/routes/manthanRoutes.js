import express from "express";
import {
  getUpcomingEvents,
  getPastEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/manthanController.js";

import upload from "../middlewares/upload.js";  // ✅ Correct import

const router = express.Router();

// Fetch events
router.get("/upcoming", getUpcomingEvents);
router.get("/past", getPastEvents);

// Add new events (with upload)
router.post("/upcoming", upload.single("image"), addEvent);
router.post("/past", upload.single("image"), addEvent);

// Update / Delete
router.put("/:id", upload.single("image"), updateEvent);
router.delete("/:id", deleteEvent);

export default router;