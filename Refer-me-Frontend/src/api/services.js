// api/services.js
import axios from "axios";

// Base API URL (Vite uses import.meta.env instead of process.env)
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

//
// ✅ Webinar API functions
//

//
// ✅ Manthan Events API functions
//
export const manthanApi = {
  getUpcomingEvents: () => api.get("/services/manthan/upcoming"),
  getPastEvents: () => api.get("/services/manthan/past"),

  createUpcomingEvent: (eventData) =>
    api.post("/services/manthan/upcoming", eventData),
  updateUpcomingEvent: (id, eventData) =>
    api.put(`/services/manthan/upcoming/${id}`, eventData),
  deleteUpcomingEvent: (id) => api.delete(`/services/manthan/upcoming/${id}`),

  createPastEvent: (eventData) => api.post("/services/manthan/past", eventData),
  updatePastEvent: (id, eventData) =>
    api.put(`/services/manthan/past/${id}`, eventData),
  deletePastEvent: (id) => api.delete(`/services/manthan/past/${id}`),
};

//
// ✅ General Services API functions
//
export const servicesApi = {
  getServices: () => api.get("/services"),
  upsertManthan: (manthanData) => api.post("/services/manthan", manthanData),
};

// Export the axios instance for custom requests
export default api;
