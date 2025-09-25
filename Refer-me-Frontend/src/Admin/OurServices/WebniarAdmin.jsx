// components/WebinarAdmin.js
import { useState, useEffect } from "react";
import { webinarApi } from "../../api/webinarApi"; // ✅ Correct import
import { FaSave, FaTrash, FaEdit, FaTimes } from "react-icons/fa";

const WebinarAdmin = () => {
  const [webinars, setWebinars] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    speaker: "",
    link: "",
    timezone: "IST",
    duration: 60,
    category: "",
    price: 0,
    featured: false,
    live: false,
    registered: 0,
    rating: 0,
    startsIn: "",
  });

  useEffect(() => {
    fetchWebinars();
  }, []);

  const fetchWebinars = async () => {
    try {
      setLoading(true);
      const response = await webinarApi.getAllWebinars();
      setWebinars(response.data || []);
      setError("");
    } catch (err) {
      console.error("Error fetching webinars:", err);
      setError("Failed to fetch webinars. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      speaker: "",
      link: "",
      timezone: "IST",
      duration: 60,
      category: "",
      price: 0,
      featured: false,
      live: false,
      registered: 0,
      rating: 0,
      startsIn: "",
    });
    setEditingId(null);
    setError("");
    setSuccess("");
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      if (editingId) {
        await webinarApi.updateWebinar(editingId, formData);
        setSuccess("Webinar updated successfully!");
      } else {
        await webinarApi.addWebinar(formData); // ✅ Fixed: was createWebinar
        setSuccess("Webinar created successfully!");
      }
      resetForm();
      fetchWebinars();
    } catch (err) {
      console.error("Error saving webinar:", err.response?.data || err.message);
      setError("Failed to save webinar. Please check required fields.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (webinar) => {
    setFormData({
      title: webinar.title || "",
      description: webinar.description || "",
      date: webinar.date ? webinar.date.split("T")[0] : "", // ✅ Fix date format
      time: webinar.time || "",
      speaker: webinar.speaker || "",
      link: webinar.link || "",
      timezone: webinar.timezone || "IST",
      duration: webinar.duration || 60,
      category: webinar.category || "",
      price: webinar.price || 0,
      featured: webinar.featured || false,
      live: webinar.live || false,
      registered: webinar.registered || 0,
      rating: webinar.rating || 0,
      startsIn: webinar.startsIn || "",
    });
    setEditingId(webinar._id);
    setError("");
    setSuccess("");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this webinar?")) {
      try {
        setLoading(true);
        await webinarApi.deleteWebinar(id);
        setSuccess("Webinar deleted successfully!");
        fetchWebinars();
      } catch (err) {
        console.error("Error deleting webinar:", err);
        setError("Failed to delete webinar. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Webinar Admin Panel</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">
          {editingId ? "Edit Webinar" : "Add Webinar"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { field: "title", type: "text" },
            { field: "speaker", type: "text" },
            { field: "date", type: "date" },
            { field: "time", type: "time" },
            { field: "link", type: "url" },
            { field: "timezone", type: "text" },
            { field: "duration", type: "number" },
            { field: "category", type: "text" },
            { field: "price", type: "number" },
            { field: "registered", type: "number" },
            {
              field: "rating",
              type: "number",
              step: "0.1",
              min: "0",
              max: "5",
            },
            { field: "startsIn", type: "text" },
          ].map(({ field, type, ...props }) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={type}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                {...props}
              />
            </div>
          ))}

          <div className="md:col-span-2 flex space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                Featured
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="live"
                name="live"
                checked={formData.live}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="live" className="ml-2 text-sm text-gray-700">
                Live
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              rows="4"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={handleSave}
            disabled={loading}
            className={`flex items-center gap-2 px-4 py-2 rounded text-white ${
              editingId
                ? "bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-400"
                : "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400"
            }`}
          >
            <FaSave /> {editingId ? "Update Webinar" : "Save Webinar"}
          </button>
          {editingId && (
            <button
              onClick={resetForm}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-400"
            >
              <FaTimes /> Cancel
            </button>
          )}
        </div>
      </div>

      {/* Webinar List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">All Webinars</h3>
        {loading ? (
          <p className="text-gray-500">Loading webinars...</p>
        ) : webinars.length === 0 ? (
          <p className="text-gray-500">No webinars found.</p>
        ) : (
          <ul className="space-y-4">
            {webinars.map((webinar) => (
              <li
                key={webinar._id}
                className="flex flex-col md:flex-row md:items-center justify-between border p-4 rounded"
              >
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{webinar.title}</h4>
                  <p className="text-sm text-gray-600">
                    {webinar.speaker} •{" "}
                    {new Date(webinar.date).toLocaleDateString()} •{" "}
                    {webinar.time} ({webinar.timezone})
                  </p>
                  <p className="text-gray-700">{webinar.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-gray-500 text-sm">
                      Duration: {webinar.duration} mins
                    </span>
                    <span className="text-gray-500 text-sm">
                      | Category: {webinar.category || "General"}
                    </span>
                    <span className="text-gray-500 text-sm">
                      | Price: ₹{webinar.price}
                    </span>
                    {webinar.featured && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                    {webinar.live && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                        Live
                      </span>
                    )}
                  </div>
                  {webinar.link && (
                    <a
                      href={webinar.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm block mt-1"
                    >
                      Join Webinar
                    </a>
                  )}
                </div>
                <div className="flex gap-3 mt-3 md:mt-0">
                  <button
                    onClick={() => handleEdit(webinar)}
                    className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(webinar._id)}
                    className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WebinarAdmin;
