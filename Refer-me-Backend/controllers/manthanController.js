import Manthan from "../models/Manthan.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Helper to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, ".."); // Project root (one level up from /controllers)

// --- Get all upcoming events (No change) ---
export const getUpcomingEvents = async (req, res) => {
  try {
    const events = await Manthan.find({ category: "upcoming" }).sort({
      date: 1,
    });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Get all past events (No change) ---
export const getPastEvents = async (req, res) => {
  try {
    const events = await Manthan.find({ category: "past" }).sort({ date: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Add a new event (Updated) ---
export const addEvent = async (req, res) => {
  try {
    // Destructure all fields from the form
    const { title, date, time, location, description, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const event = new Manthan({
      title,
      date,
      time, // Added
      location, // Added
      description,
      category,
      image,
    });
    await event.save();

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Update event (Updated) ---
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body; // Contains title, date, time, location etc.

    const event = await Manthan.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // If a new file (image) is uploaded
    if (req.file) {
      // 1. Delete the old image (if it exists)
      if (event.image) {
        const oldImagePath = path.join(ROOT_DIR, event.image); // e.g., ../uploads/filename.jpg
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      // 2. Set the new image path
      updatedData.image = `/uploads/${req.file.filename}`;
    }

    const updatedEvent = await Manthan.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the updated document
    });

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Delete event (Updated for robustness) ---
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Manthan.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Delete image file if exists
    if (event.image) {
      const imagePath = path.join(ROOT_DIR, event.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await event.deleteOne();
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
