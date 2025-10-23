import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
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
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    console.log("Saving as filename:", filename);
    cb(null, filename);
  }
});

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
});

export default upload;
