import React, { useState, useEffect } from "react";
import axios from "axios";

// Apne server ka URL yahaan set karein
const SERVER_URL = "http://localhost:5000";

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
      setTeamMembers(res.data);
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
    // File input ko reset karna
    document.getElementById("imageInput").value = null;
  };

  // 5. (Add/Edit) Form Submit karna
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // File upload ke liye FormData zaroori hai
    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("bio", formData.bio);
    data.append("linkedin", formData.linkedin);
    data.append("twitter", formData.twitter);
    data.append("github", formData.github);

    // Agar nayi image hai (ya add kar rahe hain)
    if (imageFile) {
      data.append("image", imageFile);
    }

    try {
      if (editingMember) {
        // --- UPDATE (EDIT) ---
        // Agar image nahi badli, toh bhi update request bhejni hai
        // Backend logic (PUT route) ko check karna hoga ki 'req.file' hai ya nahi
        await axios.put(`${SERVER_URL}/api/team/${editingMember._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Member updated successfully!");
      } else {
        // --- ADD (CREATE) ---
        if (!imageFile) {
          alert("Please select an image for the new member.");
          setLoading(false);
          return;
        }
        await axios.post(`${SERVER_URL}/api/team`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Member added successfully!");
      }

      resetForm();
      fetchMembers(); // List ko refresh karein
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error saving member.");
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
        alert("Error deleting member.");
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
    document.getElementById("imageInput").value = null;
    window.scrollTo(0, 0); // Page ko upar scroll karein (form tak)
  };

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
            className="w-full p-2 border rounded"
          />
          {editingMember && (
            <small className="text-gray-500">
              Leave blank to keep current image.
            </small>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">LinkedIn URL</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Aap Twitter aur Github ke liye bhi inputs add kar sakte hain */}

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
      {loading && <p>Loading members...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={`${SERVER_URL}/${member.image.replace(/\\/g, "/")}`}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
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
