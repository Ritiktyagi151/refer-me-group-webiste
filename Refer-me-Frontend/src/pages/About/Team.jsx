// Frontend: components/OurTeam.jsx (Updated: Extra safety for image src)
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import axios from "axios";

const SERVER_URL = "https://refermegroup.com"; // Base URL

// Helper to fix image path in frontend too (backup)
const fixImageUrl = (imagePath) => {
  if (!imagePath) return '/assets/teams/default-avatar.jpg';
  if (imagePath.startsWith('/uploads/')) {
    return `${SERVER_URL}${imagePath}`;
  }
  // If absolute path somehow, extract filename
  const filenameMatch = imagePath.match(/uploads[\/\\](.+)$/);
  if (filenameMatch) {
    return `${SERVER_URL}/uploads/${filenameMatch[1]}`;
  }
  return imagePath; // Or fallback
};

const TeamMemberCard = ({ member }) => {
  const imageSrc = fixImageUrl(member.image);

  return (
    <motion.div
      key={member._id}
      className="relative w-full h-96 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={imageSrc}
          alt={member.name}
          className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = '/assets/teams/default-avatar.jpg'; // Fallback
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
        <div className="absolute inset-0 border-2 border-indigo-200 rounded-xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-0 h-0 border-t-4 border-l-8 border-indigo-400 rounded-tl-xl transition-all duration-300 group-hover:w-1/2 group-hover:h-1/2 opacity-0 group-hover:opacity-100"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-8 border-r-8 border-blue-400 rounded-br-xl transition-all duration-300 group-hover:w-1/2 group-hover:h-1/2 opacity-0 group-hover:opacity-100 delay-100"></div>
        <div className="absolute inset-0 border-8 border-indigo-500 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-12 pb-6 px-6 text-white text-center transition-transform duration-500 group-hover:-translate-y-0 translate-y-full">
        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
        <p className="text-indigo-300 font-semibold text-lg mb-3">{member.role}</p>
        <p className="text-sm italic opacity-90 mb-4 line-clamp-2">{member.bio || "Team Member"}</p>
        <div className="flex justify-center space-x-4">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors transform hover:scale-110">
              <FaLinkedin size={24} />
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors transform hover:scale-110">
              <FaTwitter size={24} />
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors transform hover:scale-110">
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/api/team`);
        // Extra fix in frontend if backend missed any
        const fixedMembers = res.data.map(member => ({
          ...member,
          image: fixImageUrl(member.image),
        }));
        setTeamMembers(fixedMembers);
      } catch (err) {
        console.error("Failed to fetch team:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading) {
    return <section className="py-24">Loading team...</section>;
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 overflow-hidden">
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
            Behind every success story is a dedicated team. Get to know the passionate individuals driving Refer Me Group forward.
          </motion.p>
        </div>

        {teamMembers.length === 0 ? (
          <p className="text-center text-gray-500">No team members available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member._id} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurTeam;