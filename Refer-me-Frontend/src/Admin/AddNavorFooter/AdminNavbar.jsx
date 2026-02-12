import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTrash,
  FaEdit,
  FaPlus,
  FaLock,
  FaUnlock,
  FaBars,
  FaArrowLeft,
  FaLaptopCode,
  FaChartBar,
  FaBrain,
  FaCogs,
  FaRobot,
  FaChartLine,
  FaTasks,
  FaHashtag,
  FaBoxOpen,
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
  FaSave,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Icon components mapping for both Courses and Social Media
const iconComponents = {
  FaLaptopCode: <FaLaptopCode />,
  FaChartBar: <FaChartBar />,
  FaBrain: <FaBrain />,
  FaCogs: <FaCogs />,
  FaRobot: <FaRobot />,
  FaChartLine: <FaChartLine />,
  FaTasks: <FaTasks />,
  FaHashtag: <FaHashtag />,
  FaBoxOpen: <FaBoxOpen />,
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
  // Social Media Icons
  FaFacebook: <FaFacebook />,
  FaInstagram: <FaInstagram />,
  FaLinkedin: <FaLinkedin />,
  FaXTwitter: <FaXTwitter />,
  FaYoutube: <FaYoutube />,
  FaWhatsapp: <FaWhatsapp />,
};

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [isLocked, setIsLocked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [contactInfo, setContactInfo] = useState({ phone: "", email: "" });
  const [socialLinks, setSocialLinks] = useState([]);
  const [courses, setCourses] = useState([]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [editId, setEditId] = useState(null);

  const API_BASE = "https://refermegroup.com/api/navbar";

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_BASE);
      const data = await res.json();
      if (data) {
        if (data.contactInfo) setContactInfo(data.contactInfo);
        if (data.socialLinks) setSocialLinks(data.socialLinks);
        if (data.menuItems?.courses) setCourses(data.menuItems.courses);
      }
    } catch (err) {
      showMsg("error", "Failed to fetch data from API");
    } finally {
      setLoading(false);
    }
  };

  const showMsg = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), 4000);
  };

  const saveToDatabase = async () => {
    if (isLocked) return showMsg("error", "Panel is locked! Unlock to save.");
    try {
      setLoading(true);
      const response = await fetch(API_BASE, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactInfo,
          socialLinks,
          menuItems: { courses },
        }),
      });
      if (response.ok) showMsg("success", "Database updated successfully!");
      else throw new Error();
    } catch (err) {
      showMsg("error", "Update failed! Check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenForm = (item = null, index = null) => {
    if (isLocked) return;
    if (item) {
      setFormData(item);
      setEditId(activeTab === "courses" ? item.id : index);
    } else {
      setFormData(
        activeTab === "courses"
          ? {
              label: "",
              path: "",
              icon: "FaLaptopCode",
              description: "",
              color: "blue",
            }
          : { platform: "", url: "", icon: "FaFacebook" },
      );
      setEditId(null);
    }
    setIsFormOpen(true);
  };

  const handleSaveItem = () => {
    if (activeTab === "courses") {
      if (editId !== null) {
        setCourses(courses.map((c) => (c.id === editId ? formData : c)));
      } else {
        setCourses([...courses, { ...formData, id: Date.now() }]);
      }
    } else {
      if (editId !== null) {
        const updated = [...socialLinks];
        updated[editId] = formData;
        setSocialLinks(updated);
      } else {
        setSocialLinks([...socialLinks, formData]);
      }
    }
    setIsFormOpen(false);
    showMsg(
      "success",
      "Item updated locally. Click Save All to sync with Database.",
    );
  };

  const handleDelete = (id, index) => {
    if (isLocked) return;
    if (activeTab === "courses") {
      setCourses(courses.filter((c) => c.id !== id));
    } else {
      setSocialLinks(socialLinks.filter((_, idx) => idx !== index));
    }
    showMsg("success", "Item removed!");
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <motion.div
        animate={{ width: sidebarOpen ? 280 : 85 }}
        className="bg-[#0f172a] text-white flex flex-col shadow-2xl z-20"
      >
        <div className="p-6 flex items-center justify-between border-b border-slate-700/50">
          <AnimatePresence>
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-black text-xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
              >
                RMG ADMIN
              </motion.span>
            )}
          </AnimatePresence>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {sidebarOpen ? <FaArrowLeft /> : <FaBars />}
          </button>
        </div>
        <nav className="flex-1 mt-6 px-4 space-y-3">
          <NavItem
            active={activeTab === "courses"}
            onClick={() => setActiveTab("courses")}
            icon={<FaBook />}
            label="Course Manager"
            open={sidebarOpen}
          />
          <NavItem
            active={activeTab === "social"}
            onClick={() => setActiveTab("social")}
            icon={<FaHashtag />}
            label="Social Media"
            open={sidebarOpen}
          />
          <NavItem
            active={activeTab === "contact"}
            onClick={() => setActiveTab("contact")}
            icon={<FaPhoneAlt />}
            label="Contact Details"
            open={sidebarOpen}
          />
        </nav>
        <div className="p-4 border-t border-slate-700/50 bg-slate-900/50">
          <button
            onClick={() => setIsLocked(!isLocked)}
            className={`w-full flex items-center justify-center gap-3 p-3 rounded-xl transition-all duration-300 ${isLocked ? "bg-rose-500/20 text-rose-500 border border-rose-500/50" : "bg-emerald-500/20 text-emerald-500 border border-emerald-500/50"}`}
          >
            {isLocked ? <FaLock /> : <FaUnlock />}
            {sidebarOpen && (
              <span className="font-semibold uppercase text-xs tracking-widest">
                {isLocked ? "Locked" : "Unlocked"}
              </span>
            )}
          </button>
        </div>
      </motion.div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 px-8 flex justify-between items-center sticky top-0 z-10">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-slate-800 capitalize">
              {activeTab}
            </h1>
            <p className="text-xs text-slate-500">
              Update your website information
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={saveToDatabase}
            className={`bg-indigo-600 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-lg hover:bg-indigo-700 transition-all ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <FaSave /> {loading ? "Saving..." : "Save All Changes"}
          </motion.button>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <AnimatePresence>
            {message.text && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`mb-6 p-4 rounded-2xl flex items-center gap-3 border shadow-sm ${message.type === "success" ? "bg-emerald-50 border-emerald-100 text-emerald-700" : "bg-rose-50 border-rose-100 text-rose-700"}`}
              >
                <div
                  className={`p-2 rounded-full ${message.type === "success" ? "bg-emerald-500" : "bg-rose-500"} text-white`}
                >
                  <FaBolt />
                </div>
                <span className="font-medium">{message.text}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full"
          >
            {activeTab === "contact" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <ContactCard
                  label="Phone Number"
                  icon={<FaPhoneAlt />}
                  value={contactInfo.phone}
                  onChange={(v) => setContactInfo({ ...contactInfo, phone: v })}
                />
                <ContactCard
                  label="Email Address"
                  icon={<FaEnvelope />}
                  value={contactInfo.email}
                  onChange={(v) => setContactInfo({ ...contactInfo, email: v })}
                />
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <h3 className="font-bold text-slate-700">Records List</h3>
                  <button
                    onClick={() => handleOpenForm()}
                    className="bg-slate-900 text-white px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-slate-800 shadow-md transition-all"
                  >
                    <FaPlus /> Add New
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="text-slate-400 text-xs uppercase tracking-widest bg-slate-50/50">
                      <tr>
                        <th className="px-6 py-4">Title / Name</th>
                        <th className="px-6 py-4">Path / URL</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(activeTab === "courses" ? courses : socialLinks).map(
                        (item, idx) => (
                          <motion.tr
                            layout
                            key={
                              activeTab === "courses"
                                ? item.id || `c-${idx}`
                                : `s-${idx}`
                            }
                            className="group hover:bg-indigo-50/30 transition-colors"
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform">
                                  {iconComponents[item.icon] || <FaHashtag />}
                                </div>
                                <span className="font-semibold text-slate-700">
                                  {item.label || item.platform}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-500 italic truncate max-w-[250px]">
                              {item.path || item.url}
                            </td>
                            <td className="px-6 py-4 text-right flex justify-end gap-2">
                              <button
                                onClick={() => handleOpenForm(item, idx)}
                                className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors"
                              >
                                <FaEdit />
                              </button>
                              <button
                                onClick={() => handleDelete(item.id, idx)}
                                className="p-2 text-rose-500 hover:bg-rose-100 rounded-lg transition-colors"
                              >
                                <FaTrash />
                              </button>
                            </td>
                          </motion.tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        </main>
      </div>

      {/* Editor Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsFormOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl relative z-10"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800">
                  Edit Details
                </h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full text-slate-400"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="space-y-5">
                {activeTab === "courses" ? (
                  <>
                    <InputGroup
                      label="Course Name"
                      placeholder="e.g. Data Science"
                      value={formData.label}
                      onChange={(v) => setFormData({ ...formData, label: v })}
                    />
                    <InputGroup
                      label="Slug / Path"
                      placeholder="/courses/data-science"
                      value={formData.path}
                      onChange={(v) => setFormData({ ...formData, path: v })}
                    />
                    <IconSelector
                      value={formData.icon}
                      onChange={(v) => setFormData({ ...formData, icon: v })}
                    />
                    <InputGroup
                      label="Short Description"
                      area
                      placeholder="Master data..."
                      value={formData.description}
                      onChange={(v) =>
                        setFormData({ ...formData, description: v })
                      }
                    />
                  </>
                ) : (
                  <>
                    <InputGroup
                      label="Platform"
                      placeholder="Facebook"
                      value={formData.platform}
                      onChange={(v) =>
                        setFormData({ ...formData, platform: v })
                      }
                    />
                    <InputGroup
                      label="URL"
                      placeholder="https://..."
                      value={formData.url}
                      onChange={(v) => setFormData({ ...formData, url: v })}
                    />
                    <IconSelector
                      label="Select Platform Icon"
                      value={formData.icon}
                      onChange={(v) => setFormData({ ...formData, icon: v })}
                    />
                  </>
                )}
              </div>
              <div className="flex gap-4 mt-10">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="flex-1 p-4 text-slate-500 font-bold hover:bg-slate-50 rounded-2xl transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveItem}
                  className="flex-1 p-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition shadow-lg"
                >
                  Confirm & Update
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Reusable Components
const IconSelector = ({ label = "Icon Picker", value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-slate-600">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-600 z-10">
        {iconComponents[value] || <FaHashtag />}
      </div>
      <select
        className="w-full p-4 pl-12 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {Object.keys(iconComponents).map((icon) => (
          <option key={icon} value={icon}>
            {icon}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const NavItem = ({ active, onClick, icon, label, open }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${active ? "bg-indigo-600 shadow-lg shadow-indigo-900/50 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
  >
    <span className="text-xl">{icon}</span>
    {open && <span className="font-semibold text-sm">{label}</span>}
  </button>
);

const ContactCard = ({ label, icon, value, onChange }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
    <div className="flex items-center gap-3 text-indigo-600 font-bold">
      {icon} <span>{label}</span>
    </div>
    <input
      type="text"
      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const InputGroup = ({ label, value, onChange, placeholder, area = false }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-slate-600">{label}</label>
    {area ? (
      <textarea
        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-[100px]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : (
      <input
        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    )}
  </div>
);

export default AdminPanel;
