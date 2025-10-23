import axios from "axios";

// 🌐 Base API URL (from .env or fallback)
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://refermegroup.com/api/services";

// ✅ Create Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// 🧠 Manthan API — All endpoints for events
export const manthanApi = {
  // 🟢 Get Upcoming Events
  getUpcomingEvents: async () => {
    try {
      const response = await api.get("/manthan/upcoming");
      return response.data;
    } catch (error) {
      console.error("Error fetching upcoming events:", error);
      throw error;
    }
  },

  // 🟠 Get Past Events
  getPastEvents: async () => {
    try {
      const response = await api.get("/manthan/past");
      return response.data;
    } catch (error) {
      console.error("Error fetching past events:", error);
      throw error;
    }
  },

  // 🟣 Add New Event (for Admin)
  addEvent: async (formData) => {
    try {
      const response = await api.post("/manthan", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Error adding event:", error);
      throw error;
    }
  },

  // ✏️ Update Event (for Admin)
  updateEvent: async (id, formData) => {
    try {
      const response = await api.put(`/manthan/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating event ${id}:`, error);
      throw error;
    }
  },

  // 🗑 Delete Event (for Admin)
  deleteEvent: async (id) => {
    try {
      const response = await api.delete(`/manthan/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting event ${id}:`, error);
      throw error;
    }
  },

  // 🖼 Upload Image (optional standalone endpoint)
  uploadImage: async (formData) => {
    try {
      const response = await api.post("/manthan/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  },

  // 🟩 Register for Event (user side)
  registerForEvent: async (id, data) => {
    try {
      const response = await api.post(`/manthan/upcoming/${id}/register`, data);
      return response.data;
    } catch (error) {
      console.error(`Error registering for event ${id}:`, error);
      throw error;
    }
  },
};

export default api;
