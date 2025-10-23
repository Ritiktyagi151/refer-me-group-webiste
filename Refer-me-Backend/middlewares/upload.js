import multer from "multer";
import path from "path";
import fs from "fs"; // To create uploads dir if needed

// Create uploads directory if it doesn't exist
const uploadsDir = "uploads";
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (
      file.fieldname === "bannerImage" &&
      !file.mimetype.startsWith("image/")
    ) {
      return cb(new Error("Only image files allowed for banner"));
    }
    if (
      file.fieldname === "curriculumPdfUrl" &&
      file.mimetype !== "application/pdf"
    ) {
      return cb(new Error("Only PDF files allowed for curriculum"));
    }
    cb(null, true);
  },
});

export default upload;
