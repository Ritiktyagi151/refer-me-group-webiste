// BADLAAV: Sabhi 'require' ko 'import' mein badla gaya
import TeamMember from "../models/teamModel.js"; // .js extension zaroori hai
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // __dirname ke liye zaroori

// --- __dirname setup (ESM mein zaroori) ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility function to delete an image file
const deleteFile = (filePath) => {
  // Path ko 'controllers' se bahar nikaal kar root folder mein point karein
  const fullPath = path.join(__dirname, "..", filePath);

  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error("Failed to delete old image:", err);
    } else {
      console.log("Old image deleted:", fullPath);
    }
  });
};

// 1. GET ALL Members (READ)
// BADLAAV: 'exports.getAllMembers' ki jagah 'export const getAllMembers'
export const getAllMembers = async (req, res) => {
  try {
    const members = await TeamMember.find({});
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 2. CREATE Member (CREATE)
export const createMember = async (req, res) => {
  const { name, role, bio, linkedin, twitter, github } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: "Image is required." });
  }

  // Windows path (\) ko forward slash (/) se replace karein
  const imagePath = req.file.path.replace(/\\/g, "/");

  try {
    const newMember = new TeamMember({
      name,
      role,
      bio,
      linkedin,
      twitter,
      github,
      image: imagePath, // Database mein file ka path save karein
    });

    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (err) {
    // Agar DB save fail ho, toh upload hui file delete karein
    if (req.file) {
      deleteFile(imagePath);
    }
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 3. UPDATE Member (UPDATE)
export const updateMember = async (req, res) => {
  const { id } = req.params;
  const { name, role, bio, linkedin, twitter, github } = req.body;

  try {
    const member = await TeamMember.findById(id);
    if (!member) {
      // Agar naya file upload hua tha, use delete karo
      if (req.file) {
        deleteFile(req.file.path.replace(/\\/g, "/"));
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
      // Nayi file hai, purani file delete karo
      if (member.image) {
        deleteFile(member.image);
      }
      // Nayi file ka path update karo
      updateData.image = req.file.path.replace(/\\/g, "/");
    }

    const updatedMember = await TeamMember.findByIdAndUpdate(id, updateData, {
      new: true, // Yeh updated document return karta hai
    });

    res.status(200).json(updatedMember);
  } catch (err) {
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

    // DB se delete karne se pehle file delete karo
    if (member.image) {
      deleteFile(member.image);
    }

    await TeamMember.findByIdAndDelete(id);

    res.status(200).json({ message: "Member deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

