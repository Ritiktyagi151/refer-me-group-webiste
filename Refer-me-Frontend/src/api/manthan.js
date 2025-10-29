import axios from "axios";

// 🌐 Base API URL (from .env or fallback)
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://refermegroup.com/api";

// ✅ Create Axios instance (Updated: timeout + auth placeholder)
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${localStorage.getItem('token')}` // Uncomment if JWT needed
  },
  timeout: 10000,  // 10s timeout for slow uploads
});

// 🧠 Manthan API — All endpoints for events
export const manthanApi = {
  // 🟢 Get Upcoming Events (Updated: fallback empty array)
  getUpcomingEvents: async () => {
    try {
      const response = await api.get("/manthan/upcoming");
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error("Error fetching upcoming events:", error);
      return [];  // Fallback to empty
    }
  },

  // 🟠 Get Past Events (Updated: fallback)
  getPastEvents: async () => {
    try {
      const response = await api.get("/manthan/past");
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error("Error fetching past events:", error);
      return [];  // Fallback
    }
  },

  // 🟣 Add New Event (for Admin) — Already good!
  addEvent: async (formData) => {
    try {
      const category = formData.get("category") || "upcoming";
      const response = await api.post(`/manthan/${category}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Error adding event:", error);
      throw error;
    }
  },

  // ✏️ Update Event (for Admin) — Good!
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

  // 🗑 Delete Event (for Admin) — Good!
  deleteEvent: async (id) => {
    try {
      const response = await api.delete(`/manthan/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting event ${id}:`, error);
      throw error;
    }
  },

  // 🖼 Upload Image (optional — Backend में route add करें अगर use करें)
  uploadImage: async (formData) => {
    try {
      // Note: Backend route `/manthan/upload` add करें अगर standalone upload चाहिए
      const response = await api.post("/manthan/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  },

  // 🟩 Register for Event (user side) — Good!
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