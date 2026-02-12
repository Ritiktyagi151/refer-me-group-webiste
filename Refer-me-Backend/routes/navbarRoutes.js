import express from "express";
const router = express.Router();
import { getNavbar, updateNavbar } from "../controllers/navbarController.js";

router.get("/", getNavbar);
router.put("/", updateNavbar);


export default router;
