import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// 🎯 Routes
router.post("/register", registerUser); // http://localhost:5000/api/users/register
router.post("/login", loginUser);       // http://localhost:5000/api/users/login

export default router;
