import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import settingRoutes from "./routes/settingRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import navbarRoutes from "./routes/navbarRoutes.js";
import footerRoutes from "./routes/footerRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import paymentRoutes from "./routes/payment.js";
import webinarRoutes from "./routes/webinar.js";
import manthanRoutes from "./routes/manthanRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Initializing server...");

// Global Middleware
app.use(cors());
console.log("CORS enabled");

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
console.log("Static upload folder served at /uploads");

app.use("/api", uploadRoutes);
console.log("Upload routes mounted at /api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("Body parsers enabled");

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/settings", settingRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/navbar", navbarRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/contact-messages", contactRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/webinars", webinarRoutes);
app.use("/api/manthan", manthanRoutes);

console.log("All API routes mounted");  

// Root Route
app.get("/", (req, res) => {
  console.log("Root route hit");
  res.send("API is running...");
});

// Connect to MongoDB
console.log("Connecting to MongoDB...");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("DB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
