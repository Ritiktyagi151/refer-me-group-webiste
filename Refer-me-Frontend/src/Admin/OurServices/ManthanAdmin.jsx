import React, { useEffect, useState } from "react";
import { manthanApi } from "../../api/manthan";  // Updated import

// ✅ BACKEND_URL for image preview/display
const BACKEND_URL = "http://localhost:5000";

const ManthanAdmin = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    category: "upcoming",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);

  // Fetch events
  const fetchEvents = async () => {
    try {
      const [upcomingRes, pastRes] = await Promise.all([
        manthanApi.getUpcomingEvents(),
        manthanApi.getPastEvents(),
      ]);
      setUpcomingEvents(Array.isArray(upcomingRes) ? upcomingRes : []);
      setPastEvents(Array.isArray(pastRes) ? pastRes : []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
      if (files[0]) {
        setPreview(URL.createObjectURL(files[0]));
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Submit (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("date", form.date);
    formData.append("time", form.time);
    formData.append("location", form.location);
    formData.append("description", form.description);
    formData.append("category", form.category);
    if (form.image) formData.append("image", form.image);

    try {
      if (editingEvent) {
        await manthanApi.updateEvent(editingEvent._id, formData);
      } else {
        await manthanApi.addEvent(formData);
      }
      await fetchEvents();
      resetForm();
    } catch (error) {
      console.error("Error saving event:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete event
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await manthanApi.deleteEvent(id);
      await fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  // Edit event
  const handleEdit = (event) => {
    setEditingEvent(event);
    setForm({
      title: event.title,
      date: event.date,
      time: event.time || "",
      location: event.location || "",
      description: event.description,
      category: event.category,
      image: null,
    });
    setPreview(event.image ? `${BACKEND_URL}${event.image}` : null);
  };

  // Reset form (Updated: revokeObjectURL for memory)
  const resetForm = () => {
    if (preview) URL.revokeObjectURL(preview);  // Memory leak fix
    setForm({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      category: "upcoming",
      image: null,
    });
    setPreview(null);
    setEditingEvent(null);
  };

  if (loading) {
    return <div className="p-6 max-w-6xl mx-auto">Loading events...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Manthan Admin Panel</h1>

      {/* FORM SECTION */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-2xl space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={form.title}
            onChange={handleChange}
            required
            className="border p-2 rounded-md w-full"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="border p-2 rounded-md w-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="time"
            name="time"
            placeholder="Event Time"
            value={form.time}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={form.location}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
          />
        </div>

        <textarea
          name="description"
          placeholder="Event Description"
          value={form.description}
          onChange={handleChange}
          required
          rows="3"
          className="border p-2 rounded-md w-full"
        />

        <div className="flex items-center gap-4">
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded-md"
          >
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-40 h-40 object-cover rounded-md border"
          />
        )}

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {loading
              ? "Saving..."
              : editingEvent
              ? "Update Event"
              : "Add Event"}
          </button>
          {editingEvent && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* DISPLAY SECTION */}
      <div className="mt-10 space-y-8">
        {/* UPCOMING */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={event._id || `upcoming-${index}`}
                className="bg-white p-4 shadow-md rounded-xl relative"
              >
                <img
                  src={event.image ? `${BACKEND_URL}${event.image}` : '/placeholder.jpg'}  // ✅ Fallback
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => { e.target.src = '/placeholder.jpg'; }}  // Error fallback
                />
                <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
                <p className="text-sm text-gray-600">
                  {event.date} • {event.time}
                </p>
                <p className="text-sm text-gray-500">{event.location}</p>
                <p className="text-gray-700 text-sm mt-2">
                  {event.description}
                </p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(event)}
                    className="text-blue-600 font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-red-600 font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PAST */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event, index) => (
              <div
                key={event._id || `past-${index}`}
                className="bg-white p-4 shadow-md rounded-xl relative"
              >
                <img
                  src={event.image ? `${BACKEND_URL}${event.image}` : '/placeholder.jpg'}  // ✅ Fallback
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => { e.target.src = '/placeholder.jpg'; }}  // Error fallback
                />
                <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
                <p className="text-sm text-gray-600">
                  {event.date} • {event.time}
                </p>
                <p className="text-sm text-gray-500">{event.location}</p>
                <p className="text-gray-700 text-sm mt-2">
                  {event.description}
                </p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(event)}
                    className="text-blue-600 font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-red-600 font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManthanAdmin;