import Manthan from "../models/Manthan.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Helper to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, ".."); // Project root (one level up from /controllers)

// Get all upcoming events
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

// Get all past events
export const getPastEvents = async (req, res) => {
  try {
    const events = await Manthan.find({ category: "past" }).sort({ date: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new event (Updated with logs)
export const addEvent = async (req, res) => {
  try {
    console.log('Add Event: Body keys:', Object.keys(req.body));  // ✅ Debug log
    console.log('Add Event: File received?', !!req.file);  // ✅ Debug log
    const { title, date, time, location, description, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";
    console.log('Image path saved:', image);  // ✅ Debug log

    const event = new Manthan({
      title,
      date,
      time,
      location,
      description,
      category,
      image,
    });
    await event.save();

    res.status(201).json(event);
  } catch (error) {
    console.error('Add Event Error:', error);
    res.status(500).json({ message: error.message });
  }
};

// Update event (Updated with logs)
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    console.log('Update Event: File received?', !!req.file);  // ✅ Debug log

    const event = await Manthan.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // If a new file (image) is uploaded
    if (req.file) {
      // Delete the old image (if it exists)
      if (event.image) {
        const oldImagePath = path.join(ROOT_DIR, event.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      // Set the new image path
      updatedData.image = `/uploads/${req.file.filename}`;
      console.log('New image path updated:', updatedData.image);  // ✅ Debug log
    }

    const updatedEvent = await Manthan.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error('Update Event Error:', error);
    res.status(500).json({ message: error.message });
  }
};

// Delete event
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