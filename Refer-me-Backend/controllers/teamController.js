// controllers/teamController.js (Updated: Fix paths on retrieval without DB change)
import TeamMember from "../models/teamModel.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// --- __dirname setup ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to fix absolute path to relative (for existing DB entries)
const fixImagePath = (imagePath) => {
  if (!imagePath) return null;
  // If it's already relative (/uploads/...), return as is
  if (imagePath.startsWith('/uploads/')) return imagePath;
  // If absolute (e.g., /root/.../uploads/filename), extract filename and make relative
  const filenameMatch = imagePath.match(/uploads[\/\\](.+)$/);
  if (filenameMatch) {
    return `/uploads/${filenameMatch[1]}`;
  }
  return imagePath; // Fallback
};

// Utility function to delete an image file (updated to handle absolute paths)
const deleteFile = (filePath) => {
  let fullPath = filePath;
  // If relative, make full path
  if (filePath.startsWith('/uploads/')) {
    fullPath = path.join(__dirname, "..", filePath.replace(/^\//, ''));
  } else {
    // If absolute, use as is (for old paths)
    fullPath = filePath;
  }

  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error("Failed to delete old image:", err);
    } else {
      console.log("Old image deleted:", fullPath);
    }
  });
};

// 1. GET ALL Members (READ) - Fix paths here
export const getAllMembers = async (req, res) => {
  try {
    let members = await TeamMember.find({});
    // Transform paths for all members
    members = members.map(member => ({
      ...member._doc,
      image: fixImagePath(member.image),
    }));
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 2. CREATE Member (CREATE) - Already saves relative path
export const createMember = async (req, res) => {
  const { name, role, bio, linkedin, twitter, github } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: "Image is required." });
  }

  const imagePath = `/uploads/${req.file.filename}`;

  try {
    const newMember = new TeamMember({
      name,
      role,
      bio,
      linkedin,
      twitter,
      github,
      image: imagePath,
    });

    const savedMember = await newMember.save();
    // Fix path if needed (though it should be relative)
    savedMember.image = fixImagePath(savedMember.image);
    res.status(201).json(savedMember);
  } catch (err) {
    if (req.file) {
      deleteFile(imagePath);
    }
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 3. UPDATE Member (UPDATE) - Fix returned path
export const updateMember = async (req, res) => {
  const { id } = req.params;
  const { name, role, bio, linkedin, twitter, github } = req.body;

  try {
    const member = await TeamMember.findById(id);
    if (!member) {
      if (req.file) {
        deleteFile(`/uploads/${req.file.filename}`);
      }
      return res.status(404).json({ message: "Member not found." });
    }

    const updateData = {
      name,
      role,
      bio,
      linkedin,
      twitter,
      github,
    };

    if (req.file) {
      if (member.image) {
        deleteFile(member.image); // Handles both old absolute and new relative
      }
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedMember = await TeamMember.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    // Fix path in response
    updatedMember.image = fixImagePath(updatedMember.image);
    res.status(200).json(updatedMember);
  } catch (err) {
    if (req.file) {
      deleteFile(`/uploads/${req.file.filename}`);
    }
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 4. DELETE Member (DELETE)
export const deleteMember = async (req, res) => {
  const { id } = req.params;

  try {
    const member = await TeamMember.findById(id);
    if (!member) {
      return res.status(404).json({ message: "Member not found." });
    }

    if (member.image) {
      deleteFile(member.image); // Handles absolute or relative
    }

    await TeamMember.findByIdAndDelete(id);

    res.status(200).json({ message: "Member deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};