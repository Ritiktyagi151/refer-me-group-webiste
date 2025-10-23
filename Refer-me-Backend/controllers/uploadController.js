import upload from "../middlewares/upload.js";

// controllers/upload.controller.js
export const uploadSingle = (req, res) => {
  try {
    console.log("Request headers:", req.headers);
    console.log("Request body keys:", Object.keys(req.body));

    if (!req.file) {
      console.warn("No file uploaded!");
      return res.status(400).json({ message: 'No file uploaded!' });
    }

    console.log("File received:", req.file);

    res.status(200).json({
      message: 'File uploaded successfully!',
      file: req.file
    });
  } catch (error) {
    console.error("Error in uploadSingle controller:", error);
    res.status(500).json({ message: error.message });
  }
};

export const uploadMultiple = (req, res) => {
  try {
    console.log("Request headers:", req.headers);
    console.log("Request body keys:", Object.keys(req.body));

    if (!req.files || req.files.length === 0) {
      console.warn("No files uploaded!");
      return res.status(400).json({ message: 'No files uploaded!' });
    }

    console.log("Files received:", req.files);

    res.status(200).json({
      message: 'Files uploaded successfully!',
      files: req.files
    });
  } catch (error) {
    console.error("Error in uploadMultiple controller:", error);
    res.status(500).json({ message: error.message });
  }
};
