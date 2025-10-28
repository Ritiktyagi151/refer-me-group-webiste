import express from "express";
import { getFooter, saveFooter } from "../controllers/footerController.js";

const router = express.Router();

// Save footer data
router.post("/", saveFooter);

// Get footer data
router.get("/", getFooter);

export default router;
