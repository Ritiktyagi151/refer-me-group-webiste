import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaUserTie,
  FaUsers,
  FaCloud,
  FaUserFriends,
} from "react-icons/fa";

const Career = () => {
  const [courseGroups, setCourseGroups] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch("http://localhost:5000/api/careers")
      .then((res) => res.json())
      .then((data) => setCourseGroups(data))
      .catch((err) => console.error("Error fetching careers:", err));
  }, []);

  // Map string icon names to actual React Icons
  const iconMap = {
    FaUserTie: <FaUserTie className="text-blue-500 text-3xl" />,
    FaUsers: <FaUsers className="text-green-500 text-3xl" />,
    FaCloud: <FaCloud className="text-red-500 text-3xl" />,
    FaUserFriends: <FaUserFriends className="text-yellow-500 text-3xl" />,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Join Our Job Notification Groups
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Get daily job alerts, career resources, and connect with
            professionals in your field
          </p>
        </div>

        {/* Job Groups */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courseGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{iconMap[group.icon]}</div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {group.name}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">{group.description}</p>

                <h3 className="font-semibold text-lg mb-2">Features:</h3>
                <ul className="mb-6 space-y-2">
                  {group.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col space-y-3">
                  <a
                    href={group.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                  >
                    <FaWhatsapp className="mr-2" /> Join WhatsApp Group
                  </a>
                  {group.whatsappChannel && (
                    <a
                      href={group.whatsappChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600"
                    >
                      <FaWhatsapp className="mr-2" /> Join WhatsApp Channel
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Join Our Groups?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">
                  Exclusive Job Alerts
                </h3>
                <p className="text-gray-600">
                  Get notified about job openings before they're publicly posted
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Career Resources</h3>
                <p className="text-gray-600">
                  Access resume tips, interview questions, and industry insights
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">
                  Professional Network
                </h3>
                <p className="text-gray-600">
                  Connect with peers and experts in your field
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
