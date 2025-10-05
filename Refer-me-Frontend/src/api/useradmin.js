// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api/users",
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
