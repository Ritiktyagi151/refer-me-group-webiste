import CareerGroup from "../models/careerModel.js";

// @desc Get all career groups
// @route GET /api/careers
export const getCareerGroups = async (req, res) => {
  try {
    const groups = await CareerGroup.find();
    res.status(200).json(groups);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching groups", error: error.message });
  }
};

// @desc Create a new career group (Admin only)
// @route POST /api/careers
export const createCareerGroup = async (req, res) => {
  try {
    const { name, description, icon, whatsappLink, whatsappChannel, features } =
      req.body;

    const newGroup = new CareerGroup({
      name,
      description,
      icon,
      whatsappLink,
      whatsappChannel,
      features,
    });

    const savedGroup = await newGroup.save();
    res.status(201).json(savedGroup);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating group", error: error.message });
  }
};

// @desc Update a career group
// @route PUT /api/careers/:id
export const updateCareerGroup = async (req, res) => {
  try {
    const updated = await CareerGroup.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updated) return res.status(404).json({ message: "Group not found" });
    res.status(200).json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating group", error: error.message });
  }
};

// @desc Delete a career group
// @route DELETE /api/careers/:id
export const deleteCareerGroup = async (req, res) => {
  try {
    const deleted = await CareerGroup.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Group not found" });
    res.status(200).json({ message: "Group deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting group", error: error.message });
  }
};
