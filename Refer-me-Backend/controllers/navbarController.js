import Navbar from "../models/Navbar.js";

export const getNavbar = async (req, res) => {
  try {
    let navbar = await Navbar.findOne({ identifier: "main_navbar" });
    if (!navbar) {
      navbar = await Navbar.create({ identifier: "main_navbar" });
    }
    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateNavbar = async (req, res) => {
  try {
    const { contactInfo, socialLinks, menuItems } = req.body;
    const updatedNavbar = await Navbar.findOneAndUpdate(
      { identifier: "main_navbar" },
      { contactInfo, socialLinks, menuItems },
      { new: true, upsert: true },
    );
    res.status(200).json(updatedNavbar);
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};
