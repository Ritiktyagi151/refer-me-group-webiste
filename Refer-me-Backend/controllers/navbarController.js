const Navbar = require("../models/Navbar");

// GET Navbar Data
exports.getNavbar = async (req, res) => {
  try {
    let navbar = await Navbar.findOne({ identifier: "main_navbar" });

    // Agar pehli baar hai aur data nahi hai, toh default empty object bhejenge
    if (!navbar) {
      navbar = await Navbar.create({ identifier: "main_navbar" });
    }

    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// UPDATE Navbar Data (PUT)
exports.updateNavbar = async (req, res) => {
  try {
    const { contactInfo, socialLinks, menuItems } = req.body;

    const updatedNavbar = await Navbar.findOneAndUpdate(
      { identifier: "main_navbar" },
      {
        contactInfo,
        socialLinks,
        menuItems,
      },
      { new: true, upsert: true }, // upsert true matlab agar nahi hai toh bana dega
    );

    res.status(200).json(updatedNavbar);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update navbar", error: error.message });
  }
};
