import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaPhoneAlt,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaLaptopCode,
  FaChartBar,
  FaBrain,
  FaCogs,
  FaLayerGroup,
  FaDatabase,
  FaCodeBranch,
  FaRobot,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaLink,
  FaUserTie,
  FaChartLine,
  FaTasks,
  FaHashtag,
  FaBoxOpen,
  FaCloud,
  FaBolt,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaMicrosoft,
  FaCode,
  FaJava,
  FaNetworkWired,
  FaBug,
  FaLaptop,
  FaServer,
  FaArrowRight,
  FaBook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

// Icon components mapping - Backend se aane wale string name ko Icon banane ke liye
const iconComponents = {
  FaSearch: <FaSearch />,
  FaPhoneAlt: <FaPhoneAlt />,
  FaBars: <FaBars />,
  FaFacebook: <FaFacebook />,
  FaInstagram: <FaInstagram />,
  FaLinkedin: <FaLinkedin />,
  FaTwitter: <FaTwitter />,
  FaYoutube: <FaYoutube />,
  FaWhatsapp: <FaWhatsapp />,
  FaLaptopCode: <FaLaptopCode />,
  FaChartBar: <FaChartBar />,
  FaBrain: <FaBrain />,
  FaCogs: <FaCogs />,
  FaLayerGroup: <FaLayerGroup />,
  FaDatabase: <FaDatabase />,
  FaCodeBranch: <FaCodeBranch />,
  FaRobot: <FaRobot />,
  FaTimes: <FaTimes />,
  FaChevronDown: <FaChevronDown />,
  FaChevronUp: <FaChevronUp />,
  FaEnvelope: <FaEnvelope />,
  FaLink: <FaLink />,
  FaUserTie: <FaUserTie />,
  FaChartLine: <FaChartLine />,
  FaTasks: <FaTasks />,
  FaHashtag: <FaHashtag />,
  FaBoxOpen: <FaBoxOpen />,
  FaCloud: <FaCloud />,
  FaBolt: <FaBolt />,
  FaProjectDiagram: <FaProjectDiagram />,
  FaMoneyBillWave: <FaMoneyBillWave />,
  FaMicrosoft: <FaMicrosoft />,
  FaCode: <FaCode />,
  FaJava: <FaJava />,
  FaNetworkWired: <FaNetworkWired />,
  FaBug: <FaBug />,
  FaLaptop: <FaLaptop />,
  FaServer: <FaServer />,
  FaArrowRight: <FaArrowRight />,
  FaBook: <FaBook />,
  FaXTwitter: <FaXTwitter />,
};

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // API States
  const [courses, setCourses] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [contactInfo, setContactInfo] = useState({ phone: "", email: "" });

  const searchContainerRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Fetch data from Navbar API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://refermegroup.com/api/navbar");
        const data = await response.json();
        if (data) {
          if (data.menuItems?.courses) setCourses(data.menuItems.courses);
          if (data.socialLinks) setSocialLinks(data.socialLinks);
          if (data.contactInfo) setContactInfo(data.contactInfo);
        }
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const aboutMenuItems = [
    { key: "1", label: "Our Story", path: "/about/history" },
    { key: "2", label: "Core Committee", path: "/about/team" },
    { key: "4", label: "Our Payment Policy", path: "/about/paymentpolicy" },
    { key: "5", label: "What we do", path: "/about/whatwedo" },
  ];

  const servicesMenuItems = [
    { key: "1", label: "Webinars", path: "/services/webinars" },
    { key: "4", label: "Manthan", path: "/services/manthan" },
    {
      key: "2",
      label: "Partnership Programs",
      path: "/services/partnership-programs",
    },
    { key: "3", label: "Freelancing", path: "/services/freelancing" },
  ];

  const filteredCourses = courses.filter(
    (item) =>
      item.label?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setIsSearchOpen(e.target.value.length > 0);
  };

  const handleCourseClick = (path, e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSearchOpen(false);
    setSearchTerm("");
    setSidebarOpen(false);
    setIsCoursesOpen(false);
    navigate(path);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target) &&
        (!dropdownRef.current || !dropdownRef.current.contains(event.target))
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        className="w-full bg-white shadow-sm"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255, 0.9), rgba(255,255, 255, 0.9)), url('/assets/bg-img/books.jpg')`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-8">
              <Link to="/">
                <img
                  src="/assets/logo/rmg-logo.png"
                  className="h-10"
                  alt="RMG Logo"
                />
              </Link>
              <div
                className="relative hidden lg:block w-[400px]"
                ref={searchContainerRef}
              >
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="w-full px-5 py-2 rounded-full border border-gray-300 focus:border-yellow-400 outline-none transition-all duration-300"
                  value={searchTerm}
                  onChange={handleSearch}
                  onFocus={() => setIsSearchOpen(searchTerm.length > 0)}
                />
                <FaSearch className="absolute right-4 top-3 text-gray-400" />
                {isSearchOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 mt-1 w-full bg-white rounded-lg shadow-xl border border-gray-100 z-[60] max-h-60 overflow-y-auto"
                  >
                    {filteredCourses.length === 0 ? (
                      <div className="p-4 text-gray-500">No courses found</div>
                    ) : (
                      filteredCourses.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 cursor-pointer"
                          onClick={(e) => handleCourseClick(item.path, e)}
                        >
                          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                            {iconComponents[item.icon] || <FaBook />}
                          </div>
                          <div>
                            <div className="font-medium">{item.label}</div>
                            <div className="text-xs text-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FaPhoneAlt className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">24/7 Support</p>
                  <p className="text-sm font-medium">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FaEnvelope className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <p className="text-sm font-medium">{contactInfo.email}</p>
                </div>
              </div>
            </div>

            <button
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-600 border-y hidden md:block sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-1">
              <div className="dropdown relative">
                <button
                  className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-full font-medium hover:shadow-md transition-all duration-300 focus:outline-none border border-blue-100"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                >
                  <FaBars className="text-lg" />
                  <span>All Courses</span>
                  <FaChevronDown
                    className={`text-xs mt-0.5 transition-transform ${isCoursesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isCoursesOpen && (
                  <div
                    className="absolute left-0 mt-1 w-[90vw] max-w-[1200px] bg-white rounded-lg shadow-xl border border-gray-100 z-50"
                    onMouseEnter={() => setIsCoursesOpen(true)}
                    onMouseLeave={() => setIsCoursesOpen(false)}
                  >
                    <div className="p-5 max-h-[70vh] overflow-y-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-800">
                        {courses.map((item) => (
                          <Link
                            key={item.id}
                            to={item.path}
                            className="flex items-center gap-3 px-3 py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                            onClick={() => setIsCoursesOpen(false)}
                          >
                            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                              {iconComponents[item.icon] || <FaBook />}
                            </div>
                            <div>
                              <div className="font-medium text-sm">
                                {item.label}
                              </div>
                              {item.description && (
                                <div className="text-[10px] text-gray-500 mt-1 leading-tight">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <nav className="flex ml-6 gap-1">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                >
                  Home
                </Link>
                <div className="dropdown">
                  <Link
                    to="/about"
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                  >
                    About Us <FaChevronDown className="text-xs mt-0.5" />
                  </Link>
                  <div className="dropdown-menu rounded-lg shadow-lg bg-white">
                    {aboutMenuItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.path}
                        className="dropdown-item flex items-center gap-2 px-3 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="dropdown">
                  <p className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors cursor-pointer">
                    Our Services <FaChevronDown className="text-xs mt-0.5" />
                  </p>
                  <div className="dropdown-menu rounded-lg shadow-lg bg-white">
                    {servicesMenuItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.path}
                        className="dropdown-item flex items-center gap-2 px-3 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to="/blogs"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                >
                  Our Blogs
                </Link>
                <Link
                  to="/job-group"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                >
                  Job Groups
                </Link>
                <Link
                  to="/career-counsling"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                >
                  Career counselling
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              {socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity"
                >
                  {iconComponents[link.icon] || <FaHashtag />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-[100] shadow-xl transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white z-10">
          <img src="/assets/logo/rmg-logo.png" className="h-8" alt="RMG Logo" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-yellow-600 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-100px)]">
          <nav className="flex flex-col py-2">
            <Link
              to="/"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors"
                onClick={() => toggleMobileDropdown("courses")}
              >
                <span className="font-medium">All Courses</span>
                {openMobileDropdown === "courses" ? (
                  <FaChevronUp className="text-xs text-gray-500" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" />
                )}
              </button>
              {openMobileDropdown === "courses" && (
                <div className="ml-6 py-1 space-y-1">
                  {courses.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="block px-3 py-2 text-sm rounded hover:bg-yellow-50 transition-colors"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* ... other items remain same ... */}
            <Link
              to="/contact"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t flex justify-center gap-3">
          {socialLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.url}
              target="_blank"
              className="bg-blue-600 p-1.5 text-sm rounded-full text-white"
            >
              {iconComponents[link.icon] || <FaHashtag />}
            </Link>
          ))}
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[90]"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
