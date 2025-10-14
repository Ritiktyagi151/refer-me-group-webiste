// routes/footerRoutes.js (Temporary - Comment out import)
import express from "express";
// import { getFooter, saveFooter } from "./footerController.js";  // <-- यह line comment कर दो

const router = express.Router();

// Temporary dummy routes (server start करने के लिए)
router.get("/", (req, res) => res.json({ message: "Footer GET temporary" }));
router.post("/", (req, res) => res.json({ message: "Footer POST temporary", body: req.body }));

export default router;