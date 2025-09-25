import express from "express";
import ContactMessage from "../models/ContactMessage.js";
import nodemailer from "nodemailer";

const router = express.Router();

// ======================
// Email Transporter
// ======================
const transporter = nodemailer.createTransport({
  service: "gmail", // or smtp.mailtrap.io / outlook
  auth: {
    user: process.env.MAIL_USER, // your email
    pass: process.env.MAIL_PASS, // app password
  },
});

// ======================
// POST - Save & Send Mail
// ======================
router.post("/", async (req, res) => {
  try {
    const { name, email, contact, address, message } = req.body;

    // Save message to DB
    const doc = await ContactMessage.create({
      name,
      email,
      contact,
      address,
      message,
    });

    // Send email notification
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.MAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // your email
      subject: `📩 New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Contact: ${contact || "N/A"}
Address: ${address || "N/A"}

Message:
${message}
      `,
    });

    res.status(201).json({
      ok: true,
      id: doc._id,
      message: "Message saved and email sent successfully!",
    });
  } catch (err) {
    res.status(400).json({
      error: "Failed to submit contact message",
      details: err.message,
    });
  }
});

// ======================
// GET - Fetch All Messages
// ======================
router.get("/", async (req, res) => {
  try {
    const docs = await ContactMessage.find().sort({ createdAt: -1 }).limit(200);
    res.json(docs);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch messages",
      details: err.message,
    });
  }
});

// ======================
// GET - Single Message
// ======================
router.get("/:id", async (req, res) => {
  try {
    const doc = await ContactMessage.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "Message not found" });
    res.json(doc);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch message", details: err.message });
  }
});

// ======================
// DELETE - Remove Message
// ======================
router.delete("/:id", async (req, res) => {
  try {
    const doc = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Message not found" });
    res.json({ ok: true, message: "Message deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete message", details: err.message });
  }
});

export default router;
