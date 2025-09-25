import mongoose from "mongoose";

const { Schema, model } = mongoose;

const settingSchema = new Schema(
  {
    siteTitle: { type: String, default: "My Website" },
    siteDescription: { type: String, default: "Welcome to my website" },
    headerText: { type: String, default: "Welcome" },
    footerText: {
      type: String,
      default: "© 2025 My Website. All rights reserved.",
    },
    primaryColor: { type: String, default: "#000000" }, // black
    secondaryColor: { type: String, default: "#ffffff" }, // white
    accentColor: { type: String, default: "#ff0000" }, // red
  },
  { timestamps: true }
);

const Setting = model("Setting", settingSchema);

export default Setting;
