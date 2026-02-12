import express from "express";
const router = express.Router();
// Named imports use karo kyunki controller mein 'export const' use kiya hai
import { getNavbar, updateNavbar } from "../controllers/navbarController.js";

router.get("/", getNavbar);
router.put("/", updateNavbar);

export default router;
