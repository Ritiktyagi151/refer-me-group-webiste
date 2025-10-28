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
      type: String, // Hum yahaan image ka path store karenge
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

// BADLAAV YAHAN: 'module.exports' ki jagah 'export default'
// YEH LINE POORI KAR RAHA HOON:
const TeamMember = mongoose.model("TeamMember", teamMemberSchema);
export default TeamMember;

