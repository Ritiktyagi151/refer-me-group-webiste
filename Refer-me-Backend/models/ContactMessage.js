import mongoose from "mongoose";

const { Schema, model } = mongoose;

const contactMessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String },
    address: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const ContactMessage = model("ContactMessage", contactMessageSchema);

export default ContactMessage;
