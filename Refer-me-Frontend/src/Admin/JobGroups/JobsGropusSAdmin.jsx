import React, { useEffect, useState } from "react";
import {
  FaUserTie,
  FaUsers,
  FaCloud,
  FaUserFriends,
  FaWhatsapp,
} from "react-icons/fa";

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

  // Available icon suggestions
  const iconOptions = ["FaUserTie", "FaUsers", "FaCloud", "FaUserFriends"];

  // Fetch groups from API
  const fetchGroups = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/careers");
      const data = await res.json();
      setGroups(data);
    } catch (error) {
      console.error("Error fetching data:", error);
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
    setForm({ ...form, features: e.target.value.split(",") });
  };

  // Add or Update group
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/api/careers/${editingId}`
      : "http://localhost:5000/api/careers";

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      fetchGroups();
      setForm({
        name: "",
        description: "",
        icon: "",
        whatsappLink: "",
        whatsappChannel: "",
        features: [],
      });
      setEditingId(null);
    } catch (error) {
      console.error("Error saving group:", error);
    }
  };

  // Edit group
  const handleEdit = (group) => {
    setForm(group);
    setEditingId(group._id);
  };

  // Delete group
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/careers/${id}`, {
        method: "DELETE",
      });
      fetchGroups();
    } catch (error) {
      console.error("Error deleting group:", error);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Job Groups</h1>

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
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          required
        ></textarea>

        {/* Icon with suggestions */}
        <input
          type="text"
          name="icon"
          placeholder="Icon (e.g. FaUsers)"
          value={form.icon}
          onChange={handleChange}
          list="iconSuggestions"
          className="border p-2 w-full mb-3 rounded"
          required
        />
        <datalist id="iconSuggestions">
          {iconOptions.map((icon, i) => (
            <option key={i} value={icon} />
          ))}
        </datalist>

        <input
          type="url"
          name="whatsappLink"
          placeholder="WhatsApp Group Link"
          value={form.whatsappLink}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          required
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
          value={form.features.join(",")}
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
        <h2 className="text-xl font-semibold mb-4">Job Groups</h2>
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
            {groups.map((group) => (
              <tr key={group._id} className="border">
                <td className="p-2 border">{group.name}</td>
                <td className="p-2 border">{group.description}</td>
                <td className="p-2 border">{group.icon}</td>
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
                <td className="p-2 border">
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
