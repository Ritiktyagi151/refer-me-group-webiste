import express from "express";
import SiteMeta from "../models/SiteMeta.js"; // 👈 Make sure .js extension is included in ESM

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const doc = await SiteMeta.findOne({}, { navbar: 1 }).sort({
      createdAt: -1,
    });
    res.json(doc?.navbar || {});
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch navbar", details: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const doc = await SiteMeta.findOneAndUpdate(
      {},
      { navbar: req.body },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );
    res.json(doc.navbar);
  } catch (e) {
    res
      .status(400)
      .json({ error: "Failed to save navbar", details: e.message });
  }
});

export default router;
