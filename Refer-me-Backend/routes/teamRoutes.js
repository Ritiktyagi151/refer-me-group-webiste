// BADLAAV: Sabhi 'require' ko 'import' mein badla gaya
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// BADLAAV: Controller ko import karna aur .js extension add karna
import {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
} from "../controllers/teamController.js"; // .js zaroori hai

const router = express.Router();

// --- __dirname setup (ESM mein zaroori) ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Multer (File Upload) Setup ---

// Path ko reliable banayein (project root mein 'uploads' folder)
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, or .png files are allowed!"), false);
  }
};

// Multer upload instance
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}).single("image");

// --- API Routes ---
router.get("/", getAllMembers);
router.post("/", upload, createMember);
router.put("/:id", upload, updateMember);
router.delete("/:id", deleteMember);

// BADLAAV: 'module.exports' ki jagah 'export default'
export default router;
