import React, { useState, useEffect } from "react";
import axios from "axios";

// --- LIVE CONFIGURATION ---
// Local testing ke liye: "http://localhost:5000"
// Live production ke liye: "https://refermegroup.com"
const SERVER_URL = "https://refermegroup.com";

// Helper to fix image path (Live server friendly)
const fixImageUrl = (imagePath) => {
  if (!imagePath) return "/assets/teams/default-avatar.jpg";

  // Case 1: Agar path relative hai (/uploads/...)
  // Hum check karte hain ki imagePath mein "/uploads/" hai ya nahi
  if (imagePath.includes("/uploads/")) {
    // Agar path pehle se "/uploads/filename.jpg" hai
    const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
    return `${SERVER_URL}${cleanPath}`;
  }

  // Case 2: Agar database mein sirf filename hai ya absolute path cleanup chahiye
  const filenameMatch = imagePath.match(/uploads[/\\](.+)$/);
  if (filenameMatch) {
    return `${SERVER_URL}/uploads/${filenameMatch[1]}`;
  }

  // Case 3: Agar static asset path hai (jo public folder mein hai)
  return imagePath;
};

const TeamAdmin = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [editingMember, setEditingMember] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    linkedin: "",
    twitter: "",
    github: "",
  });

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(imageFile);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      // Live server par CORS issue se bachne ke liye full URL use karein
      const res = await axios.get(`${SERVER_URL}/api/team`);
      setTeamMembers(res.data);
    } catch (err) {
      console.error("Failed to fetch members:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      bio: "",
      linkedin: "",
      twitter: "",
      github: "",
    });
    setImageFile(null);
    setEditingMember(null);
    const imageInput = document.getElementById("imageInput");
    if (imageInput) imageInput.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role) {
      alert("Name and Role are required.");
      return;
    }

    setLoading(true);
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (imageFile) data.append("image", imageFile);

    try {
      if (editingMember) {
        await axios.put(`${SERVER_URL}/api/team/${editingMember._id}`, data);
        alert("Member updated successfully!");
      } else {
        if (!imageFile) {
          alert("Please select an image.");
          setLoading(false);
          return;
        }
        await axios.post(`${SERVER_URL}/api/team`, data);
        alert("Member added successfully!");
      }
      resetForm();
      fetchMembers();
    } catch (err) {
      console.error("Error saving member:", err);
      alert(`Error: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await axios.delete(`${SERVER_URL}/api/team/${id}`);
        alert("Member deleted successfully.");
        fetchMembers();
      } catch (err) {
        alert("Error deleting member.");
      }
    }
  };

  const handleEditClick = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      bio: member.bio || "",
      linkedin: member.linkedin || "",
      twitter: member.twitter || "",
      github: member.github || "",
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Manage Team Members (Live)
      </h1>

      {/* --- FORM SECTION --- */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 bg-white rounded-lg shadow-md mb-8 border border-gray-100"
      >
        <h2 className="text-2xl font-semibold text-indigo-600">
          {editingMember ? "Edit Member" : "Add New Member"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role*"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="3"
          placeholder="Bio"
        ></textarea>

        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="block mb-2 font-medium">Profile Image*</label>
          <input
            type="file"
            id="imageInput"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full p-1 text-sm"
          />

          {(previewUrl || (editingMember && editingMember.image)) && (
            <div className="mt-3 relative inline-block">
              <img
                src={previewUrl || fixImageUrl(editingMember.image)}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
                onError={(e) => {
                  e.target.src = "/assets/teams/default-avatar.jpg";
                }}
              />
              <span className="absolute bottom-0 right-0 bg-indigo-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
                {previewUrl ? "New" : "Live"}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="LinkedIn URL"
          />
          <input
            type="url"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Twitter URL"
          />
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="GitHub URL"
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:bg-gray-400 shadow-md"
          >
            {loading
              ? "Saving..."
              : editingMember
              ? "Update Member"
              : "Add Member"}
          </button>
          {editingMember && (
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* --- LIST SECTION --- */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Current Team Members
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member._id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={fixImageUrl(member.image)}
              alt={member.name}
              className="w-full h-56 object-cover"
              onError={(e) => {
                e.target.src = "/assets/teams/default-avatar.jpg";
              }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
              <div className="flex space-x-2 border-t pt-4">
                <button
                  onClick={() => handleEditClick(member)}
                  className="flex-1 py-2 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-semibold hover:bg-yellow-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="flex-1 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-semibold hover:bg-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAdmin;
