import TeamMember from "../models/teamModel.js";
import fs from "fs";
import path from "path";

const UPLOAD_DIR = "/var/www/refermegroup/uploads";

// ---------- helpers ----------
const deleteFile = (imagePath) => {
  if (!imagePath) return;

  const filename = imagePath.replace("/uploads/", "");
  const fullPath = path.join(UPLOAD_DIR, filename);

  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }
};

// ---------- controllers ----------
export const getAllMembers = async (req, res) => {
  try {
    const members = await TeamMember.find({});
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const createMember = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newMember = new TeamMember({
      name: req.body.name,
      role: req.body.role,
      bio: req.body.bio,
      linkedin: req.body.linkedin,
      twitter: req.body.twitter,
      github: req.body.github,
      image: `/uploads/${req.file.filename}`,
    });

    const saved = await newMember.save();
    res.status(201).json(saved);
  } catch (err) {
    if (req.file) deleteFile(`/uploads/${req.file.filename}`);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateMember = async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) {
      if (req.file) deleteFile(`/uploads/${req.file.filename}`);
      return res.status(404).json({ message: "Member not found" });
    }

    if (req.file) {
      deleteFile(member.image);
      member.image = `/uploads/${req.file.filename}`;
    }

    member.name = req.body.name ?? member.name;
    member.role = req.body.role ?? member.role;
    member.bio = req.body.bio ?? member.bio;
    member.linkedin = req.body.linkedin ?? member.linkedin;
    member.twitter = req.body.twitter ?? member.twitter;
    member.github = req.body.github ?? member.github;

    await member.save();
    res.status(200).json(member);
  } catch (err) {
    if (req.file) deleteFile(`/uploads/${req.file.filename}`);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteMember = async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });

    deleteFile(member.image);
    await member.deleteOne();

    res.status(200).json({ message: "Member deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
