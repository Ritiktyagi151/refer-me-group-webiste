import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import courses from "../data/courses.js"; // ❌ remove static import

const CourseGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [courses, setCourses] = useState([]); // state for API data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    "All Courses",
    "Data Science, AI & Automation",
    "Software Testing & Programming",
    "Cloud & DevOps",
    "Management & Business",
    "Marketing & Soft Skills",
  ];

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses"); // 🔥 your API URL
        if (!res.ok) throw new Error("Failed to fetch courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    activeCategory === "All Courses" ? true : course.category === activeCategory
  );

  if (loading) {
    return (
      <div className="py-16 text-center text-xl font-bold text-indigo-600">
        Loading courses...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center text-xl font-bold text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-800 opacity-20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-800 opacity-20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-6 relative z-10"
      >
        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-2">
          FIND THE COURSE RIGHT FOR YOUR GOALS
        </h2>
        <h3 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Explore Over{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            {courses.length}+ Courses
          </span>
        </h3>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-3 mb-12 relative z-10"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-500 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl ${
              activeCategory === category
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                : "bg-white/70 text-gray-800 hover:bg-white/90"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Course Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto relative z-10"
      >
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 border border-transparent bg-gradient-to-r from-indigo-100/30 via-purple-100/30 to-pink-100/30"
          >
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-wrap gap-2 z-20">
              {course.recommended && (
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-white/20">
                  Recommended
                </span>
              )}
              {course.trending && (
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-white/20">
                  Trending
                </span>
              )}
              {course.mostPurchased && (
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-white/20">
                  Most Purchased
                </span>
              )}
              {course.topRanked && (
                <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-white/20">
                  Top Ranked
                </span>
              )}
            </div>

            {/* Course Image */}
            <div className="relative group">
              <img
                src={course.bannerImage}
                alt={course.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium z-10">
                {course.type}
              </div>
            </div>

            {/* Course Details */}
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {course.title}
              </h4>
              <div className="flex items-center space-x-5 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">{course.enrolled}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  to={`/courses/${course.id}`}
                  className="flex-1 bg-white border border-gray-200 text-gray-800 py-2.5 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 font-medium text-center"
                >
                  View Course
                </Link>
                <button
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-medium shadow-lg"
                  onClick={() => window.open(course.curriculumPdfUrl, "_blank")}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Curriculum
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CourseGallerySection;
