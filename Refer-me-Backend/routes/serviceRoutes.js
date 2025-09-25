import express from "express";
import {
  getServices,
  upsertManthan,
  // Manthan Upcoming
  addUpcomingEvent,
  getUpcomingEvents,
  updateUpcomingEvent,
  deleteUpcomingEvent,
  // Manthan Past
  addPastEvent,
  getPastEvents,
  updatePastEvent,
  deletePastEvent,
} from "../controllers/serviceController.js";

const router = express.Router();

// -------------------- MAIN --------------------
// Get all services
router.get("/", getServices);

// Update or insert entire manthan object
router.post("/manthan", upsertManthan);

// -------------------- MANTHAN UPCOMING EVENTS --------------------
// Get all upcoming events
router.get("/manthan/upcoming", getUpcomingEvents);

// Add new upcoming event
router.post("/manthan/upcoming", addUpcomingEvent);

// Update upcoming event by ID
router.put("/manthan/upcoming/:id", updateUpcomingEvent);

// Delete upcoming event by ID
router.delete("/manthan/upcoming/:id", deleteUpcomingEvent);

// -------------------- MANTHAN PAST EVENTS --------------------
// Get all past events
router.get("/manthan/past", getPastEvents);

// Add new past event
router.post("/manthan/past", addPastEvent);

// Update past event by ID
router.put("/manthan/past/:id", updatePastEvent);

// Delete past event by ID
router.delete("/manthan/past/:id", deletePastEvent);

export default router;
