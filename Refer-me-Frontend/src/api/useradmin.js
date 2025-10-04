// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://72.60.101.229:5000/api/users",
});

// Register user
export const registerUser = async (userData) => {
  const { data } = await API.post("/register", userData);
  return data;
};

// Login user
export const loginUser = async (userData) => {
  const { data } = await API.post("/login", userData);
  return data;
};
