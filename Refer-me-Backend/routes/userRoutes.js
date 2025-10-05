import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// 🎯 Routes
router.post("/register", registerUser); // https://refermegroup.com/api/users/register
router.post("/login", loginUser); // https://refermegroup.com/api/users/login

export default router;
