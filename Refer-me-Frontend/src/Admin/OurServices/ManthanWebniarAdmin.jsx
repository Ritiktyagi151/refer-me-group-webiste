import { useState, useEffect } from "react";
import { manthanApi } from "../../api/services";
import { FaSave, FaTrash, FaEdit, FaTimes } from "react-icons/fa";

const ManthanAdmin = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
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
    image: "", // This will store image URL or Base64
    location: "Virtual",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const [upcomingRes, pastRes] = await Promise.all([
        manthanApi.getUpcomingEvents(),
        manthanApi.getPastEvents(),
      ]);
      setUpcomingEvents(upcomingRes.data || []);
      setPastEvents(pastRes.data || []);
    } catch (err) {
      console.error("Error fetching events:", err);
      alert("Error fetching events");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file); // convert to Base64
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
      image: "",
      location: "Virtual",
    });
    setEditingEvent(null);
  };

  const handleSave = async () => {
    try {
      if (editingEvent) {
        if (editingEvent.isPast) {
          await manthanApi.updatePastEvent(editingEvent.id, formData);
        } else {
          await manthanApi.updateUpcomingEvent(editingEvent.id, formData);
        }
      } else {
        const eventDate = new Date(formData.date);
        const isPast = eventDate < new Date();
        if (isPast) {
          await manthanApi.addPastEvent(formData);
        } else {
          await manthanApi.addUpcomingEvent(formData);
        }
      }
      resetForm();
      fetchEvents();
    } catch (err) {
      console.error("Error saving event:", err);
      alert("Error saving event");
    }
  };

  const handleEdit = (event, isPast = false) => {
    setFormData(event);
    setEditingEvent({ id: event._id, isPast });
  };

  const handleDelete = async (id, isPast = false) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        if (isPast) {
          await manthanApi.deletePastEvent(id);
        } else {
          await manthanApi.deleteUpcomingEvent(id);
        }
        fetchEvents();
      } catch (err) {
        console.error("Error deleting event:", err);
        alert("Error deleting event");
      }
    }
  };

  const renderEventList = (events, isPast = false) => {
    if (!events.length)
      return <p className="text-gray-500 py-4 text-center">No events found.</p>;
    return events.map((event) => (
      <li
        key={event._id}
        className="flex flex-col md:flex-row md:items-center justify-between border p-4 rounded"
      >
        <div className="flex-1">
          <h4 className="font-bold text-lg">{event.title}</h4>
          {event.image && (
            <img
              src={event.image}
              alt={event.title}
              className="w-48 h-28 object-cover rounded mt-2"
            />
          )}
          <p className="text-sm text-gray-600">
            {event.speaker} • {new Date(event.date).toLocaleDateString()} •{" "}
            {event.time} ({event.timezone}) • {event.location}
          </p>
          <p className="text-gray-700 mt-2">{event.description}</p>
          <p className="text-gray-500 text-sm mt-2">
            Duration: {event.duration} mins | Category:{" "}
            {event.category || "General"}
          </p>
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-1 inline-block"
            >
              Join Event
            </a>
          )}
        </div>
        <div className="flex gap-3 mt-3 md:mt-0">
          <button
            onClick={() => handleEdit(event, isPast)}
            className="flex items-center gap-1 px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            <FaEdit /> Edit
          </button>
          <button
            onClick={() => handleDelete(event._id, isPast)}
            className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            <FaTrash /> Delete
          </button>
        </div>
      </li>
    ));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Manthan Admin Panel</h2>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">
          {editingEvent ? "Edit Event" : "Add Event"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "title",
            "speaker",
            "date",
            "time",
            "link",
            "timezone",
            "duration",
            "category",
            "location",
          ].map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-sm font-medium mb-1 capitalize">
                {field}
              </label>
              <input
                type={
                  field === "date"
                    ? "date"
                    : field === "time"
                    ? "time"
                    : field === "link"
                    ? "url"
                    : field === "duration"
                    ? "number"
                    : "text"
                }
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="p-2 border rounded"
              />
            </div>
          ))}

          {/* Image Upload */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="w-32 h-20 mt-2 object-cover rounded"
              />
            )}
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border rounded"
              rows="4"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 rounded text-white ${
              editingEvent
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <FaSave /> {editingEvent ? "Update" : "Save"}
          </button>
          {editingEvent && (
            <button
              onClick={resetForm}
              className="flex items-center gap-2 px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
            >
              <FaTimes /> Cancel
            </button>
          )}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
        <ul className="space-y-4">
          {loading ? "Loading..." : renderEventList(upcomingEvents)}
        </ul>
      </div>

      {/* Past Events */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Past Events</h3>
        <ul className="space-y-4">
          {loading ? "Loading..." : renderEventList(pastEvents, true)}
        </ul>
      </div>
    </div>
  );
};

export default ManthanAdmin;
