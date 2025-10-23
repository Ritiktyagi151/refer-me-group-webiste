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
    console.log("Uploading file:", file.originalname);
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    console.log("Saving as filename:", filename);
    cb(null, filename);
  },
});

// File filter configuration
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "bannerImage" && !file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files allowed for banner"), false);
  }

  if (
    file.fieldname === "curriculumPdfUrl" &&
    file.mimetype !== "application/pdf"
  ) {
    return cb(new Error("Only PDF files allowed for curriculum"), false);
  }

  cb(null, true);
};

// Multer upload instance
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
  fileFilter,
});

export default upload;
