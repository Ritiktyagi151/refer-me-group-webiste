import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// 🎯 Routes
router.post("/register", registerUser); // http://127.0.0.1:5000/api/users/register
router.post("/login", loginUser); // http://127.0.0.1:5000/api/users/login

export default router;
