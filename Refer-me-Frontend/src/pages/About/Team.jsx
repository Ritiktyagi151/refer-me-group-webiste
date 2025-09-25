import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi"; // Included for consistency

// --- Sample Team Member Data (IMPORTANT: Replace with your actual data) ---
const teamMembers = [
  {
    id: 1,
    name: "Neelaam Baranwal",
    role: "Strategic Partner",
    image: "/assets/teams/team (1).jpeg",
    linkedin: null,
    twitter: null,
    github: null,
    bio: "Visionary Strategist",
    video: null,
  },
  {
    id: 2,
    name: "Saroj Baranwal",
    role: "Strategic Partner",
    image: "/assets/teams/team (2).jpeg",
    linkedin: null,
    twitter: null,
    github: null,
    bio: "People Connector",
    video: null,
  },
  {
    id: 6,
    name: "Gunjan Baranwal",
    role: "CEO & MD",
    image: "/assets/teams/team (6).jpeg",
    linkedin: "https://www.linkedin.com/in/gunjan-baranwal-650717b8/",
    github: null,
    bio: "Career Coach",
    video: null,
  },
  {
    id: 4,
    name: "Snehal Mawle",
    role: "Training Head",
    image: "/assets/teams/team (4).jpeg",
    linkedin: "https://www.linkedin.com/in/snehal-mawle-88a246257/",
    twitter: null,
    github: null,
    bio: "Community Leader",
    video: null,
  },
  {
    id: 5,
    name: "Aastha Malhotra",
    role: "HR & Admin",
    image: "/assets/teams/team (5).jpeg",
    linkedin: "https://www.linkedin.com/in/aastha-malhotra-07982b169/",
    twitter: null,
    github: null,
    bio: "HR Specialist",
    video: null,
  },
];

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div
      key={member.id}
      className="relative w-full h-96 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: member.id * 0.08 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {/* Optional: Add an overlay on the image when info panel is down */}
        <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30"></div>

        {/* --- Always-On Subtle Border --- */}
        <div className="absolute inset-0 border-2 border-indigo-200 rounded-xl pointer-events-none"></div>

        {/* --- Animated Hover Borders (appear and scale/fade) --- */}
        {/* Border 1: Top-Left Corner */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-4 border-l-8 border-indigo-400 rounded-tl-xl transition-all duration-300 group-hover:w-1/2 group-hover:h-1/2 opacity-0 group-hover:opacity-100"></div>
        {/* Border 2: Bottom-Right Corner */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-8 border-r-8 border-blue-400 rounded-br-xl transition-all duration-300 group-hover:w-1/2 group-hover:h-1/2 opacity-0 group-hover:opacity-100 delay-100"></div>
        {/* Border 3: Fading full border */}
        <div className="absolute inset-0 border-8 border-indigo-500 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
      </div>

      {/* Info Panel that slides up */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-12 pb-6 px-6 text-white text-center transition-transform duration-500 group-hover:-translate-y-0 translate-y-full">
        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
        <p className="text-indigo-300 font-semibold text-lg mb-3">
          {member.role}
        </p>
        <p className="text-sm italic opacity-90 mb-4 line-clamp-2">
          {member.bio}
        </p>
        <div className="flex justify-center space-x-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors transform hover:scale-110"
            >
              <FaTwitter size={24} />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const OurTeam = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 overflow-hidden">
      {/* --- Animated Background Elements (Keep them!) --- */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-0 pointer-events-none"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/2 w-60 h-60 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-6000 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl lg:text-6xl"
          >
            Meet Our <span className="text-indigo-600">Dynamic Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Behind every success story is a dedicated team. Get to know the
            passionate individuals driving Refer Me Group forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
