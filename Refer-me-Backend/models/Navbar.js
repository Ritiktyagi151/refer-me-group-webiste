const mongoose = require('mongoose');

const NavbarSchema = new mongoose.Schema({
    // Isse hum verify karenge ki hum hamesha ek hi doc update karein
    identifier: { type: String, default: 'main_navbar', unique: true },
    contactInfo: {
        phone: String,
        email: String
    },
    socialLinks: [{
        platform: String,
        url: String
    }],
    menuItems: {
        courses: [{
            id: Number,
            label: String,
            path: String,
            icon: String,
            description: String,
            color: { type: String, default: 'blue' }
        }]
    }
}, { timestamps: true });

module.exports = mongoose.model('Navbar', NavbarSchema);