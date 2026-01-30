import React, { useState } from "react";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const socialLinks = [
    {
      id: 1,
      icon: <FaYoutube />,
      color: "bg-[#FF0000]",
      label: "YouTube",
      link: "https://www.youtube.com/@ReferMeGroup",
      delay: "0ms",
    },
    {
      id: 2,
      icon: <FaFacebookF />,
      color: "bg-[#1877F2]",
      label: "Facebook",
      link: "https://www.facebook.com/refermegroup",
      delay: "100ms",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      label: "Instagram",
      link: "https://www.instagram.com/refermegroup/",
      delay: "200ms",
    },
    {
      id: 4,
      icon: <FaLinkedinIn />,
      color: "bg-[#0077B5]",
      label: "LinkedIn",
      link: "https://www.linkedin.com/company/refermegroup/",
      delay: "300ms",
    },
    {
      id: 5,
      icon: <FaXTwitter />,
      color: "bg-black",
      label: "X (Twitter)",
      link: "https://x.com/referme_group",
      delay: "400ms",
    },
  ];

  return (
    // 1. "left-0" ko "right-0" kiya aur "items-start" ko "items-end"
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] flex flex-col items-end gap-4 p-4">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* --- Toggle Button --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        // 2. rounded corners ko swap kiya (rounded-l-lg) aur margin adjust kiya
        className="bg-slate-800 text-white p-2 rounded-l-lg shadow-md hover:bg-slate-700 transition-colors mb-2 mr-[-16px]"
      >
        {/* 3. Icons ko flip kiya */}
        {isOpen ? <FaChevronRight size={18} /> : <FaChevronLeft size={18} />}
      </button>

      {/* --- Social Icons Container --- */}
      <div
        className={`flex flex-col gap-4 transition-all duration-500 transform ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-24 opacity-0 pointer-events-none" // 4. -translate-x ko positive translate-x kiya
        }`}
      >
        {socialLinks.map((item) => (
          <div
            key={item.id}
            className="relative flex items-center justify-end group animate-float"
            style={{ animationDelay: item.delay }}
          >
            {/* Tooltip Label (Icons ke left me dikhega) */}
            <span
              className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-300 
              bg-slate-900 text-white font-medium text-[11px] py-1.5 px-4 rounded-lg shadow-2xl 
              uppercase tracking-widest whitespace-nowrap border-r-4 border-cyan-400"
            >
              {item.label}
            </span>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg 
              hover:scale-110 hover:-rotate-6 hover:-translate-x-3 transition-all duration-500 
              border-2 border-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
              relative overflow-hidden`}
            >
              <div className="absolute top-0 -left-full w-full h-full bg-white/20 -skew-x-12 group-hover:left-full transition-all duration-700"></div>
              <span className="text-xl z-10">{item.icon}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
