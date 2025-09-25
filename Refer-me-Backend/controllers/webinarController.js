import Webinar from "../models/Webinar.js";

// ➤ Get all webinars
export const getWebinars = async (req, res) => {
  try {
    const webinars = await Webinar.find();
    res.json(webinars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➤ Get single webinar by ID
export const getWebinarById = async (req, res) => {
  try {
    const webinar = await Webinar.findById(req.params.id);
    if (!webinar) return res.status(404).json({ message: "Webinar not found" });
    res.json(webinar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➤ Create webinar
export const addWebinar = async (req, res) => {
  try {
    const webinar = new Webinar(req.body);
    await webinar.save();
    res.status(201).json(webinar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ➤ Update webinar
export const updateWebinar = async (req, res) => {
  try {
    const updated = await Webinar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ➤ Delete webinar
export const deleteWebinar = async (req, res) => {
  try {
    await Webinar.findByIdAndDelete(req.params.id);
    res.json({ message: "Webinar deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
