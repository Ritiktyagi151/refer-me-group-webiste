import mongoose from 'mongoose';

const NavbarSchema = new mongoose.Schema({
    identifier: { type: String, default: 'main_navbar', unique: true },
    contactInfo: {
        phone: String,
        email: String
    },
    socialLinks: [{
        platform: String,
        url: String,
        icon: String
    }],
    menuItems: {
        courses: [{
            id: Number,
            label: String,
            path: String,
            icon: String,
            description: String,
            color: String
        }]
    }
}, { timestamps: true });

// CommonJS hatao aur ye likho:
const Navbar = mongoose.model('Navbar', NavbarSchema);
export default Navbar;