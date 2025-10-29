// models/teamModel.js
import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Relative path like "/uploads/filename.jpg"
      required: true,
    },
    bio: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    twitter: {
      type: String,
    },
    github: {
      type: String,
    },
  },
  {
    timestamps: true, // CreatedAt aur UpdatedAt automatically add ho jayega
  }
);

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);
export default TeamMember;