import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Settings,
  User,
  LogOut,
  Home,
  FileText,
  BookOpen,
  Video,
  ChevronDown,
  ChevronUp,
  Info,
  Bookmark,
  Phone,
  Footprints,
} from "lucide-react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleProfileDropdown = () => setProfileDropdown(!profileDropdown);
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);
  const toggleServicesDropdown = () =>
    setServicesDropdownOpen(!servicesDropdownOpen);

  // Sidebar items
  const sidebarItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: Home,
      link: "/admin/dashboard",
    },
    {
      id: "navbar",
      name: "Navbar",
      icon: Menu,
      link: "/admin/navbar",
    },
    // {
    //   id: "home-section",
    //   name: "Home Section",
    //   icon: Home,
    //   link: "/admin/home-section",
    // },
    {
      id: "blog",
      name: "Blog",
      icon: FileText,
      link: "/admin/blog",
    },
    {
      id: "courses",
      name: "Courses",
      icon: BookOpen,
      link: "/admin/courses",
    },
    {
      id: "jobs-groups",
      name: "Job Groups",
      icon: BookOpen,
      link: "/admin/jobs-groups",
    },
    // {
    //   id: "webinar",
    //   name: "Webinars",
    //   icon: Video,
    //   link: "/admin/webinars",
    // },
    {
      id: "about",
      name: "About Us",
      icon: Info,
      subItems: [
        {
          id: "what-we-do",
          name: "What We Do",
          link: "/admin/about/what-we-do",
        },
      ],
    },
    {
      id: "services",
      name: "Our Services",
      icon: Bookmark,
      subItems: [
        { id: "webinars", name: "Webinars", link: "/admin/services/webinars" },
        { id: "manthan", name: "Manthan", link: "/admin/services/manthan" },
      ],
    },
    {
      id: "contact",
      name: "Contact Us",
      icon: Phone,
      link: "/admin/contact",
    },
    {
      id: "footer",
      name: "Footer",
      icon: Footprints,
      link: "/admin/footer",
    },
  ];

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} ${
          darkMode ? "bg-gray-800" : "bg-white"
        } transition-all duration-300 ease-in-out border-r ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold dark:text-purple-500">
              Refer Me Group
            </h1>
          ) : (
            <h1 className="text-xs font-bold dark:text-white">RMG</h1>
          )}
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-lg ${
              darkMode
                ? "hover:bg-gray-700 text-gray-400"
                : "hover:bg-gray-100 text-gray-600"
            } transition-colors`}
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-1">
            {sidebarItems.map((item) => (
              <div key={item.id}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.id === "about") toggleAboutDropdown();
                        if (item.id === "services") toggleServicesDropdown();
                      }}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                        activeTab === item.id
                          ? darkMode
                            ? "bg-gray-700 text-white"
                            : "bg-blue-100 text-blue-600"
                          : darkMode
                          ? "text-gray-400 hover:bg-gray-700 hover:text-white"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <div className="flex items-center">
                        <item.icon className="h-5 w-5" />
                        {sidebarOpen && (
                          <span className="ml-3">{item.name}</span>
                        )}
                      </div>
                      {sidebarOpen &&
                        ((item.id === "about" && aboutDropdownOpen) ||
                        (item.id === "services" && servicesDropdownOpen) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        ))}
                    </button>
                    {(item.id === "about" &&
                      aboutDropdownOpen &&
                      sidebarOpen) ||
                    (item.id === "services" &&
                      servicesDropdownOpen &&
                      sidebarOpen) ? (
                      <div
                        className={`ml-8 mt-1 space-y-1 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.link}
                            className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setActiveTab(item.id)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-blue-100 text-blue-600"
                        : darkMode
                        ? "text-gray-400 hover:bg-gray-700 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-3">{item.name}</span>}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer in Sidebar */}
        <div
          className={`p-4 border-t ${
            darkMode
              ? "border-gray-700 text-gray-400"
              : "border-gray-200 text-gray-600"
          } text-sm`}
        >
          {sidebarOpen ? (
            <div>
              <p>Admin Panel v1.0</p>
              <p className="mt-1">© 2024 Your Company</p>
            </div>
          ) : (
            <p>AP v1.0</p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className={`flex items-center justify-between p-4 border-b ${
            darkMode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-700 text-gray-400"
                  : "hover:bg-gray-100 text-gray-600"
              } transition-colors`}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className={`flex items-center p-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-700 text-gray-400"
                  : "hover:bg-gray-100 text-gray-600"
              } transition-colors`}
            >
              <User className="h-5 w-5 mr-2" />
              {sidebarOpen && <span>Admin User</span>}
            </button>
            {profileDropdown && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${
                  darkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-white text-gray-700"
                } py-2`}
              >
                <Link
                  to="/admin/profile"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <User className="h-4 w-4 mr-2" /> Profile
                </Link>
                <Link
                  to="/admin/settings"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Settings className="h-4 w-4 mr-2" /> Settings
                </Link>
                <Link
                  to="/logout"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </Link>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        {/* Footer */}
        <footer
          className={`p-4 border-t ${
            darkMode
              ? "border-gray-700 bg-gray-800 text-gray-400"
              : "border-gray-200 bg-white text-gray-600"
          } text-sm flex justify-between items-center`}
        >
          <div>
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Help
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminDashboard;
