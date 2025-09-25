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
import { Link, Links, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login success/failure here
    }, 1500);
  };
  const categoriesMenuItems = [
    {
      key: "1",
      label: "Data Science Course",
      path: "/courses/data-science",
      icon: <FaLaptopCode className="text-orange-500" />,
      description: "Master data analysis and visualization",
    },
    {
      key: "2",
      label: "AI for Leaders",
      path: "/courses/ai-for-leaders",
      icon: <FaLaptopCode className="text-orange-500" />,
      description: "Master AI leadership skills",
    },
    {
      key: "3",
      label: "Advanced Data Science Course",
      path: "/courses/advanced-data-science",
      icon: <FaLaptopCode className="text-orange-500" />,
      description: "Advanced techniques in data science",
    },
    {
      key: "4",
      label: "Tosca Automation",
      path: "/courses/tosca-automation",
      icon: <FaRobot className="text-purple-500" />,
      description: "Automation testing with Tosca",
    },
    {
      key: "5",
      label: "Business Analyst Course",
      path: "/courses/business-analyst",
      icon: <FaChartLine className="text-green-500" />,
      description: "Become a certified business analyst",
    },
    {
      key: "21",
      label: "Business Analyst With Tools Course",
      path: "/courses/business-analyst-tools",
      icon: <FaChartLine className="text-green-500" />,
      description: "Become a certified business analyst",
    },
    {
      key: "6",
      label: "Program Manager Course",
      path: "/courses/program-manager",
      icon: <FaTasks className="text-indigo-500" />,
      description: "Advanced program management",
    },
    {
      key: "7",
      label: "Digital Marketing Course",
      path: "/courses/digital-marketing",
      icon: <FaHashtag className="text-red-500" />,
      description: "Master digital marketing strategies",
    },
    {
      key: "8",
      label: "AI Automation Course",
      path: "/courses/ai-automation",
      icon: <FaBrain className="text-teal-500" />,
      description: "AI-powered automation solutions",
    },
    {
      key: "9",
      label: "Product Management Course",
      path: "/courses/product-management",
      icon: <FaBoxOpen className="text-yellow-500" />,
      description: "From ideation to launch",
    },
    {
      key: "10",
      label: "Advanced Automation Course",
      path: "/courses/advance-automation",
      icon: <FaCogs className="text-blue-500" />,
      description: "Next-level automation techniques",
    },
    {
      key: "12",
      label: "Power Automate Course",
      path: "/courses/power-automate",
      icon: <FaBolt className="text-purple-500" />,
      description: "Microsoft Power Automate training",
    },
    {
      key: "13",
      label: "UiPath Course",
      path: "/courses/uipath",
      icon: <FaRobot className="text-blue-600" />,
      description: "RPA development with UiPath",
    },
    {
      key: "14",
      label: "Agile Project Manager Course",
      path: "/courses/agile-project-manager",
      icon: <FaProjectDiagram className="text-green-600" />,
      description: "Agile methodologies and practices",
    },
    {
      key: "15",
      label: "Capital Market Course",
      path: "/courses/capital-market",
      icon: <FaMoneyBillWave className="text-green-500" />,
      description: "Financial markets and instruments",
    },
    {
      key: "16",
      label: "Cloud Engg. Azure DevOps",
      path: "/courses/cloud-engineering-azure-devops",
      icon: <FaMicrosoft className="text-blue-500" />,
      description: "Azure cloud and DevOps integration",
    },
    {
      key: "17",
      label: "Selenium Using AI Course",
      path: "/courses/selenium-ai",
      icon: <FaCode className="text-red-500" />,
      description: "AI-enhanced test automation",
    },
    {
      key: "18",
      label: "Core Java Course",
      path: "/courses/core-java",
      icon: <FaJava className="text-red-400" />,
      description: "Fundamentals of Java programming",
    },
    {
      key: "19",
      label: "API Automation with AI Integration Course",
      path: "/courses/api-automation-ai",
      icon: <FaNetworkWired className="text-purple-500" />,
      description: "Automated API testing",
    },
    {
      key: "20",
      label: "Cypress with TypeScript and AI-Driven Framework",
      path: "/courses/cypress-typescript-ai",
      icon: <FaBug className="text-green-500" />,
      description: "Modern testing framework",
    },
    {
      key: "22",
      label: "Cloud Engineering with AWS DevOps",
      path: "/courses/cloud-engineering-aws-devops",
      icon: <FaChartBar className="text-orange-500" />,
      description: "Master AWS cloud infrastructure and DevOps tools",
    },
  ];

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

  const filteredCourses = categoriesMenuItems.filter(
    (item) =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setIsSearchOpen(e.target.value.length > 0);
  };

  const handleCourseClick = (path, e) => {
    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Stop event bubbling
    setIsSearchOpen(false);
    setSearchTerm("");
    setSidebarOpen(false);
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="w-full bg-white shadow-sm"
        style={{
          backgroundImage: `
         linear-gradient(to right, rgba(255,255,255, 0.9), rgba(255,255, 255, 0.9)),
         url('/assets/bg-img/books.jpg')
       `,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-8">
              <img
                src="/assets/logo/rmg-logo.png"
                className="h-10"
                alt="RMG Logo"
              />
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
                        <Link
                          key={item.key}
                          to={item.path}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 cursor-pointer"
                          onClick={(e) => handleCourseClick(item.path, e)}
                        >
                          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                            {item.icon}
                          </div>
                          <div>
                            <div className="font-medium">{item.label}</div>
                            <div className="text-xs text-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </Link>
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
                  <p className="text-sm font-medium">+91 76785 73511</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FaEnvelope className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <p className="text-sm font-medium">
                    contact@refermegroup.com
                  </p>
                </div>
              </div>
              {/* 
            <button
      onClick={handleLogin}
      disabled={isLoading}
      className={`
        w-full py-3 px-4 rounded-lg font-medium text-white
        bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:ring-offset-2 transition-colors
        disabled:opacity-70 disabled:cursor-not-allowed
        flex items-center justify-center
      `}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Logging in...
        </>
      ) : (
        'Login'
      )}
    </button> */}
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
                    className={`text-xs mt-0.5 transition-transform ${
                      isCoursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isCoursesOpen && (
                  <div
                    className="absolute left-0 mt-1 w-[1420px] bg-white rounded-lg shadow-xl border border-gray-100 z-50"
                    onMouseEnter={() => setIsCoursesOpen(true)}
                    onMouseLeave={() => setIsCoursesOpen(false)}
                  >
                    <div className="p-5">
                      <div className="grid grid-cols-4 gap-4">
                        {categoriesMenuItems.map((item) => (
                          <Link
                            key={item.key}
                            to={item.path}
                            className="flex items-center gap-3 px-3 py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                          >
                            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium">{item.label}</div>
                              {item.description && (
                                <div className="text-xs text-gray-500 mt-1">
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
                    About Us
                    <FaChevronDown className="text-xs mt-0.5" />
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
                  <Link
                    to="/services"
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                  >
                    Our Services
                    <FaChevronDown className="text-xs mt-0.5" />
                  </Link>
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
                  to="/career"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                >
                  Job Groups
                </Link>
                <Link
                  to="/career-counsling"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors"
                >
                  Carrer counslering
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
              <Link
                to="https://www.facebook.com/refermegroup.qa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity"
              >
                <FaFacebook />
              </Link>

              <Link
                to="https://www.instagram.com/refermegroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity"
              >
                <FaInstagram />
              </Link>

              <Link
                to="https://www.linkedin.com/company/refermegroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity"
              >
                <FaLinkedin />
              </Link>

              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity"
              >
                <FaTwitter />
              </Link>

              <Link
                to="https://www.youtube.com/@ReferMeGroupQA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full text-white hover:opacity-90 transition-opacity"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
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
        {/* 
        <div className="p-4 border-b">
          <div className="relative" ref={searchContainerRef}>
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:border-yellow-400 outline-none"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => setIsSearchOpen(searchTerm.length > 0)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
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
                      key={item.key}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 cursor-pointer"
                      onClick={(e) => handleCourseClick(item.path, e)}
                    >
                      <div className="bg-blue-50 p-2 rounded-lg text-blue-600">{item.icon}</div>
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div> */}

        <div className="overflow-y-scroll h-[calc(100%-100px)]">
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
                  {categoriesMenuItems.map((item) => (
                    <Link
                      key={item.key}
                      to={item.path}
                      className="block px-1 py-1 text-sm rounded hover:bg-yellow-50 flex items-center gap-2 transition-colors"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors"
                onClick={() => toggleMobileDropdown("about")}
              >
                <span className="font-medium">About Us</span>
                {openMobileDropdown === "about" ? (
                  <FaChevronUp className="text-xs text-gray-500" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" />
                )}
              </button>
              {openMobileDropdown === "about" && (
                <div className="ml-6 py-1 space-y-1">
                  {aboutMenuItems.map((item) => (
                    <Link
                      key={item.key}
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
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-5 py-3 text-left hover:bg-yellow-50 transition-colors"
                onClick={() => toggleMobileDropdown("services")}
              >
                <span className="font-medium">Our Services</span>
                {openMobileDropdown === "services" ? (
                  <FaChevronUp className="text-xs text-gray-500" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" />
                )}
              </button>
              {openMobileDropdown === "services" && (
                <div className="ml-6 py-1 space-y-1">
                  {servicesMenuItems.map((item) => (
                    <Link
                      key={item.key}
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
            <Link
              to="/blogs"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Our Blogs
            </Link>
            <Link
              to="/career"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Job Groups
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 border-b border-gray-100 font-medium hover:bg-yellow-50 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="p-4 border-b space-y-1">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <FaPhoneAlt className="text-yellow-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">24/7 Support</p>
              <p className="text-sm font-medium">+91 76785 73511</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <FaEnvelope className="text-yellow-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Us</p>
              <p className="text-sm font-medium">contact@refermegroup.com</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
          <div className="flex justify-center gap-3">
            <Link
              to="https://www.facebook.com/refermegroup.qa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity"
            >
              <FaFacebook />
            </Link>

            <Link
              to="https://www.instagram.com/refermegroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-pink-600 to-amber-500 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity"
            >
              <FaInstagram />
            </Link>

            <Link
              to="https://www.linkedin.com/company/refermegroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity"
            >
              <FaLinkedin />
            </Link>

            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity"
            >
              <FaTwitter />
            </Link>

            <Link
              to="https://www.youtube.com/@ReferMeGroupQA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity"
            >
              <FaYoutube />
            </Link>
            <a
              href="https://wa.me/917678573511" // ✅ Must start with https://
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-1.5 text-sm rounded-full text-white hover:opacity-90 transition-opacity"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
