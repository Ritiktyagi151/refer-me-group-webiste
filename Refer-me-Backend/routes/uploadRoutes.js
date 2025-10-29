// routes/uploadRoutes.js (Kept as is, but not mounted globally. Use in specific routes if needed.)
import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("✅ Created uploads directory:", uploadsDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

// File filter configuration (Updated)
const fileFilter = (req, file, cb) => {
  // Check for the 'image' fieldname used in Manthan
  if (file.fieldname === "image") {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true); // Allow image
    } else {
      cb(new Error("Only image files allowed for 'image' field"), false);
    }
  }
  // Keep your other filters if needed
  else if (
    file.fieldname === "bannerImage" &&
    !file.mimetype.startsWith("image/")
  ) {
    return cb(new Error("Only image files allowed for banner"), false);
  } else if (
    file.fieldname === "curriculumPdfUrl" &&
    file.mimetype !== "application/pdf"
  ) {
    return cb(new Error("Only PDF files allowed for curriculum"), false);
  }
  // Default to allow other fields if they pass
  else {
    cb(null, true);
  }
};

// Multer upload instance
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
  fileFilter,
});

export default upload;