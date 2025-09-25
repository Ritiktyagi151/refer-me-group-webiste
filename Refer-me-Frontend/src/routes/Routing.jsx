import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

// Layout imports
import AppLayout from "../layout/AppLayout";
import AdminLayout from "../layout/AdminLayout";

// Public page imports
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import ContactUs from "../pages/Contact/ContactUs";
import Careers from "../pages/Career/Career";
import History from "../pages/About/History";
import Team from "../pages/About/Team";
import Vision from "../pages/About/Vision";
import PaymentPolicy from "../pages/About/PaymentPolicy";
import WhatWeDo from "../pages/About/WhatWeDo";
import CoreComitee from "../pages/About/CoreComitee";
import Freelancing from "../pages/Services/Freelancing";
import ManthanPage from "../pages/Services/ManthanPage";
import PartnershipPrograms from "../pages/Services/PartnershipPrograms";
import Webinars from "../pages/Services/Webinars";
import WebinarDetail from "../pages/Services/WebinarDetail";
import CourseDetail from "../components/CourseDetail";

// Blog post imports
import Blog1 from "../pages/Blogs/Blog1";
import Blog2 from "../pages/Blogs/Blog2";
import Blog3 from "../pages/Blogs/Blog3";
import Blog4 from "../pages/Blogs/Blog4";
import Blog5 from "../pages/Blogs/Blog5";
import Blog6 from "../pages/Blogs/Blog6";
import Blog7 from "../pages/Blogs/Blog7";
import Blog8 from "../pages/Blogs/Blog8";

// Admin page imports
import Dashboard from "../Admin/AdminDashboard/AdDashboard";
import AdminNavbar from "../Admin/AddNavorFooter/AdminNavbar";
import AdminFooter from "../Admin/AddNavorFooter/AdminFooter";
import AdminCourses from "../Admin/CoursesAdmin/AdminCourses";
import AdminProfile from "../Admin/AdminProfile/AdminProfile";
import AdminSettings from "../Admin/AdminProfile/AdminSettings";
import AdminLogin from "../Admin/AddLogin/AdminLogin";
import AdminContact from "../Admin/AdminContact/AdminContact";
import AdminAbout from "../Admin/AboutUS/AdminAbout";
import OurStoryAdmin from "../Admin/AboutUS/OurStoryAdmin";
import CoreCmtyAdmin from "../Admin/AboutUS/CoreCmtyAdmin";
import PaymentPolicyAdmin from "../Admin/AboutUS/PaymentPolicyAdmin";
import WebniarAdmin from "../Admin/OurServices/WebniarAdmin";
import ManthanWebniarAdmin from "../Admin/OurServices/ManthanWebniarAdmin";
import AdminLogout from "../Admin/AddLogin/AdminLogout";
import AdminBlogs from "../Admin/BlogAdmin/AdminBlogs";
import CareerQuiz from "../components/QuizPopup";
import JobsGropusSAdmin from "../Admin/JobGroups/JobsGropusSAdmin";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated (you can replace this with your actual auth check)
    const checkAuth = () => {
      const token = localStorage.getItem("adminToken");
      // You might want to validate the token on the server in a real application
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or a loading spinner component
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },

      // About section
      {
        path: "about",
        children: [
          { index: true, element: <About /> },
          { path: "history", element: <History /> },
          { path: "team", element: <Team /> },
          { path: "vision", element: <Vision /> },
          { path: "paymentpolicy", element: <PaymentPolicy /> },
          { path: "whatwedo", element: <WhatWeDo /> },
          { path: "corecomitee", element: <CoreComitee /> },
        ],
      },

      // Services section
      {
        path: "services",
        children: [
          { path: "webinars", element: <Webinars /> },
          { path: "manthan", element: <ManthanPage /> },
          { path: "partnership-programs", element: <PartnershipPrograms /> },
          { path: "freelancing", element: <Freelancing /> },
        ],
      },

      // Webinar detail
      { path: "webinars/:id", element: <WebinarDetail /> },

      // Blogs section
      {
        path: "blogs",
        children: [
          { index: true, element: <Blogs /> },
          { path: "The-Future-of-Data-Science", element: <Blog1 /> },
          { path: "Mastering-Agile", element: <Blog2 /> },
          { path: "Azure-DevOps-vs-AWS", element: <Blog3 /> },
          {
            path: "Automation-Testing-with-Selenium-and-AI",
            element: <Blog4 />,
          },
          { path: "Business-Analysis-in-the-Digital-Age", element: <Blog5 /> },
          { path: "Power-Automate-for-Beginners", element: <Blog6 /> },
          {
            path: "Core-Java-Concepts-Every-Developer-Should-Master",
            element: <Blog7 />,
          },
          { path: "Digital-Marketing-Strategies-for-2024", element: <Blog8 /> },
        ],
      },

      // Other public routes
      { path: "contact", element: <ContactUs /> },
      { path: "career", element: <Careers /> },
      { path: "career-counsling", element: <CareerQuiz /> },

      { path: "courses/:courseId", element: <CourseDetail /> },
      { path: "login", element: <AdminLogin /> },
      { path: "logout", element: <AdminLogout /> },
    ],
  },

  // Admin routes - Protected
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> }, // /admin
      { path: "dashboard", element: <Dashboard /> },
      { path: "navbar", element: <AdminNavbar /> },
      { path: "footer", element: <AdminFooter /> },
      { path: "courses", element: <AdminCourses /> },
      { path: "profile", element: <AdminProfile /> },
      { path: "settings", element: <AdminSettings /> },
      { path: "contact", element: <AdminContact /> },
      { path: "blog", element: <AdminBlogs /> },
      { path: "jobs-groups", element: <JobsGropusSAdmin /> },
      { path: "about/what-we-do", element: <AdminAbout /> },
      { path: "about/our-story", element: <OurStoryAdmin /> },
      { path: "about/core-committee", element: <CoreCmtyAdmin /> },
      { path: "about/payment-policy", element: <PaymentPolicyAdmin /> },
      { path: "services/webinars", element: <WebniarAdmin /> },
      { path: "services/manthan", element: <ManthanWebniarAdmin /> },
    ],
  },

  // 404 route
  {
    path: "*",
    element: <h2>404 page not found!</h2>,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
