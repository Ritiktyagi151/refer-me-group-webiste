import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// 🎯 Routes
router.post("/register", registerUser); // http://72.60.101.229:5000/api/users/register
router.post("/login", loginUser); // http://72.60.101.229:5000/api/users/login

export default router;
