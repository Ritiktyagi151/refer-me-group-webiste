import React, { useState, useEffect } from "react";
import axios from "axios";

// --- CONFIGURATION ---
// Development: http://localhost:5000 | Production: https://refermegroup.com
const SERVER_URL = "https://refermegroup.com";

// Helper to fix image path (handles relative and old absolute paths)
const fixImageUrl = (imagePath) => {
  if (!imagePath) return "/assets/teams/default-avatar.jpg";

  // Case 1: Agar path relative hai (/uploads/...)
  if (imagePath.startsWith("/uploads/")) {
    return `${SERVER_URL}${imagePath}`;
  }

  // Case 2: Agar database mein galti se full path save ho gaya ho (Absolute path cleanup)
  const filenameMatch = imagePath.match(/uploads[/\\](.+)$/);
  if (filenameMatch) {
    return `${SERVER_URL}/uploads/${filenameMatch[1]}`;
  }

  // Fallback: Default avatar agar kuch match na kare
  return "/assets/teams/default-avatar.jpg";
};

const TeamAdmin = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [editingMember, setEditingMember] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null); // Image preview ke liye alag state

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    linkedin: "",
    twitter: "",
    github: "",
  });

  // Image preview handle karne ke liye aur memory leak se bachne ke liye
  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(imageFile);
    setPreviewUrl(objectUrl);

    // Clean up memory when component unmounts or image changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${SERVER_URL}/api/team`);
      setTeamMembers(res.data);
    } catch (err) {
      console.error("Failed to fetch members:", err);
      alert("Error fetching team members.");
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
          alert("Please select an image for the new member.");
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
      <h1 className="text-3xl font-bold mb-6">Manage Team Members</h1>

      {/* --- FORM SECTION --- */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 bg-white rounded-lg shadow-md mb-8"
      >
        <h2 className="text-2xl font-semibold">
          {editingMember ? "Edit Member" : "Add New Member"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Role*</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Image (Photo)*</label>
          <input
            type="file"
            id="imageInput"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full p-2 border rounded"
          />
          {editingMember && (
            <small className="text-gray-500 block mt-1">
              Leave blank to keep current image.
            </small>
          )}

          {/* Form Preview Image Logic */}
          {(previewUrl || (editingMember && editingMember.image)) && (
            <div className="mt-2 relative inline-block">
              <img
                src={previewUrl || fixImageUrl(editingMember.image)}
                alt="Preview"
                className="w-24 h-24 object-cover rounded border shadow-sm"
                onError={(e) => {
                  e.target.src = "/assets/teams/default-avatar.jpg";
                }}
              />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] px-1 rounded">
                {previewUrl ? "New" : "Current"}
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
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
          >
            {loading
              ? "Processing..."
              : editingMember
              ? "Update Member"
              : "Add Member"}
          </button>
          {editingMember && (
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* --- LIST SECTION --- */}
      <h2 className="text-2xl font-semibold mb-4">Current Team</h2>
      {loading && teamMembers.length === 0 ? (
        <p>Loading members...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow"
            >
              <img
                src={fixImageUrl(member.image)}
                alt={member.name}
                className="w-full h-48 object-cover bg-gray-100"
                onError={(e) => {
                  e.target.src = "/assets/teams/default-avatar.jpg";
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditClick(member)}
                    className="flex-1 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member._id)}
                    className="flex-1 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamAdmin;
