import React, { useEffect, useState } from "react";
import {
  FaUserTie,
  FaUsers,
  FaCloud,
  FaUserFriends,
  FaWhatsapp,
  FaBriefcase,
  FaLaptop,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaCode,
  FaDatabase,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaChartLine,
  FaDollarSign,
} from "react-icons/fa";

// Map icon names to their components for easy rendering
const iconComponents = {
  FaUserTie,
  FaUsers,
  FaCloud,
  FaUserFriends,
  FaWhatsapp,
  FaBriefcase,
  FaLaptop,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaCode,
  FaDatabase,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaChartLine,
  FaDollarSign,
};

// Helper component to render an icon from its string name
const RenderIcon = ({ iconName, className }) => {
  const IconComponent = iconComponents[iconName];
  return IconComponent ? (
    <IconComponent className={`${className} text-gray-800`} />
  ) : null;
};

const AdminPanel = () => {
  const [groups, setGroups] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    icon: "",
    whatsappLink: "",
    whatsappChannel: "",
    features: [],
  });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState(""); // For success/error messages

  // Use the keys from our map as the dropdown options
  const iconOptions = Object.keys(iconComponents);

  // Fetch groups from API
  const fetchGroups = async () => {
    try {
      console.log("Fetching groups..."); // Debug log
      const res = await fetch("https://refermegroup.com/api/careers");
      console.log("Response status:", res.status); // Debug log
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched data:", data); // Debug log
      setGroups(data);
      setMessage(""); // Clear any previous message
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error loading groups: " + error.message);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle features as comma-separated values
  const handleFeaturesChange = (e) => {
    setForm({
      ...form,
      features: e.target.value
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f), // Filter empty
    });
  };

  // Add or Update group
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous message

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `https://refermegroup.com/api/careers/${editingId}`
      : "https://refermegroup.com/api/careers";

    console.log("Submitting:", { method, url, data: form }); // Debug log

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      console.log("Submit response status:", res.status); // Debug log

      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(
          `HTTP error! status: ${res.status}, body: ${errorData}`
        );
      }

      const savedData = await res.json();
      console.log("Saved data:", savedData); // Debug log

      await fetchGroups(); // Refresh list
      setForm({
        name: "",
        description: "",
        icon: "",
        whatsappLink: "",
        whatsappChannel: "",
        features: [],
      });
      setEditingId(null);
      setMessage(
        editingId ? "Group updated successfully!" : "Group added successfully!"
      );
    } catch (error) {
      console.error("Error saving group:", error);
      setMessage("Error saving group: " + error.message);
    }
  };

  // Edit group
  const handleEdit = (group) => {
    // Ensure features are handled correctly if they are an array
    const groupData = {
      ...group,
      features: Array.isArray(group.features) ? group.features : [],
    };
    setForm(groupData);
    setEditingId(group._id);
    setMessage("");
  };

  // Delete group
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this group?")) return;
    setMessage(""); // Clear previous message

    try {
      console.log("Deleting:", id); // Debug log
      const res = await fetch(`https://refermegroup.com/api/careers/${id}`, {
        method: "DELETE",
      });
      console.log("Delete response status:", res.status); // Debug log

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      await fetchGroups(); // Refresh list
      setMessage("Group deleted successfully!");
    } catch (error) {
      console.error("Error deleting group:", error);
      setMessage("Error deleting group: " + error.message);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Job Groups</h1>

      {/* Message Display */}
      {message && (
        <div
          className={`p-4 mb-4 rounded ${
            message.includes("Error")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Group" : "Add New Group"}
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Group Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
        ></textarea>

        <select
          name="icon"
          value={form.icon}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
        >
          <option value="" disabled>
            -- Select an Icon --
          </option>
          {iconOptions.map((iconName) => (
            <option key={iconName} value={iconName}>
              {iconName}
            </option>
          ))}
        </select>

        <input
          type="url"
          name="whatsappLink"
          placeholder="WhatsApp Group Link"
          value={form.whatsappLink}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="url"
          name="whatsappChannel"
          placeholder="WhatsApp Channel Link"
          value={form.whatsappChannel}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="text"
          name="features"
          placeholder="Features (comma separated)"
          value={form.features.join(", ")}
          onChange={handleFeaturesChange}
          className="border p-2 w-full mb-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update Group" : "Add Group"}
        </button>
      </form>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Job Groups ({groups.length})
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Icon</th>
                <th className="p-2 border">WhatsApp</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groups.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No groups found.
                  </td>
                </tr>
              ) : (
                groups.map((group) => {
                  console.log("Rendering group:", group); // Debug log per row
                  return (
                    <tr key={group._id} className="border hover:bg-gray-50">
                      <td className="p-2 border">{group.name}</td>
                      <td className="p-2 border text-sm">
                        {group.description}
                      </td>
                      <td className="p-2 border">
                        <div className="flex justify-center items-center">
                          <RenderIcon
                            iconName={group.icon}
                            className="text-2xl"
                          />
                          {group.icon && (
                            <span className="ml-1 text-xs text-gray-500">
                              ({group.icon})
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-2 border">
                        <a
                          href={group.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline"
                        >
                          Group
                        </a>{" "}
                        {group.whatsappChannel && (
                          <a
                            href={group.whatsappChannel}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline ml-2"
                          >
                            Channel
                          </a>
                        )}
                      </td>
                      <td className="p-2 border text-center">
                        <button
                          onClick={() => handleEdit(group)}
                          className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(group._id)}
                          className="bg-red-600 text-white px-2 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
