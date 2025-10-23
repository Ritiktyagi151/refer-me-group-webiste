import upload from "../middlewares/uploadMiddleware.js";

// Single image upload handler
export const uploadImage = [
  upload.single("image"), // 'image' field from frontend FormData
  (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image file uploaded" });
      }

      // URL generate (localhost or production domain)
      const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
      res.status(200).json({ url: imageUrl });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Failed to upload image" });
    }
  },
];