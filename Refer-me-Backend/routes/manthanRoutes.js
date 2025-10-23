import express from "express";
import {
  getUpcomingEvents,
  getPastEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/manthanController.js";

const router = express.Router();

// ✅ Fetch events
router.get("/upcoming", getUpcomingEvents);
router.get("/past", getPastEvents);

// ✅ Add new events (JSON)
router.post("/upcoming", addEvent);
router.post("/past", addEvent); // optional if you want to add past events manually

// ✅ Update / Delete
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
