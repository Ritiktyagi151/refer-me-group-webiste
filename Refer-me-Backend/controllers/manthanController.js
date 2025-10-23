import Manthan from "../models/Manthan.js";
import path from "path";
import fs from "fs";

// 🟢 Get all upcoming events
export const getUpcomingEvents = async (req, res) => {
  try {
    const events = await Manthan.find({ category: "upcoming" }).sort({ date: 1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔵 Get all past events
export const getPastEvents = async (req, res) => {
  try {
    const events = await Manthan.find({ category: "past" }).sort({ date: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟠 Add a new event
export const addEvent = async (req, res) => {
  try {
    const { title, date, description, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const event = new Manthan({ title, date, description, category, image });
    await event.save();

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟣 Update event
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`;
    }

    const event = await Manthan.findByIdAndUpdate(id, updatedData, { new: true });
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔴 Delete event
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Manthan.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Delete image file if exists
    if (event.image) {
      const imagePath = path.join("uploads", path.basename(event.image));
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    await event.deleteOne();
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
