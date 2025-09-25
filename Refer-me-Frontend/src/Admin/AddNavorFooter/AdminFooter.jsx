import { useState, useEffect } from "react";
import {
  FiSave,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiLock,
  FiUnlock,
  FiMoon,
  FiSun,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const FooterAdminPanel = () => {
  // Theme state
  const [theme, setTheme] = useState("dark");
  const [isLocked, setIsLocked] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Footer sections data
  const [footerData, setFooterData] = useState({
    logo: {
      src: "/assets/logo/rmg-logo.png",
      alt: "Refer Me Group Logo",
      size: "w-36",
    },
    description:
      "We are dedicated to facilitating career advancement and fostering professional development. With a wealth of resources and initiatives, we strive to empower individuals at every stage of their journey.",
    quickLinks: [
      { text: "Home", path: "/" },
      { text: "Our Story", path: "/about/history" },
      { text: "What we do", path: "/about/whatwedo" },
      { text: "Meet Our Team", path: "/about/team" },
      { text: "Payment Policy", path: "/about/paymentpolicy" },
      { text: "Career", path: "/career" },
      { text: "Contact Us", path: "/contact" },
      { text: "Admin Login", path: "/admin" },
    ],
    courses: [
      { text: "Data Science Course", path: "courses/data-science" },
      { text: "AI for Leaders", path: "courses/ai-for-leaders" },
      {
        text: "Advanced Data Science Course",
        path: "courses/advanced-data-science",
      },
      { text: "Tosca Automation", path: "courses/tosca-automation" },
    ],
    contactInfo: {
      address:
        "Refer Me Group\nB-225, Aditya Park Town,\nGhaziabad (UP) 201002",
      email: "contact@refermegroup.com",
      phone: "+91 76785 73511",
    },
    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/refermegroup.qa" },
      { icon: "twitter", link: "https://www.twitter.com" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/refermegroup/",
      },
      { icon: "instagram", link: "https://www.instagram.com/refermegroup/" },
    ],
    copyright: "© 2023 All Copyrights Reserved by Refer Me Group",
    developer: {
      text: "Designed & Developed By",
      name: "Jaikvik Technology India Pvt Ltd",
      link: "https://www.jaikviktechnology.com",
    },
  });

  // Form states for editing
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [newLink, setNewLink] = useState({ text: "", path: "" });

  // API base URL
  const API_BASE = "http://localhost:5000/api/footer";

  // Fetch footer data from API
  useEffect(() => {
    fetchFooterData();
  }, []);

  const fetchFooterData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE);
      if (!response.ok) {
        throw new Error("Failed to fetch footer data");
      }
      const data = await response.json();

      // Update state with fetched data
      if (data) setFooterData(data);

      setMessage({ type: "success", text: "Footer data loaded successfully" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      console.error("Error fetching footer data:", error);
      setMessage({
        type: "error",
        text: "Failed to load footer data. Using default values.",
      });
      setTimeout(() => setMessage({ type: "", text: "" }), 5000);
    } finally {
      setLoading(false);
    }
  };

  // Save all footer data to API
  const saveAllData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(footerData),
      });

      if (!response.ok) {
        throw new Error("Failed to save footer data");
      }

      setMessage({
        type: "success",
        text: "All footer changes saved successfully!",
      });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      console.error("Error saving footer data:", error);
      setMessage({
        type: "error",
        text: "Failed to save footer changes. Please try again.",
      });
      setTimeout(() => setMessage({ type: "", text: "" }), 5000);
    } finally {
      setLoading(false);
    }
  };

  // Save specific section data
  const saveSectionData = async (section, data) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/${section}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to save ${section} data`);
      }

      setMessage({
        type: "success",
        text: `${section} changes saved successfully!`,
      });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      console.error(`Error saving ${section} data:`, error);
      setMessage({
        type: "error",
        text: `Failed to save ${section} changes. Please try again.`,
      });
      setTimeout(() => setMessage({ type: "", text: "" }), 5000);
    } finally {
      setLoading(false);
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Toggle lock
  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  // Start editing a section
  const startEditing = (section) => {
    if (isLocked) return;
    setEditingSection(section);
    setFormData(footerData[section]);
    // Expand the section when editing
    setExpandedSections((prev) => ({ ...prev, [section]: true }));
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingSection(null);
    setFormData({});
  };

  // Save changes
  const saveChanges = async () => {
    // Update local state
    setFooterData((prev) => ({
      ...prev,
      [editingSection]: formData,
    }));

    // Save to API
    await saveSectionData(editingSection, formData);

    setEditingSection(null);
    setFormData({});
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle array item changes
  const handleArrayItemChange = (index, field, value) => {
    setFormData((prev) => {
      const newArray = [...prev];
      newArray[index] = {
        ...newArray[index],
        [field]: value,
      };
      return newArray;
    });
  };

  // Add new link
  const addNewLink = () => {
    if (!newLink.text || !newLink.path) return;
    setFormData((prev) => [...prev, { ...newLink }]);
    setNewLink({ text: "", path: "" });
  };

  // Remove link
  const removeLink = (index) => {
    setFormData((prev) => prev.filter((_, i) => i !== index));
  };

  // Render editable field
  const renderEditableField = (label, name, value, multiline = false) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
          rows="3"
          placeholder={`Enter ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
          placeholder={`Enter ${label.toLowerCase()}...`}
        />
      )}
    </div>
  );

  // Render editable array
  const renderEditableArray = (items, textLabel, pathLabel) => (
    <div className="mb-4">
      <h4 className="text-sm font-medium mb-2">Links:</h4>
      <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              type="text"
              value={item.text}
              onChange={(e) =>
                handleArrayItemChange(index, "text", e.target.value)
              }
              className="flex-1 px-2 py-1 border rounded"
              placeholder={textLabel}
            />
            <input
              type="text"
              value={item.path}
              onChange={(e) =>
                handleArrayItemChange(index, "path", e.target.value)
              }
              className="flex-1 px-2 py-1 border rounded"
              placeholder={pathLabel}
            />
            <button
              onClick={() => removeLink(index)}
              className="text-red-500 hover:text-red-700 p-1"
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={newLink.text}
          onChange={(e) => setNewLink({ ...newLink, text: e.target.value })}
          className="flex-1 px-2 py-1 border rounded"
          placeholder={textLabel}
        />
        <input
          type="text"
          value={newLink.path}
          onChange={(e) => setNewLink({ ...newLink, path: e.target.value })}
          className="flex-1 px-2 py-1 border rounded"
          placeholder={pathLabel}
        />
      </div>
      <button
        onClick={addNewLink}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center text-sm"
      >
        <FiPlus className="inline mr-1" /> Add Link
      </button>
    </div>
  );

  // Render section content
  const renderSectionContent = (section) => {
    if (editingSection === section) {
      return (
        <div
          className={`p-4 rounded-lg ${
            theme === "dark" ? "bg-gray-700" : "bg-white"
          } shadow-md mb-4`}
        >
          {section === "logo" && (
            <>
              {renderEditableField("Logo Source", "src", formData.src)}
              {renderEditableField("Logo Alt Text", "alt", formData.alt)}
              {renderEditableField("Logo Size", "size", formData.size)}
            </>
          )}

          {section === "description" &&
            renderEditableField("Description", "description", formData, true)}

          {(section === "quickLinks" || section === "courses") &&
            renderEditableArray(formData, "Link Text", "Link Path")}

          {section === "contactInfo" && (
            <>
              {renderEditableField(
                "Address",
                "address",
                formData.address,
                true
              )}
              {renderEditableField("Email", "email", formData.email)}
              {renderEditableField("Phone", "phone", formData.phone)}
            </>
          )}

          {section === "socialLinks" &&
            renderEditableArray(formData, "Social Media", "Link URL")}

          {section === "copyright" &&
            renderEditableField("Copyright Text", "copyright", formData)}

          {section === "developer" && (
            <>
              {renderEditableField("Text", "text", formData.text)}
              {renderEditableField("Name", "name", formData.name)}
              {renderEditableField("Link", "link", formData.link)}
            </>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={cancelEditing}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={saveChanges}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 flex items-center text-sm"
            >
              <FiSave className="inline mr-1" /> Save
            </button>
          </div>
        </div>
      );
    }

    // Display mode
    return (
      <div
        className={`p-4 rounded-lg transition-all duration-300 overflow-hidden ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
        } shadow mb-4`}
        style={{
          maxHeight: expandedSections[section] ? "1000px" : "60px",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection(section)}
        >
          <h3 className="font-medium text-lg">
            {section === "logo" && "Logo Settings"}
            {section === "description" && "Description"}
            {section === "quickLinks" && "Quick Links"}
            {section === "courses" && "Courses"}
            {section === "contactInfo" && "Contact Information"}
            {section === "socialLinks" && "Social Media Links"}
            {section === "copyright" && "Copyright Text"}
            {section === "developer" && "Developer Information"}
          </h3>
          <button className="p-1">
            {expandedSections[section] ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>

        {expandedSections[section] && (
          <div className="mt-4">
            {section === "logo" && (
              <div>
                <p>Source: {footerData.logo.src}</p>
                <p>Alt: {footerData.logo.alt}</p>
                <p>Size: {footerData.logo.size}</p>
              </div>
            )}

            {section === "description" && (
              <p className="whitespace-pre-line">{footerData.description}</p>
            )}

            {(section === "quickLinks" || section === "courses") && (
              <ul className="list-disc pl-5 space-y-1 max-h-40 overflow-y-auto">
                {footerData[section].map((item, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-medium">{item.text}</span> -{" "}
                    {item.path}
                  </li>
                ))}
              </ul>
            )}

            {section === "contactInfo" && (
              <div>
                <p className="whitespace-pre-line">
                  {footerData.contactInfo.address}
                </p>
                <p>Email: {footerData.contactInfo.email}</p>
                <p>Phone: {footerData.contactInfo.phone}</p>
              </div>
            )}

            {section === "socialLinks" && (
              <ul className="list-disc pl-5 space-y-1">
                {footerData.socialLinks.map((item, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-medium capitalize">{item.icon}</span>:{" "}
                    {item.link}
                  </li>
                ))}
              </ul>
            )}

            {section === "copyright" && <p>{footerData.copyright}</p>}

            {section === "developer" && (
              <p>
                {footerData.developer.text}{" "}
                <a href={footerData.developer.link} className="text-blue-500">
                  {footerData.developer.name}
                </a>
              </p>
            )}

            <button
              onClick={() => startEditing(section)}
              disabled={isLocked}
              className={`mt-4 px-3 py-1 rounded flex items-center text-sm ${
                isLocked
                  ? "bg-gray-400 cursor-not-allowed"
                  : theme === "dark"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              <FiEdit className="inline mr-1" /> Edit
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen p-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Loading and Message Indicator */}
      {loading && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Saving changes...
        </div>
      )}

      {message.text && (
        <div
          className={`fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg z-50 ${
            message.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header with controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Footer Content Management</h1>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={toggleLock}
              className={`p-2 rounded-full ${
                isLocked
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              } text-white`}
              title={isLocked ? "Unlock editing" : "Lock editing"}
            >
              {isLocked ? <FiLock size={18} /> : <FiUnlock size={18} />}
            </button>
            <button
              onClick={saveAllData}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex items-center text-sm"
            >
              <FiSave className="inline mr-1" /> Save All Changes
            </button>
          </div>
        </div>

        {/* Status bar */}
        <div
          className={`mb-6 p-3 rounded text-sm ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <p>
            Status:{" "}
            <span className={isLocked ? "text-red-500" : "text-green-500"}>
              {isLocked ? "Editing locked" : "Editing unlocked"}
            </span>{" "}
            | Theme: <span className="capitalize">{theme}</span> | Last saved:{" "}
            {message.type === "success" ? "Just now" : "Never"}
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Logo Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">Logo Settings</h2>
            {renderSectionContent("logo")}
          </div>

          {/* Description Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            {renderSectionContent("description")}
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
            {renderSectionContent("quickLinks")}
          </div>

          {/* Courses Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-2">Courses</h2>
            {renderSectionContent("courses")}
          </div>

          {/* Contact Info Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            {renderSectionContent("contactInfo")}
          </div>

          {/* Social Links Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">Social Media Links</h2>
            {renderSectionContent("socialLinks")}
          </div>

          {/* Copyright Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">Copyright Text</h2>
            {renderSectionContent("copyright")}
          </div>

          {/* Developer Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">
              Developer Information
            </h2>
            {renderSectionContent("developer")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAdminPanel;
