import express from "express";
import Setting from "../models/Setting.js";

const router = express.Router();

// Get settings (latest document)
router.get("/", async (req, res) => {
  try {
    const doc = await Setting.findOne().sort({ createdAt: -1 });
    res.json(doc || {});
  } catch (e) {
    res
      .status(500)
      .json({ error: "Failed to fetch settings", details: e.message });
  }
});

// Upsert settings
router.post("/", async (req, res) => {
  try {
    const doc = await Setting.findOneAndUpdate({}, req.body, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    res.json(doc);
  } catch (e) {
    res
      .status(400)
      .json({ error: "Failed to save settings", details: e.message });
  }
});

export default router;
