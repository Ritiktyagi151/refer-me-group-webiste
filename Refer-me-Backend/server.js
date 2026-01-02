import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import fs from "fs";

// Routes imports
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import settingRoutes from "./routes/settingRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import navbarRoutes from "./routes/navbarRoutes.js";
import footerRoutes from "./routes/footerRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import paymentRoutes from "./routes/payment.js";
import webinarRoutes from "./routes/webinar.js";
import manthanRoutes from "./routes/manthanRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";

dotenv.config();
const app = express();

// --- SETUP: Auto-create uploads folder ---
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// --- FIX: Production CORS Policy ---
app.use(
  cors({
    origin: ["https://refermegroup.com", "http://localhost:5173"],
    credentials: true,
  })
);

// --- FIX: STATIC FOLDER SERVING ---
// Ye line browser ko uploads folder ka access deti hai
app.use("/uploads", express.static(uploadsDir));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/settings", settingRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/navbar", navbarRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/contact-messages", contactRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/webinars", webinarRoutes);
app.use("/api/manthan", manthanRoutes);
app.use("/api/team", teamRoutes);

app.get("/", (req, res) => res.send("API is running..."));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
