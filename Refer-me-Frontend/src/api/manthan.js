import axios from "axios";

// Base API URL (from .env or fallback)
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/services";

// Create Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Manthan API Endpoints
export const manthanApi = {
  // Fetch upcoming events
  getUpcomingEvents: async () => {
    try {
      const response = await api.get("/manthan/upcoming");
      return response.data;
    } catch (error) {
      console.error("Error fetching upcoming events:", error);
      throw error; // Let the caller handle the error
    }
  },

  // Fetch past events
  getPastEvents: async () => {
    try {
      const response = await api.get("/manthan/past");
      return response.data;
    } catch (error) {
      console.error("Error fetching past events:", error);
      throw error;
    }
  },

  // Register for an upcoming event
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
