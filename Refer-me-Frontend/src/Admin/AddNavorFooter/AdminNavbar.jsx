import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTrash,
  FaEdit,
  FaPlus,
  FaMoon,
  FaSun,
  FaLock,
  FaUnlock,
  FaPalette,
  FaBars,
  FaTimes,
  FaArrowLeft,
  FaLaptopCode,
  FaChartBar,
  FaBrain,
  FaCogs,
  FaLayerGroup,
  FaDatabase,
  FaCodeBranch,
  FaRobot,
  FaUserTie,
  FaChartLine,
  FaTasks,
  FaHashtag,
  FaBoxOpen,
  FaCloud,
  FaBolt,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaMicrosoft,
  FaCode,
  FaJava,
  FaNetworkWired,
  FaBug,
  FaLaptop,
  FaServer,
  FaBook,
} from "react-icons/fa";

const AdminPanel = () => {
  // State for theme
  const [theme, setTheme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState("indigo");
  const [secondaryColor, setSecondaryColor] = useState("purple");

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  // State for sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // State for navbar content
  const [logo, setLogo] = useState({
    image: "/assets/logo/rmg-logo.png",
    alt: "RMG Logo",
    height: "40px",
  });

  const [contactInfo, setContactInfo] = useState({
    phone: "+91 76785 73511",
    email: "contact@refermegroup.com",
  });

  const [socialLinks, setSocialLinks] = useState([
    {
      platform: "Facebook",
      url: "https://www.facebook.com/refermegroup.qa",
      icon: "FaFacebook",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/refermegroup/",
      icon: "FaInstagram",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/refermegroup/",
      icon: "FaLinkedin",
    },
    { platform: "Twitter", url: "https://twitter.com", icon: "FaTwitter" },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@ReferMeGroupQA",
      icon: "FaYoutube",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/917678573511",
      icon: "FaWhatsapp",
    },
  ]);

  const [menuItems, setMenuItems] = useState({
    main: [
      { id: 1, label: "Home", path: "/", type: "link" },
      {
        id: 2,
        label: "About Us",
        path: "/about",
        type: "dropdown",
        items: [
          { id: 21, label: "Our Story", path: "/about/history" },
          { id: 22, label: "Core Committee", path: "/about/team" },
          { id: 23, label: "Our Payment Policy", path: "/about/paymentpolicy" },
          { id: 24, label: "What we do", path: "/about/whatwedo" },
        ],
      },
      {
        id: 3,
        label: "Our Services",
        path: "/services",
        type: "dropdown",
        items: [
          { id: 31, label: "Webinars", path: "/services/webinars" },
          { id: 32, label: "Manthan", path: "/services/manthan" },
          {
            id: 33,
            label: "Partnership Programs",
            path: "/services/partnership-programs",
          },
          { id: 34, label: "Freelancing", path: "/services/freelancing" },
        ],
      },
      { id: 4, label: "Our Blogs", path: "/blogs", type: "link" },
      { id: 5, label: "Job Groups", path: "/career", type: "link" },
      { id: 6, label: "Contact Us", path: "/contact", type: "link" },
    ],
    courses: [
      {
        id: 101,
        label: "Data Science Course",
        path: "/courses/data-science",
        icon: "FaLaptopCode",
        description: "Master data analysis and visualization",
        color: "orange",
      },
      // ... other course items (shortened for brevity)
    ],
  });

  // State for form inputs
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Icon component mapping
  const iconComponents = {
    FaLaptopCode: <FaLaptopCode />,
    FaChartBar: <FaChartBar />,
    FaBrain: <FaBrain />,
    FaCogs: <FaCogs />,
    FaLayerGroup: <FaLayerGroup />,
    FaDatabase: <FaDatabase />,
    FaCodeBranch: <FaCodeBranch />,
    FaRobot: <FaRobot />,
    FaUserTie: <FaUserTie />,
    FaChartLine: <FaChartLine />,
    FaTasks: <FaTasks />,
    FaHashtag: <FaHashtag />,
    FaBoxOpen: <FaBoxOpen />,
    FaCloud: <FaCloud />,
    FaBolt: <FaBolt />,
    FaProjectDiagram: <FaProjectDiagram />,
    FaMoneyBillWave: <FaMoneyBillWave />,
    FaMicrosoft: <FaMicrosoft />,
    FaCode: <FaCode />,
    FaJava: <FaJava />,
    FaNetworkWired: <FaNetworkWired />,
    FaBug: <FaBug />,
    FaLaptop: <FaLaptop />,
    FaServer: <FaServer />,
    FaBook: <FaBook />,
  };

  // API base URL
  const API_BASE = "http://localhost:5000/api/navbar";

  // Fetch navbar data from API
  useEffect(() => {
    fetchNavbarData();
  }, []);

  const fetchNavbarData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE);
      if (!response.ok) {
        throw new Error("Failed to fetch navbar data");
      }
      const data = await response.json();

      // Update state with fetched data
      if (data.logo) setLogo(data.logo);
      if (data.contactInfo) setContactInfo(data.contactInfo);
      if (data.socialLinks) setSocialLinks(data.socialLinks);
      if (data.menuItems) setMenuItems(data.menuItems);
      if (data.theme) setTheme(data.theme);
      if (data.primaryColor) setPrimaryColor(data.primaryColor);
      if (data.secondaryColor) setSecondaryColor(data.secondaryColor);

      setMessage({ type: "success", text: "Data loaded successfully" });
    } catch (error) {
      console.error("Error fetching navbar data:", error);
      setMessage({
        type: "error",
        text: "Failed to load data. Using default values.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Save all navbar data to API
  const saveAllData = async () => {
    try {
      setLoading(true);
      const navbarData = {
        logo,
        contactInfo,
        socialLinks,
        menuItems,
        theme,
        primaryColor,
        secondaryColor,
      };

      const response = await fetch(API_BASE, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(navbarData),
      });

      if (!response.ok) {
        throw new Error("Failed to save navbar data");
      }

      setMessage({ type: "success", text: "All changes saved successfully!" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      console.error("Error saving navbar data:", error);
      setMessage({
        type: "error",
        text: "Failed to save changes. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Save specific section data
  const saveSectionData = async (section, data) => {
    try {
      setLoading(true);

      // First get the current data
      const response = await fetch(API_BASE);
      if (!response.ok) {
        throw new Error("Failed to fetch current navbar data");
      }
      const currentData = await response.json();

      // Update only the specific section
      const updatedData = {
        ...currentData,
        [section]: data,
      };

      // Save the updated data
      const saveResponse = await fetch(API_BASE, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!saveResponse.ok) {
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
    } finally {
      setLoading(false);
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Toggle edit mode
  const toggleEdit = () => {
    if (!isLocked) {
      setIsEditing(!isEditing);
    }
  };

  // Toggle lock
  const toggleLock = () => {
    setIsLocked(!isLocked);
    if (isLocked) {
      setIsEditing(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Start editing an item
  const startEditing = (section, item) => {
    if (!isLocked) {
      setCurrentEditItem({ section, id: item.id });
      setFormData({ ...item });
    }
  };

  // Add new item
  const addNewItem = (section) => {
    if (!isLocked) {
      const newId = Math.max(0, ...menuItems[section].map((i) => i.id)) + 1;
      setCurrentEditItem({ section, id: null });
      setFormData({
        id: newId,
        label: "",
        path: "",
        ...(section === "courses"
          ? {
              icon: "FaLaptopCode",
              description: "",
              color: "blue",
            }
          : {}),
        ...(section === "main" ? { type: "link" } : {}),
      });
    }
  };

  // Save changes
  const saveChanges = async () => {
    if (isLocked) return;

    if (currentEditItem) {
      const { section, id } = currentEditItem;

      if (id === null) {
        // Add new item
        const updatedMenuItems = {
          ...menuItems,
          [section]: [...menuItems[section], formData],
        };

        setMenuItems(updatedMenuItems);

        // Save to API
        await saveSectionData("menuItems", updatedMenuItems);
      } else {
        // Update existing item
        const updatedMenuItems = {
          ...menuItems,
          [section]: menuItems[section].map((item) =>
            item.id === id ? formData : item
          ),
        };

        setMenuItems(updatedMenuItems);

        // Save to API
        await saveSectionData("menuItems", updatedMenuItems);
      }
    }

    // Reset form
    setCurrentEditItem(null);
    setFormData({});
  };

  // Delete item
  const deleteItem = async (section, id) => {
    if (!isLocked) {
      const updatedMenuItems = {
        ...menuItems,
        [section]: menuItems[section].filter((item) => item.id !== id),
      };

      setMenuItems(updatedMenuItems);

      // Save to API
      await saveSectionData("menuItems", updatedMenuItems);
    }
  };

  // Save logo changes
  const saveLogoChanges = async () => {
    await saveSectionData("logo", logo);
    setCurrentEditItem(null);
  };

  // Save contact changes
  const saveContactChanges = async () => {
    await saveSectionData("contactInfo", contactInfo);
    setCurrentEditItem(null);
  };

  // Save social links changes
  const saveSocialLinksChanges = async () => {
    await saveSectionData("socialLinks", socialLinks);
    setCurrentEditItem(null);
  };

  // Save theme changes
  const saveThemeChanges = async () => {
    await saveSectionData("themeSettings", {
      theme,
      primaryColor,
      secondaryColor,
    });
    setCurrentEditItem(null);
  };

  // Color options
  const colorOptions = [
    { name: "blue", value: "blue-500", bg: "blue-100", text: "blue-600" },
    {
      name: "indigo",
      value: "indigo-500",
      bg: "indigo-100",
      text: "indigo-600",
    },
    {
      name: "purple",
      value: "purple-500",
      bg: "purple-100",
      text: "purple-600",
    },
    { name: "pink", value: "pink-500", bg: "pink-100", text: "pink-600" },
    { name: "red", value: "red-500", bg: "red-100", text: "red-600" },
    {
      name: "orange",
      value: "orange-500",
      bg: "orange-100",
      text: "orange-600",
    },
    {
      name: "yellow",
      value: "yellow-500",
      bg: "yellow-100",
      text: "yellow-600",
    },
    { name: "green", value: "green-500", bg: "green-100", text: "green-600" },
    { name: "teal", value: "teal-500", bg: "teal-100", text: "teal-600" },
    { name: "cyan", value: "cyan-500", bg: "cyan-100", text: "cyan-600" },
    { name: "gray", value: "gray-500", bg: "gray-100", text: "gray-600" },
  ];

  // Icon options
  const iconOptions = Object.keys(iconComponents);

  return (
    <div
      className={`flex h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
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

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } 
        border-r ${theme === "dark" ? "border-gray-700" : "border-gray-200"} 
        transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          {sidebarOpen ? (
            <h2 className="text-xl font-bold">Navbar Admin</h2>
          ) : (
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              N
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {sidebarOpen ? <FaArrowLeft /> : <FaBars />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            <button
              className={`w-full flex items-center p-2 rounded-lg ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              } 
              ${
                !currentEditItem
                  ? theme === "dark"
                    ? "bg-gray-700"
                    : "bg-gray-100"
                  : ""
              }`}
              onClick={() => setCurrentEditItem(null)}
            >
              {sidebarOpen ? "Dashboard" : <span className="text-xl">🏠</span>}
            </button>

            <button
              className={`w-full flex items-center p-2 rounded-lg ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setCurrentEditItem({ section: "logo" })}
            >
              {sidebarOpen ? (
                "Logo Settings"
              ) : (
                <span className="text-xl">🖼️</span>
              )}
            </button>

            <button
              className={`w-full flex items-center p-2 rounded-lg ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setCurrentEditItem({ section: "contact" })}
            >
              {sidebarOpen ? (
                "Contact Info"
              ) : (
                <span className="text-xl">📞</span>
              )}
            </button>

            <button
              className={`w-full flex items-center p-2 rounded-lg ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setCurrentEditItem({ section: "social" })}
            >
              {sidebarOpen ? (
                "Social Links"
              ) : (
                <span className="text-xl">🔗</span>
              )}
            </button>

            <button
              className={`w-full flex items-center p-2 rounded-lg ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setCurrentEditItem({ section: "mainMenu" })}
            >
              {sidebarOpen ? "Main Menu" : <span className="text-xl">🍔</span>}
            </button>

            <button
              className={`w-full flex items-center p-2 rounded-lg ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setCurrentEditItem({ section: "courses" })}
            >
              {sidebarOpen ? "Courses" : <span className="text-xl">📚</span>}
            </button>

            <button
              className={`w-full flex items-center p-2 rounded-lg ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setCurrentEditItem({ section: "theme" })}
            >
              {sidebarOpen ? (
                "Theme & Colors"
              ) : (
                <span className="text-xl">🎨</span>
              )}
            </button>
          </div>
        </nav>

        <div className="p-4 border-t flex items-center justify-between">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            title={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <button
            onClick={toggleLock}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            title={isLocked ? "Unlock editing" : "Lock editing"}
          >
            {isLocked ? <FaLock /> : <FaUnlock />}
          </button>

          {sidebarOpen && (
            <div className="flex gap-2">
              <button
                onClick={toggleEdit}
                disabled={isLocked}
                className={`px-3 py-1 rounded-lg ${
                  isLocked
                    ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                    : isEditing
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {isEditing ? "Editing" : "Edit"}
              </button>

              <button
                onClick={saveAllData}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                title="Save all changes to API"
              >
                Save All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {currentEditItem ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {currentEditItem.section === "logo" && "Logo Settings"}
                {currentEditItem.section === "contact" && "Contact Information"}
                {currentEditItem.section === "social" && "Social Media Links"}
                {currentEditItem.section === "mainMenu" && "Main Menu Items"}
                {currentEditItem.section === "courses" && "Course Items"}
                {currentEditItem.section === "theme" &&
                  "Theme & Color Settings"}
              </h2>
              <button
                onClick={() => setCurrentEditItem(null)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            {/* Logo Settings */}
            {currentEditItem.section === "logo" && (
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">
                      Logo Image URL
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={logo.image}
                      onChange={(e) =>
                        setLogo({ ...logo, image: e.target.value })
                      }
                      disabled={isLocked}
                      placeholder="Enter logo image URL (e.g., /assets/logo.png)"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Alt Text</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={logo.alt}
                      onChange={(e) =>
                        setLogo({ ...logo, alt: e.target.value })
                      }
                      disabled={isLocked}
                      placeholder="Enter alt text for accessibility"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">
                      Logo Height (px)
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={logo.height.replace("px", "")}
                      onChange={(e) =>
                        setLogo({ ...logo, height: `${e.target.value}px` })
                      }
                      disabled={isLocked}
                      placeholder="Enter height in pixels (e.g., 40)"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="border p-4 rounded-lg">
                      <p className="mb-2 text-sm">Preview:</p>
                      <img
                        src={logo.image}
                        alt={logo.alt}
                        style={{ height: logo.height }}
                        className="max-w-full"
                      />
                    </div>
                  </div>
                </div>
                {isEditing && !isLocked && (
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={saveLogoChanges}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Contact Information */}
            {currentEditItem.section === "contact" && (
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={contactInfo.phone}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          phone: e.target.value,
                        })
                      }
                      disabled={isLocked}
                      placeholder="Enter phone number (e.g., +91 1234567890)"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded"
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          email: e.target.value,
                        })
                      }
                      disabled={isLocked}
                      placeholder="Enter email address (e.g., contact@example.com)"
                    />
                  </div>
                </div>
                {isEditing && !isLocked && (
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={saveContactChanges}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Social Media Links */}
            {currentEditItem.section === "social" && (
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Social Media Links</h3>
                  {isEditing && !isLocked && (
                    <button
                      onClick={() => addNewItem("social")}
                      className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
                    >
                      <FaPlus /> Add New
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                      } flex items-center justify-between`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          {link.platform === "Facebook" && (
                            <span className="text-blue-500">FB</span>
                          )}
                          {link.platform === "Instagram" && (
                            <span className="text-pink-500">IG</span>
                          )}
                          {link.platform === "LinkedIn" && (
                            <span className="text-blue-700">LI</span>
                          )}
                          {link.platform === "Twitter" && (
                            <span className="text-sky-500">TW</span>
                          )}
                          {link.platform === "YouTube" && (
                            <span className="text-red-500">YT</span>
                          )}
                          {link.platform === "WhatsApp" && (
                            <span className="text-green-500">WA</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{link.platform}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
                            {link.url}
                          </p>
                        </div>
                      </div>

                      {isEditing && !isLocked && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setCurrentEditItem({
                                section: "social",
                                id: index,
                              });
                              setFormData({ ...link });
                            }}
                            className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-full"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => {
                              const newLinks = [...socialLinks];
                              newLinks.splice(index, 1);
                              setSocialLinks(newLinks);
                            }}
                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-full"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {currentEditItem.id !== null && isEditing && !isLocked && (
                  <div className="mt-6 p-4 border rounded-lg">
                    <h4 className="font-medium mb-4">
                      {typeof currentEditItem.id === "number"
                        ? "Edit Social Link"
                        : "Add New Social Link"}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-medium">
                          Platform
                        </label>
                        <select
                          name="platform"
                          value={formData.platform || ""}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                        >
                          <option value="">Select Platform</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Instagram">Instagram</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Twitter">Twitter</option>
                          <option value="YouTube">YouTube</option>
                          <option value="WhatsApp">WhatsApp</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">URL</label>
                        <input
                          type="url"
                          name="url"
                          value={formData.url || ""}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        onClick={() =>
                          setCurrentEditItem({ section: "social" })
                        }
                        className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          if (typeof currentEditItem.id === "number") {
                            // Update existing
                            const newLinks = [...socialLinks];
                            newLinks[currentEditItem.id] = formData;
                            setSocialLinks(newLinks);
                          } else {
                            // Add new
                            setSocialLinks([...socialLinks, formData]);
                          }
                          setCurrentEditItem({ section: "social" });
                          setFormData({});
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}

                {isEditing && !isLocked && (
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={saveSocialLinksChanges}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Save All Social Links
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Main Menu Items */}
            {currentEditItem.section === "mainMenu" && (
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Main Menu Items</h3>
                  {isEditing && !isLocked && (
                    <button
                      onClick={() => addNewItem("main")}
                      className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
                    >
                      <FaPlus /> Add New
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {menuItems.main.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-lg ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                      } flex items-center justify-between`}
                    >
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.path}{" "}
                          {item.type === "dropdown" &&
                            `(${item.items.length} sub-items)`}
                        </p>
                      </div>

                      {isEditing && !isLocked && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditing("main", item)}
                            className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-full"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteItem("main", item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-full"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {currentEditItem.id !== null && isEditing && !isLocked && (
                  <div className="mt-6 p-4 border rounded-lg">
                    <h4 className="font-medium mb-4">
                      {currentEditItem.id
                        ? "Edit Menu Item"
                        : "Add New Menu Item"}
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block mb-2 font-medium">Label</label>
                        <input
                          type="text"
                          name="label"
                          value={formData.label || ""}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                          placeholder="Menu item text (e.g., Home, About)"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium">
                          Path/URL
                        </label>
                        <input
                          type="text"
                          name="path"
                          value={formData.path || ""}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                          placeholder="/path (e.g., /home, /about)"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium">Type</label>
                        <select
                          name="type"
                          value={formData.type || "link"}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                        >
                          <option value="link">Simple Link</option>
                          <option value="dropdown">Dropdown Menu</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        onClick={() =>
                          setCurrentEditItem({ section: "mainMenu" })
                        }
                        className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveChanges}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Course Items */}
            {currentEditItem.section === "courses" && (
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Course Items</h3>
                  {isEditing && !isLocked && (
                    <button
                      onClick={() => addNewItem("courses")}
                      className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
                    >
                      <FaPlus /> Add New
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {menuItems.courses.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-lg ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                      } flex items-center justify-between`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            theme === "dark" ? "bg-gray-600" : "bg-white"
                          } shadow`}
                        >
                          {iconComponents[item.icon] &&
                            React.cloneElement(iconComponents[item.icon], {
                              className: `text-${item.color}-500`,
                            })}
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.path}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {isEditing && !isLocked && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditing("courses", item)}
                            className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-full"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteItem("courses", item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-full"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {currentEditItem.id !== null && isEditing && !isLocked && (
                  <div className="mt-6 p-4 border rounded-lg">
                    <h4 className="font-medium mb-4">
                      {currentEditItem.id
                        ? "Edit Course Item"
                        : "Add New Course Item"}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-medium">
                          Course Title
                        </label>
                        <input
                          type="text"
                          name="label"
                          value={formData.label || ""}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                          placeholder="Course name (e.g., Data Science Course)"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium">
                          Path/URL
                        </label>
                        <input
                          type="text"
                          name="path"
                          value={formData.path || ""}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                          placeholder="/courses/slug (e.g., /courses/data-science)"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium">Icon</label>
                        <select
                          name="icon"
                          value={formData.icon || "FaLaptopCode"}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                        >
                          {iconOptions.map((icon) => (
                            <option key={icon} value={icon}>
                              {icon}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium">Color</label>
                        <select
                          name="color"
                          value={formData.color || "blue"}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                        >
                          {colorOptions.map((color) => (
                            <option key={color.name} value={color.name}>
                              {color.name.charAt(0).toUpperCase() +
                                color.name.slice(1)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block mb-2 font-medium">
                          Description
                        </label>
                        <textarea
                          name="description"
                          value={formData.description || ""}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded"
                          rows="3"
                          placeholder="Short course description (e.g., Master data analysis and visualization)"
                        ></textarea>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        onClick={() =>
                          setCurrentEditItem({ section: "courses" })
                        }
                        className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveChanges}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Theme & Color Settings */}
            {currentEditItem.section === "theme" && (
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <h3 className="text-lg font-medium mb-6">
                  Theme & Color Settings
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">
                      Current Theme
                    </label>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setTheme("light")}
                        className={`px-4 py-2 rounded-lg ${
                          theme === "light"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      >
                        Light Mode
                      </button>
                      <button
                        onClick={() => setTheme("dark")}
                        className={`px-4 py-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      >
                        Dark Mode
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Primary Color
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {colorOptions.map((color) => (
                        <button
                          key={`primary-${color.name}`}
                          onClick={() => setPrimaryColor(color.name)}
                          className={`w-8 h-8 rounded-full bg-${color.value} ${
                            primaryColor === color.name
                              ? "ring-2 ring-offset-2 ring-blue-500"
                              : ""
                          }`}
                          title={color.name}
                        ></button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Secondary Color
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {colorOptions.map((color) => (
                        <button
                          key={`secondary-${color.name}`}
                          onClick={() => setSecondaryColor(color.name)}
                          className={`w-8 h-8 rounded-full bg-${color.value} ${
                            secondaryColor === color.name
                              ? "ring-2 ring-offset-2 ring-blue-500"
                              : ""
                          }`}
                          title={color.name}
                        ></button>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 font-medium">Preview</label>
                    <div
                      className="p-4 rounded-lg"
                      style={{
                        background: `linear-gradient(to right, var(--${primaryColor}-500), var(--${secondaryColor}-500))`,
                      }}
                    >
                      <p className="text-white text-center">
                        Navbar Gradient Preview
                      </p>
                    </div>
                  </div>
                </div>

                {isEditing && !isLocked && (
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={saveThemeChanges}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Save Theme Settings
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">
                Navbar Administration Panel
              </h1>
              <button
                onClick={saveAllData}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
              >
                <FaCloud /> Save All to API
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Logo Summary */}
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <h2 className="text-xl font-bold mb-4">Logo Settings</h2>
                <div className="flex items-center gap-4">
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    style={{ height: logo.height }}
                    className="max-w-full"
                  />
                  <div>
                    <p className="font-medium">{logo.alt}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Height: {logo.height}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentEditItem({ section: "logo" })}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Edit Logo
                </button>
              </div>

              {/* Contact Summary */}
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full">
                      <FaPhoneAlt className="text-yellow-600 dark:text-yellow-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phone
                      </p>
                      <p className="font-medium">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full">
                      <FaEnvelope className="text-yellow-600 dark:text-yellow-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <p className="font-medium">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentEditItem({ section: "contact" })}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Edit Contact Info
                </button>
              </div>

              {/* Social Links Summary */}
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <h2 className="text-xl font-bold mb-4">Social Media Links</h2>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                      }`}
                      title={link.platform}
                    >
                      {link.platform === "Facebook" && (
                        <span className="text-blue-500">FB</span>
                      )}
                      {link.platform === "Instagram" && (
                        <span className="text-pink-500">IG</span>
                      )}
                      {link.platform === "LinkedIn" && (
                        <span className="text-blue-700">LI</span>
                      )}
                      {link.platform === "Twitter" && (
                        <span className="text-sky-500">TW</span>
                      )}
                      {link.platform === "YouTube" && (
                        <span className="text-red-500">YT</span>
                      )}
                      {link.platform === "WhatsApp" && (
                        <span className="text-green-500">WA</span>
                      )}
                    </a>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentEditItem({ section: "social" })}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Manage Social Links
                </button>
              </div>

              {/* Main Menu Summary */}
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <h2 className="text-xl font-bold mb-4">Main Menu</h2>
                <div className="space-y-2">
                  {menuItems.main.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.path}
                      </p>
                    </div>
                  ))}
                  {menuItems.main.length > 5 && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      +{menuItems.main.length - 5} more items
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setCurrentEditItem({ section: "mainMenu" })}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Manage Main Menu
                </button>
              </div>

              {/* Courses Summary */}
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <h2 className="text-xl font-bold mb-4">Courses</h2>
                <div className="space-y-3">
                  {menuItems.courses.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div
                        className={`p-1 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-900`}
                      >
                        {iconComponents[item.icon] &&
                          React.cloneElement(iconComponents[item.icon], {
                            className: `text-${item.color}-500 dark:text-${item.color}-300`,
                          })}
                      </div>
                      <p className="font-medium truncate">{item.label}</p>
                    </div>
                  ))}
                  {menuItems.courses.length > 3 && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      +{menuItems.courses.length - 3} more courses
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setCurrentEditItem({ section: "courses" })}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Manage Courses
                </button>
              </div>

              {/* Theme Summary */}
              <div
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow`}
              >
                <h2 className="text-xl font-bold mb-4">Theme Settings</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">
                      Current Theme: {theme === "light" ? "Light" : "Dark"}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                      >
                        {theme === "light" ? <FaMoon /> : <FaSun />}
                      </button>
                      <span>
                        Switch to {theme === "light" ? "Dark" : "Light"} Mode
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-2">Colors</p>
                    <div className="flex gap-2 items-center">
                      <span>Primary:</span>
                      <div
                        className={`w-6 h-6 rounded-full bg-${primaryColor}-500`}
                      ></div>
                      <span>Secondary:</span>
                      <div
                        className={`w-6 h-6 rounded-full bg-${secondaryColor}-500`}
                      ></div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentEditItem({ section: "theme" })}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Customize Theme
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
