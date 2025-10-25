import express from "express";
import {
  getUpcomingEvents,
  getPastEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/manthanController.js";

// --- FIX HERE ---
// 'middleware' की जगह 'middlewares' (plural) और 'upload.js' का उपयोग करें
import upload from "../middlewares/upload.js"; 

const router = express.Router();

// ✅ Fetch events (No change)
router.get("/upcoming", getUpcomingEvents);
router.get("/past", getPastEvents);

// ✅ Add new events (JSON)
router.post("/upcoming", upload.single("image"), addEvent);
router.post("/past", upload.single("image"), addEvent);

// ✅ Update / Delete
router.put("/:id", upload.single("image"), updateEvent);
router.delete("/:id", deleteEvent);

export default router;