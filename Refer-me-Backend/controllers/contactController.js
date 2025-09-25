import ContactMessage from "../models/ContactMessage.js";

export const createMessage = async (req, res) => {
  try {
    const { name, email, contact, address, message } = req.body;
    const doc = await ContactMessage.create({
      name,
      email,
      contact,
      address,
      message,
    });
    res.status(201).json({ ok: true, id: doc._id });
  } catch (e) {
    res
      .status(400)
      .json({ error: "Failed to submit contact message", details: e.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const docs = await ContactMessage.find().sort({ createdAt: -1 }).limit(200);
    res.json(docs);
  } catch (e) {
    res
      .status(500)
      .json({ error: "Failed to fetch messages", details: e.message });
  }
};
