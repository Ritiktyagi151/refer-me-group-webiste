import express from "express";
import SiteMeta from "../models/SiteMeta.js";

const router = express.Router();

// GET footer
router.get("/", async (req, res) => {
  try {
    const doc = await SiteMeta.findOne({}, { footer: 1 }).sort({
      createdAt: -1,
    });
    res.json(doc?.footer || {});
  } catch (e) {
    res
      .status(500)
      .json({ error: "Failed to fetch footer", details: e.message });
  }
});

// POST footer (create or update)
router.post("/", async (req, res) => {
  try {
    const doc = await SiteMeta.findOneAndUpdate(
      {},
      { footer: req.body },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );
    res.json(doc.footer);
  } catch (e) {
    res
      .status(400)
      .json({ error: "Failed to save footer", details: e.message });
  }
});

export default router;
