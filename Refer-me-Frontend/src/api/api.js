import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ================= Services =================
export const getServices = () => API.get("/services");

// ================= Webinars =================
export const getWebinars = () => API.get("/services/webinars/list");
export const createWebinar = (data) =>
  API.post("/services/webinars/list", data);
export const updateWebinar = (id, data) =>
  API.put(`/services/webinars/list/${id}`, data);
export const deleteWebinar = (id) =>
  API.delete(`/services/webinars/list/${id}`);

// ================= Manthan Upcoming Events =================
export const getManthans = () => API.get("/services/manthan/upcoming");
export const createManthan = (data) =>
  API.post("/services/manthan/upcoming", data);
export const updateManthan = (id, data) =>
  API.put(`/services/manthan/upcoming/${id}`, data);
export const deleteManthan = (id) =>
  API.delete(`/services/manthan/upcoming/${id}`);
