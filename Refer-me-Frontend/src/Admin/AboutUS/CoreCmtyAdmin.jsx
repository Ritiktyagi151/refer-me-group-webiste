import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaSave,
  FaLock,
  FaUnlock,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

const AdminTeamPanel = () => {
  // State for team members
  const [teamMembers, setTeamMembers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    role: "",
    image: "",
    linkedin: "",
    twitter: "",
    github: "",
    bio: "",
    video: "",
  });
  const [activeTab, setActiveTab] = useState("team");
  const [searchTerm, setSearchTerm] = useState("");

  // Load initial data
  useEffect(() => {
    const initialData = [
      {
        id: 1,
        name: "Neelaam Baranwal",
        role: "Strategic Partner",
        image: "/assets/teams/team (1).jpeg",
        linkedin: "",
        twitter: "",
        github: "",
        bio: "Visionary Strategist",
        video: "",
      },
      {
        id: 2,
        name: "Saroj Baranwal",
        role: "Strategic Partner",
        image: "/assets/teams/team (2).jpeg",
        linkedin: "",
        twitter: "",
        github: "",
        bio: "People Connector",
        video: "",
      },
      {
        id: 6,
        name: "Gunjan Baranwal",
        role: "CEO & MD",
        image: "/assets/teams/team (6).jpeg",
        linkedin: "https://www.linkedin.com/in/gunjan-baranwal-650717b8/",
        github: "",
        bio: "Career Coach",
        video: "",
      },
      {
        id: 4,
        name: "Snehal Mawle",
        role: "Training Head",
        image: "/assets/teams/team (4).jpeg",
        linkedin: "https://www.linkedin.com/in/snehal-mawle-88a246257/",
        twitter: "",
        github: "",
        bio: "Community Leader",
        video: "",
      },
      {
        id: 5,
        name: "Aastha Malhotra",
        role: "HR & Admin",
        image: "/assets/teams/team (5).jpeg",
        linkedin: "https://www.linkedin.com/in/aastha-malhotra-07982b169/",
        twitter: "",
        github: "",
        bio: "HR Specialist",
        video: "",
      },
    ];
    setTeamMembers(initialData);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add new team member
  const addTeamMember = () => {
    const newId =
      teamMembers.length > 0
        ? Math.max(...teamMembers.map((m) => m.id)) + 1
        : 1;
    setFormData({
      id: newId,
      name: "",
      role: "",
      image: "",
      linkedin: "",
      twitter: "",
      github: "",
      bio: "",
      video: "",
    });
    setIsEditing(true);
  };

  // Edit team member
  const editTeamMember = (member) => {
    setFormData(member);
    setIsEditing(true);
  };

  // Delete team member
  const deleteTeamMember = (id) => {
    if (!isLocked) {
      setTeamMembers(teamMembers.filter((member) => member.id !== id));
    }
  };

  // Save team member
  const saveTeamMember = () => {
    if (formData.id === 0) {
      // New member
      const newId =
        teamMembers.length > 0
          ? Math.max(...teamMembers.map((m) => m.id)) + 1
          : 1;
      setTeamMembers([...teamMembers, { ...formData, id: newId }]);
    } else {
      // Update existing member
      setTeamMembers(
        teamMembers.map((member) =>
          member.id === formData.id ? formData : member
        )
      );
    }
    setIsEditing(false);
  };

  // Cancel editing
  const cancelEditing = () => {
    setIsEditing(false);
  };

  // Toggle lock
  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  // Save to JSON
  const saveToJson = () => {
    const dataStr = JSON.stringify(teamMembers, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = "team-members.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  // Filter team members based on search term
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Refer Me Group Admin Panel
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLock}
              className={`px-4 py-2 rounded-md flex items-center ${
                isLocked
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {isLocked ? (
                <FaLock className="mr-2" />
              ) : (
                <FaUnlock className="mr-2" />
              )}
              {isLocked ? "Unlock Editing" : "Lock Editing"}
            </button>
            <button
              onClick={saveToJson}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center"
            >
              <FaSave className="mr-2" />
              Save to JSON
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("team")}
              className={`${
                activeTab === "team"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Team Members
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`${
                activeTab === "settings"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Section Settings
            </button>
          </nav>
        </div>

        {activeTab === "team" ? (
          <>
            {/* Search and Add */}
            <div className="mb-6 flex justify-between items-center">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search team members..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <button
                onClick={addTeamMember}
                disabled={isLocked}
                className={`px-4 py-2 rounded-md flex items-center ${
                  isLocked
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                <FaPlus className="mr-2" />
                Add Team Member
              </button>
            </div>

            {/* Edit Form */}
            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white shadow rounded-lg p-6 mb-6"
              >
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  {formData.id === 0
                    ? "Add New Team Member"
                    : "Edit Team Member"}
                </h2>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      id="bio"
                      rows={3}
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-700"
                    >
                      LinkedIn URL
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="twitter"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Twitter URL
                    </label>
                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="github"
                      className="block text-sm font-medium text-gray-700"
                    >
                      GitHub URL
                    </label>
                    <input
                      type="text"
                      name="github"
                      id="github"
                      value={formData.github}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={cancelEditing}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={saveTeamMember}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            )}

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-purple-600">{member.role}</p>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {member.bio}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-2">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600"
                          >
                            <FaLinkedin size={16} />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400"
                          >
                            <FaTwitter size={16} />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-700"
                          >
                            <FaGithub size={16} />
                          </a>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => editTeamMember(member)}
                          disabled={isLocked}
                          className={`p-1 rounded ${
                            isLocked
                              ? "text-gray-300 cursor-not-allowed"
                              : "text-indigo-600 hover:bg-indigo-50"
                          }`}
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteTeamMember(member.id)}
                          disabled={isLocked}
                          className={`p-1 rounded ${
                            isLocked
                              ? "text-gray-300 cursor-not-allowed"
                              : "text-red-600 hover:bg-red-50"
                          }`}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Section Settings
            </h2>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="sectionTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Section Title
                </label>
                <input
                  type="text"
                  id="sectionTitle"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Meet Our Dynamic Team"
                />
              </div>

              <div>
                <label
                  htmlFor="sectionDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Section Description
                </label>
                <textarea
                  id="sectionDescription"
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Behind every success story is a dedicated team..."
                />
              </div>

              <div>
                <label
                  htmlFor="colorScheme"
                  className="block text-sm font-medium text-gray-700"
                >
                  Color Scheme
                </label>
                <select
                  id="colorScheme"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>White/Purple/Gray</option>
                  <option>Light Blue/White</option>
                  <option>Dark Mode</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Layout Options
                </label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="gridLayout"
                      name="layout"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      defaultChecked
                    />
                    <label
                      htmlFor="gridLayout"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Grid Layout
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="carouselLayout"
                      name="layout"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="carouselLayout"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Carousel Layout
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Section Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminTeamPanel;
