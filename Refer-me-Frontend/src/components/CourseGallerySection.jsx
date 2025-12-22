// CourseGallerySection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categoryMapping = {
  "Data Science, AI & Automation": [
    "Data Science, AI & Automation",
    "Artificial Intelligence",
    "Data Science & AI",
    "Artificial Intelligence & Automation",
    "Robotic Process Automation",
  ],
  "Software Testing & Programming": [
    "Automation Testing",
    "Test Automation",
    "Programming",
  ],
  "Cloud & DevOps": ["Cloud Computing"],
  "Management & Business": [
    "Business Analysis",
    "Program Management",
    "Project Management",
    "Product Management",
  ],
  "Marketing & Soft Skills": ["Digital Marketing", "Finance"],
};

const CourseGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [courses, setCourses] = useState([]);
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

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("https://refermegroup.com/api/courses");
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

  const filteredCourses =
    activeCategory === "All Courses"
      ? courses
      : courses.filter((course) => {
          const courseCategoryName = course.category;
          const mappedCategories = categoryMapping[activeCategory] || [];
          return mappedCategories.includes(courseCategoryName);
        });

  if (loading)
    return (
      <div className="py-16 text-center text-xl font-bold text-indigo-600">
        Loading courses...
      </div>
    );
  if (error)
    return (
      <div className="py-16 text-center text-xl font-bold text-red-600">
        {error}
      </div>
    );

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-800 opacity-20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-800 opacity-20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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

      <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-500 backdrop-blur-md border border-white/20 shadow-lg ${
              activeCategory === category
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                : "bg-white/70 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto relative z-10"
      >
        {filteredCourses.map((course) => {
          const imageSrc = course.bannerImage
            ? course.bannerImage
            : "https://via.placeholder.com/400x224/6B7280/FFFFFF?text=No+Image";
          const pdfUrl = course.curriculumPdfUrl
            ? course.curriculumPdfUrl
            : "#";

          return (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-transparent bg-gradient-to-r from-indigo-100/30 via-purple-100/30 to-pink-100/30"
            >
              <div className="absolute top-2 left-2 flex flex-wrap gap-2 z-20">
                {course.recommended && (
                  <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    Recommended
                  </span>
                )}
                {course.trending && (
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    Trending
                  </span>
                )}
                {course.mostPurchased && (
                  <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    Popular
                  </span>
                )}
              </div>

              <div className="relative group">
                <img
                  src={imageSrc}
                  alt={course.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-90"></div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {course.title}
                </h4>
                <div className="flex items-center space-x-5 mb-4 text-gray-600 text-sm font-medium">
                  <span>{course.duration}</span>
                  <span>{course.enrolled}</span>
                </div>

                <div className="flex space-x-4">
                  {/* ✅ FIX: Yahan 'id' use kiya hai taaki Detail page match kr sake */}
                  <Link
                    to={`/courses/${course.id}`}
                    className="flex-1 bg-white border border-gray-200 text-gray-800 py-2.5 rounded-xl text-center font-medium"
                  >
                    View Course
                  </Link>
                  <button
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-xl font-medium shadow-lg"
                    onClick={() => window.open(pdfUrl, "_blank")}
                    disabled={pdfUrl === "#"}
                  >
                    Curriculum
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CourseGallerySection;
