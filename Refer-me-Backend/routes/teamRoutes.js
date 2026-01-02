import express from "express";
import upload from "../middlewares/upload.js"; // Central middleware ka use
import {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
} from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getAllMembers);

// POST: Naya member banana
router.post("/", upload.single("image"), createMember);

// PUT: Member update karna
router.put("/:id", upload.single("image"), updateMember);

router.delete("/:id", deleteMember);

export default router;
