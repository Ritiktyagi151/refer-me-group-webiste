<<<<<<< HEAD
import multer from "multer";
import path from "path";
import fs from "fs"; // To create uploads dir if needed

// Create uploads directory if it doesn't exist
const uploadsDir = "uploads";
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
=======
import multer from 'multer';
import path from 'path';
import fs from 'fs';
>>>>>>> ec31cb2aaca2f4105e2fa50248b5834e16083e96

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
<<<<<<< HEAD
    cb(null, uploadsDir);
=======
    console.log("Uploading file:", file.originalname);
    const uploadPath = path.join(process.cwd(), 'uploads');
    // Ensure uploads folder exists
    try {
      fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    } catch (err) {
      console.error("Error creating upload directory:", err);
      cb(err, uploadPath);
    }
>>>>>>> ec31cb2aaca2f4105e2fa50248b5834e16083e96
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    console.log("Saving as filename:", filename);
    cb(null, filename);
  }
});

<<<<<<< HEAD
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
=======
// File type filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    console.warn("Unsupported file type:", file.mimetype);
    cb(new Error('Unsupported file type'), false);
  }
};

// Multer upload instance
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter
>>>>>>> ec31cb2aaca2f4105e2fa50248b5834e16083e96
});

export default upload;
