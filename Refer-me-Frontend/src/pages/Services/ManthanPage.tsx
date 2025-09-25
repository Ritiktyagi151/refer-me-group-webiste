import { useState, useEffect } from "react";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { manthanApi } from "../../api/manthan"; // ✅ import API
import axios from "axios";

const ManthanPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const [upcoming, past] = await Promise.all([
          manthanApi.getUpcomingEvents(),
          manthanApi.getPastEvents(),
        ]);
        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (error) {
        toast.error("⚠️ Failed to load events.", { position: "top-center" });
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form to FormSubmit.co
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please fill all required fields.", {
        position: "top-center",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://formsubmit.co/ajax/your@email.com",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("✅ Registration successful!", {
          position: "top-center",
        });
        setFormData({ name: "", email: "", phone: "" });
      } else {
        toast.error("❌ Registration failed. Try again.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Submission failed. Try again later.", {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openEventModal = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const closeEventModal = () => {
    setShowEventModal(false);
    setSelectedEvent(null);
  };

  const handleRegisterFromModal = () => {
    closeEventModal();
    document
      .getElementById("registration-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <ToastContainer />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-20 text-gray-600">
            Loading events...
          </div>
        ) : (
          <>
            {/* Events Section */}
            <div className="max-w-6xl mx-auto mb-20">
              {/* Upcoming Events */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <FiCalendar className="text-indigo-600 mr-3" /> Upcoming
                  Events
                </h2>
                {upcomingEvents.length === 0 ? (
                  <p className="text-gray-500">No upcoming events.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingEvents.map((event) => (
                      <motion.div
                        key={event._id}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {event.title}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <FiClock className="mr-2" />
                            <span>
                              {event.date} • {event.time}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-600 mb-4">
                            <FiMapPin className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {event.description}
                          </p>
                          <button
                            onClick={() => openEventModal(event)}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition"
                          >
                            View Details
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Past Events */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <FiCalendar className="text-indigo-600 mr-3" /> Past Events
                </h2>
                {pastEvents.length === 0 ? (
                  <p className="text-gray-500">No past events.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pastEvents.map((event) => (
                      <motion.div
                        key={event._id}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Completed
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {event.title}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <FiClock className="mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mb-4">
                            <FiMapPin className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {event.description}
                          </p>
                          <button
                            onClick={() => openEventModal(event)}
                            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition"
                          >
                            View Details
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Event Details Modal */}
      {showEventModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            <div className="flex justify-between mb-6 text-sm text-gray-600">
              <span>
                {selectedEvent.date} • {selectedEvent.time}
              </span>
              <span>{selectedEvent.location}</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleRegisterFromModal}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
              >
                Register
              </button>
              <button
                onClick={closeEventModal}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Registration Form */}
      <div
        id="registration-form"
        className="bg-white max-w-lg mx-auto p-6 rounded-xl shadow mt-10"
      >
        <h3 className="text-2xl font-bold mb-4">Register for Manthan</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManthanPage;
