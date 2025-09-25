import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import {
  FaChartBar, FaCode, FaNetworkWired, FaCheckCircle, FaBriefcase,
  FaFlask, FaBug, FaMobileAlt, FaDatabase
} from 'react-icons/fa';

const domains = [
  {
    title: "BI and Visualization",
    icon: <FaChartBar />,
    color: "bg-red-100 text-red-500",
    link: "https://www.knowledgehut.com/business-intelligence-and-visualization",
  },
  {
    title: "Programming",
    icon: <FaCode />,
    color: "bg-green-100 text-green-500",
    link: "https://www.knowledgehut.com/programming-certification",
  },
  {
    title: "IT Service Management",
    icon: <FaNetworkWired />,
    color: "bg-purple-100 text-purple-500",
    link: "https://www.knowledgehut.com/itsm-certifications",
  },
  {
    title: "Quality",
    icon: <FaCheckCircle />,
    color: "bg-yellow-100 text-yellow-400",
    link: "https://www.knowledgehut.com/quality-management-courses",
  },
  {
    title: "Business Management",
    icon: <FaBriefcase />,
    color: "bg-blue-100 text-blue-500",
    link: "https://www.knowledgehut.com/business-management-courses",
  },
  {
    title: "Cybersecurity",
    icon: <FaBug />,
    color: "bg-red-100 text-red-500",
    link: "https://www.knowledgehut.com/cyber-security-courses",
  },
  {
    title: "Cloud Computing",
    icon: <FaDatabase />,
    color: "bg-yellow-100 text-yellow-400",
    link: "https://www.knowledgehut.com/cloud-computing-courses",
  },
  {
    title: "DevOps",
    icon: <FaFlask />,
    color: "bg-green-100 text-green-500",
    link: "https://www.knowledgehut.com/devops-courses",
  },
  {
    title: "Web Development",
    icon: <FaMobileAlt />,
    color: "bg-purple-100 text-purple-500",
    link: "https://www.knowledgehut.com/web-development-courses",
  },
  {
    title: "Cloud Computing",
    icon: <FaDatabase />,
    color: "bg-yellow-100 text-yellow-400",
    link: "https://www.knowledgehut.com/cloud-computing-courses",
  },
];

// Separate Swiper settings
const swiperSettingsTop = {
  modules: [Autoplay],
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000,
  grabCursor: true,
  breakpoints: {
    0: { slidesPerView: 1.5 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  },
};

const swiperSettingsBottom = {
  ...swiperSettingsTop,
  autoplay: {
    delay: 0,
    reverseDirection: true,
    disableOnInteraction: false,
  },
};

export default function DomainsSection() {
  const firstRow = domains.slice(0, 6);
  const secondRow = domains.slice(4);

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-300 py-10 overflow-hidden text-gray-800">
      <div className="relative z-10 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-sm uppercase font-semibold text-gray-500">
          High-Impact Skills for the Future of Work
        </h2>
        <h3 className="text-3xl font-bold text-gray-800 mt-2">
          Choose From 25+ In-Demand Domains
        </h3>
        <p className="max-w-2xl mx-auto mb-8 text-gray-500">
          Our immersive courses in booming fields like Data Science, AI, and Cloud
          Computing provide you with the practical knowledge and experience you
          need to succeed in the ever-evolving job market. Don&apos;t just learn,
          get future-ready with upGrad KnowledgeHut.
        </p>

        {/* First Swiper */}
        <Swiper {...swiperSettingsTop}>
          {firstRow.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white border border-blue-300 shadow-lg rounded-tl-3xl rounded-br-3xl p-5 h-40 flex flex-col justify-between items-start hover:shadow-blue-400 hover:scale-105 transition-all duration-300">
                <div className="text-3xl text-blue-500">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <a href={item.link} target="_blank" rel="noreferrer" className="text-sm text-blue-500 hover:underline">
                  Explore →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Swiper (reverse autoplay) */}
        <Swiper {...swiperSettingsBottom} className="mt-7 overflow-visible">
          {secondRow.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white border border-blue-300 shadow-lg rounded-tl-3xl rounded-br-3xl p-5 h-40 flex flex-col justify-between items-start hover:shadow-blue-400 hover:scale-105 transition-all duration-300">
                <div className="text-3xl text-blue-500">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <a href={item.link} target="_blank" rel="noreferrer" className="text-sm text-blue-500 hover:underline">
                  Explore →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="mt-8">
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold shadow-md">
            Browse All Courses
          </button>
        </div> */}
      </div>
    </section>
  );
}
