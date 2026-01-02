import TeamMember from "../models/teamModel.js";
import fs from "fs";
import path from "path";

const fixImagePath = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith("/uploads/")) return imagePath;
  const filenameMatch = imagePath.match(/uploads[\/\\](.+)$/);
  if (filenameMatch) {
    return `/uploads/${filenameMatch[1]}`;
  }
  return imagePath;
};

const deleteFile = (filePath) => {
  if (!filePath) return;
  let fullPath;
  if (filePath.startsWith("/uploads/")) {
    fullPath = path.join(process.cwd(), filePath.replace(/^\//, ""));
  } else {
    fullPath = filePath;
  }

  if (fs.existsSync(fullPath)) {
    fs.unlink(fullPath, (err) => {
      if (err) console.error("Failed to delete image:", err);
    });
  }
};

export const getAllMembers = async (req, res) => {
  try {
    let members = await TeamMember.find({});
    members = members.map((member) => ({
      ...member._doc,
      image: fixImagePath(member.image),
    }));
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const createMember = async (req, res) => {
  const { name, role, bio, linkedin, twitter, github } = req.body;
  if (!req.file) return res.status(400).json({ message: "Image is required." });

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
    savedMember.image = fixImagePath(savedMember.image);
    res.status(201).json(savedMember);
  } catch (err) {
    if (req.file) deleteFile(imagePath);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateMember = async (req, res) => {
  const { id } = req.params;
  const { name, role, bio, linkedin, twitter, github } = req.body;

  try {
    const member = await TeamMember.findById(id);
    if (!member) {
      if (req.file) deleteFile(`/uploads/${req.file.filename}`);
      return res.status(404).json({ message: "Member not found." });
    }

    const updateData = { name, role, bio, linkedin, twitter, github };

    if (req.file) {
      if (member.image) deleteFile(member.image);
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedMember = await TeamMember.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    updatedMember.image = fixImagePath(updatedMember.image);
    res.status(200).json(updatedMember);
  } catch (err) {
    if (req.file) deleteFile(`/uploads/${req.file.filename}`);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteMember = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await TeamMember.findById(id);
    if (!member) return res.status(404).json({ message: "Member not found." });
    if (member.image) deleteFile(member.image);
    await TeamMember.findByIdAndDelete(id);
    res.status(200).json({ message: "Member deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
