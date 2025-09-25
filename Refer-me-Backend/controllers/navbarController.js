import SiteMeta from "../models/SiteMeta.js";

export const getNavbar = async (req, res) => {
  try {
    const doc = await SiteMeta.findOne({}, { navbar: 1 }).sort({
      createdAt: -1,
    });
    res.json(doc?.navbar || {});
  } catch (e) {
    res
      .status(500)
      .json({ error: "Failed to fetch navbar", details: e.message });
  }
};

export const saveNavbar = async (req, res) => {
  try {
    const doc = await SiteMeta.findOneAndUpdate(
      {},
      { navbar: req.body },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json(doc.navbar);
  } catch (e) {
    res
      .status(400)
      .json({ error: "Failed to save navbar", details: e.message });
  }
};
