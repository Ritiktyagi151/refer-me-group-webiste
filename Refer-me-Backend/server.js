import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import fs from "fs";

/* ==============================
   🔐 ENV LOAD (ONLY ONCE)
================================ */
if (!process.env._ENV_LOADED) {
  dotenv.config();
  process.env._ENV_LOADED = "true";
}

const app = express();

/* ==============================
   CREATE UPLOADS FOLDER
================================ */
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

/* ==============================
   MIDDLEWARES
================================ */
app.use(
  cors({
    origin: [
      "https://refermegroup.com",
      "https://www.refermegroup.com",
      "http://localhost:5173",
    ],
    credentials: true,
  }),
);

app.use("/uploads", express.static(uploadsDir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST logger
app.use((req, res, next) => {
  if (req.method === "POST") {
    console.log(`📩 Incoming POST: ${req.originalUrl}`);
  }
  next();
});

/* ==============================
   ROUTES
================================ */
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

// 🔥 PAYU + SMTP
app.use("/api/payment", paymentRoutes);

app.use("/api/webinars", webinarRoutes);
app.use("/api/manthan", manthanRoutes);
app.use("/api/team", teamRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Refer Me Group API running...");
});

/* ==============================
   DB + SERVER
================================ */
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
  } catch (err) {
    console.error("❌ Database Connection Error:", err.message);
    process.exit(1);
  }
};

startServer();
