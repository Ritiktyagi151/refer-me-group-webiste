import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const webinarApi = {
  // ✅ Get all webinars
  getAllWebinars: async () => {
    return await axios.get(`${API_BASE_URL}/webinars/list`);
  },

  // ✅ Get single webinar by ID
  getWebinarById: async (id) => {
    return await axios.get(`${API_BASE_URL}/webinars/list/${id}`);
  },

  // ✅ Add new webinar
  addWebinar: async (data) => {
    return await axios.post(`${API_BASE_URL}/webinars/list`, data);
  },

  // ✅ Update webinar
  updateWebinar: async (id, data) => {
    return await axios.put(`${API_BASE_URL}/webinars/list/${id}`, data);
  },

  // ✅ Delete webinar
  deleteWebinar: async (id) => {
    return await axios.delete(`${API_BASE_URL}/webinars/list/${id}`);
  },
};
