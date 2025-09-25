import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token

  if (!token) return res.status(401).json({ message: "Not authorized, no token" });

  try {
    const decoded = jwt.verify(token, "secret123");
    req.user = await User.findById(decoded.id).select("-password"); // attach user
    next();
  } catch (error) {
    res.status(401).json({ message: "Token failed" });
  }
};
