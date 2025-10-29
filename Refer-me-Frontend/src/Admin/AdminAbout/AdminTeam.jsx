// components/TeamAdmin.jsx (Updated with path fixing for images without DB changes)
import React, { useState, useEffect } from "react";
import axios from "axios";

// Apne server ka URL yahaan set karein
const SERVER_URL = "https://refermegroup.com";

// Helper to fix image path (handles absolute to relative conversion)
const fixImageUrl = (imagePath) => {
  if (!imagePath) return "/assets/teams/default-avatar.jpg";
  if (imagePath.startsWith("/uploads/")) {
    return `${SERVER_URL}${imagePath}`;
  }
  // If absolute path (e.g., /root/.../uploads/filename), extract filename
  const filenameMatch = imagePath.match(/uploads[\/\\](.+)$/);
  if (filenameMatch) {
    return `${SERVER_URL}/uploads/${filenameMatch[1]}`;
  }
  return imagePath; // Fallback to original if nothing matches
};

const TeamAdmin = () => {
  // State variables
  const [teamMembers, setTeamMembers] = useState([]); // Saare members ki list
  const [editingMember, setEditingMember] = useState(null); // Jise edit kar rahe hain
  const [imageFile, setImageFile] = useState(null); // Nayi image file
  const [loading, setLoading] = useState(false);

  // Form ka data
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    linkedin: "",
    twitter: "",
    github: "",
  });

  // 1. (Fetch) Component load hote hi data fetch karna
  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${SERVER_URL}/api/team`);
      // Fix image paths for all members
      const fixedMembers = res.data.map((member) => ({
        ...member,
        image: fixImageUrl(member.image),
      }));
      setTeamMembers(fixedMembers);
    } catch (err) {
      console.error("Failed to fetch members:", err);
      alert("Error fetching team members.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, []); // [] = Sirf ek baar run hoga

  // 2. Form mein type karne par state update karna
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. File select karne par state update karna
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // 4. Form clear/reset karna
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
    // File input ko reset karna (with null check)
    const imageInput = document.getElementById("imageInput");
    if (imageInput) {
      imageInput.value = null;
    }
  };

  // 5. (Add/Edit) Form Submit karna
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!formData.name || !formData.role) {
      alert("Name and Role are required.");
      setLoading(false);
      return;
    }

    if (!editingMember && !imageFile) {
      alert("Please select an image for the new member.");
      setLoading(false);
      return;
    }

    // File upload ke liye FormData zaroori hai
    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("bio", formData.bio);
    data.append("linkedin", formData.linkedin);
    data.append("twitter", formData.twitter);
    data.append("github", formData.github);

    // Agar nayi image hai
    if (imageFile) {
      data.append("image", imageFile);
    }

    try {
      if (editingMember) {
        // --- UPDATE (EDIT) ---
        await axios.put(`${SERVER_URL}/api/team/${editingMember._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Member updated successfully!");
      } else {
        // --- ADD (CREATE) ---
        await axios.post(`${SERVER_URL}/api/team`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Member added successfully!");
      }

      resetForm();
      fetchMembers(); // List ko refresh karein
    } catch (err) {
      console.error("Error submitting form:", err);
      alert(
        `Error saving member: ${err.response?.data?.message || err.message}`
      );
    }
    setLoading(false);
  };

  // 6. (Delete) Member ko delete karna
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await axios.delete(`${SERVER_URL}/api/team/${id}`);
        alert("Member deleted successfully.");
        fetchMembers(); // List ko refresh karein
      } catch (err) {
        console.error("Error deleting member:", err);
        alert(
          `Error deleting member: ${err.response?.data?.message || err.message}`
        );
      }
    }
  };

  // 7. (Edit) Edit button click karne par form bharna
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
    // Image file ko reset karein, user agar chahe toh nayi upload karega
    setImageFile(null);
    // File input ko reset karna (with null check)
    const imageInput = document.getElementById("imageInput");
    if (imageInput) {
      imageInput.value = null;
    }
    window.scrollTo(0, 0); // Page ko upar scroll karein (form tak)
  };

  if (loading && teamMembers.length === 0) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Team Members</h1>

      {/* --- ADD / EDIT FORM --- */}
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
            name="image"
            onChange={handleFileChange}
            accept="image/jpeg,image/png,image/jpg"
            className="w-full p-2 border rounded"
          />
          {editingMember && (
            <small className="text-gray-500 block mt-1">
              Leave blank to keep current image.
            </small>
          )}
          {editingMember && editingMember.image && (
            <img
              src={fixImageUrl(editingMember.image)}
              alt="Current"
              className="mt-2 w-20 h-20 object-cover rounded"
              onError={(e) => {
                e.target.src = "/assets/teams/default-avatar.jpg";
              }}
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">LinkedIn URL</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Twitter URL</label>
            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="https://twitter.com/username"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">GitHub URL</label>
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="https://github.com/username"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
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
              className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* --- EXISTING MEMBERS LIST --- */}
      <h2 className="text-2xl font-semibold mb-4">Current Team</h2>
      {loading && teamMembers.length > 0 && <p>Loading updates...</p>}
      {teamMembers.length === 0 && !loading && (
        <p>No team members yet. Add some!</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={fixImageUrl(member.image)}
              alt={member.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = "/assets/teams/default-avatar.jpg"; // Fallback image
              }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              {member.bio && (
                <p className="text-sm text-gray-500 mt-2">
                  {member.bio.substring(0, 100)}...
                </p>
              )}
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => handleEditClick(member)}
                  className="px-4 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="px-4 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
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
