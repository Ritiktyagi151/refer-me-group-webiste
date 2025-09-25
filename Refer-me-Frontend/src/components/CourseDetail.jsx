import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  FaCheck,
  FaClock,
  FaUsers,
  FaStar,
  FaPlay,
  FaChartLine,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
  FaUserTie,
  FaQuestionCircle,
  FaGraduationCap,
  FaBook,
  FaCheckCircle,
  FaNetworkWired,
  FaTrophy,
  FaGift,
  FaDownload,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";

import courses from "../data/courses";

const CourseDetail = () => {
  const formRef = useRef(null); // Define formRef
  const { courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);
  const [formError, setFormError] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Safely extract courseId from URL
  const course = courses.find((item) => item.id === courseId);

  // Helper function to calculate average instructor rating and total reviews
  const getInstructorStats = (instructors) => {
    if (!instructors || instructors.length === 0) {
      return { averageRating: "N/A", totalReviews: 0 };
    }
    const totalRating = instructors.reduce(
      (sum, inst) => sum + (inst.rating || 0),
      0
    );
    const totalReviews = instructors.reduce(
      (sum, inst) => sum + (inst.reviews || 0),
      0
    );
    const averageRating = (totalRating / instructors.length).toFixed(1);
    return { averageRating, totalReviews };
  };

  // Slider settings for testimonials
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
  };

  // Slider settings for features
  const featureSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Slider settings for network metrics
  const networkSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleFormSubmit = async (e) => {
    if (e) e.preventDefault(); // 💡 most reliable

    // Clear any existing messages
    setFormError("");
    setFormSubmitted(false);

    const form = formRef.current;
    const formData = new FormData(form);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();

    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    e.target.reset();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contact@refermegroup.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Submission failed");
      }

      const result = await response.json();
      // alert(result.message || "Thank you for your enquiry!");
      form.reset();
      window.history.replaceState(null, "", window.location.pathname); // ✅ clears query string
    } catch (err) {
      console.error("Submit error:", err);
      // alert("Error: " + err.message);
    }
  };

  // Variants for background moving objects
  const particleVariants = {
    animate: (i) => ({
      y: [0, Math.random() * 80 - 40],
      x: [0, Math.random() * 80 - 40],
      rotate: [0, Math.random() * 360],
      transition: {
        duration: Math.random() * 8 + 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  // Slider settings for instructors
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
    className: "instructor-slider",
  };

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center bg-white p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Course Not Found
          </h2>
          <button
            onClick={() => navigate("/courses")}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Browse All Courses
          </button>
        </motion.div>
      </div>
    );
  }

  const { averageRating, totalReviews } = getInstructorStats(
    course.instructors
  );

  return (
    <div className="bg-gray-50 font-sans overflow-hidden">
      {/* Floating Particles Background */}
      {isClient && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-100 opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Success Message */}
      <AnimatePresence>
        {enquirySubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg shadow-lg max-w-md w-full flex justify-between items-center"
          >
            <span>Thank you! Our counselor will contact you shortly.</span>
            <button
              onClick={() => setEnquirySubmitted(false)}
              className="text-green-800 hover:text-green-900"
            >
              <IoMdClose size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition"
              >
                <IoMdClose />
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={selectedVideo}
                  className="w-full h-[500px] rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Course Video"
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        className={`relative bg-gradient-to-br ${
          course.gradient || "from-blue-600 to-indigo-600"
        } text-white overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-12"
          >
            <div className="lg:w-2/3">
              <div className="flex flex-wrap gap-3 mb-6">
                {(course.badges || []).map((badge, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-1.5 bg-white bg-opacity-25 rounded-lg text-sm font-medium backdrop-blur-sm"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                {course.title || "Course Title"}
              </h1>
              <p className="text-xl mb-6 text-gray-100 max-w-3xl">
                {course.shortDesc || "No description available"}
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-10">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-2" />
                  <span className="font-semibold">
                    {averageRating} ({totalReviews} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="mr-2" />
                  <span>{course.enrolled || "0 Students"}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{course.duration || "N/A"}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition duration-300 shadow-lg flex items-center"
                  onClick={() => window.open(course.curriculumPdfUrl, "_blank")}
                >
                  <FaDownload className="mr-2" /> Download Course Curriculum
                </motion.button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/3 bg-white bg-opacity-10 rounded-2xl p-8 border border-white border-opacity-20 backdrop-blur-lg"
            >
              <form
                ref={formRef}
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <AnimatePresence>
                  {formError && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mb-3 text-center"
                    >
                      {formError}
                    </motion.p>
                  )}
                  {formSubmitted && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-green-600 text-sm mb-3 text-center"
                    >
                      Form submitted successfully! We'll contact you shortly.
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 shadow-md"
                >
                  Submit Enrollment
                </motion.button>
                <div className="text-center text-sm text-gray-300 mt-4">
                  <p>Unlock Your Future with Every Lesson!</p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-sm font-semibold tracking-wider uppercase rounded-full mb-4 shadow-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {course.aboutInstitute?.title || "About Refer Me Group"}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              {course.aboutInstitute?.description ||
                "Learn more about our mission to empower professionals."}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow gradient-shadow moving-border-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaGraduationCap className="text-indigo-600 mr-3" />
                Our Mission
              </h3>
              <p className="text-gray-600 mb-4">
                {course.aboutInstitute?.description ||
                  "No description available"}
              </p>
              <ul className="space-y-4">
                {(course.aboutInstitute?.features || []).map(
                  (feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature.content}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow gradient-shadow moving-border-shadow"
            >
              {/* <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <FaStar className="text-yellow-500 mr-3" />
          Video Presentation
        </h3> */}
              {course.videoPresentation ? (
                <img
                  src={course.videoPresentation}
                  alt="Course Video Presentation"
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    e.target.src = "/assets/bg-img/fallback-presentation.jpg";
                  }}
                />
              ) : (
                <p className="text-gray-600 italic">
                  No video presentation available
                </p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow gradient-shadow moving-border-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCheck className="text-indigo-600 mr-3" />
                What We Offer
              </h3>
              <ul className="space-y-4">
                {(course.instituteDetails?.keyOfferings || []).map(
                  (item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-200 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-900 opacity-10"
              style={{
                width: Math.random() * 50 + 20,
                height: Math.random() * 50 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={particleVariants}
              animate="animate"
              custom={i}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-indigo-200/20"></div>
        </div>

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-sm font-semibold tracking-wider uppercase rounded-full mb-4 shadow-sm">
                  Course Curriculum
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  What You'll Learn
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed">
                  {course.longDesc ||
                    "Master essential skills with a curriculum designed for real-world impact, guided by industry experts."}
                </p>
              </motion.div>

              <div className="space-y-4">
                {(course.curriculum || []).map((module, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 "
                  >
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-t-xl hover:from-indigo-600 hover:to-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      aria-expanded={expandedModule === idx}
                      aria-controls={`module-${idx}`}
                    >
                      <div className="flex items-center space-x-4">
                        <FaBook className="text-xl text-indigo-100" />
                        <div>
                          <span className="text-sm font-medium text-indigo-100">
                            Module {idx + 1}
                          </span>
                          <h3 className="text-lg font-semibold">
                            {module.module || "Untitled Module"}
                          </h3>
                        </div>
                      </div>
                      <motion.span
                        animate={{ rotate: expandedModule === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl font-bold text-indigo-100"
                      >
                        {expandedModule === idx ? "−" : "+"}
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {expandedModule === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-gray-50 rounded-b-xl"
                          id={`module-${idx}`}
                        >
                          <ul className="px-6 py-2 space-y-3">
                            {(module.topics || []).map((topic, tidx) => (
                              <motion.li
                                key={tidx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: tidx * 0.05,
                                }}
                                className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0 hover:bg-indigo-50 transition-colors duration-200 rounded-md px-3 group"
                              >
                                <div className="flex items-center space-x-4">
                                  <span className="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center text-sm font-medium group-hover:bg-indigo-200 transition-colors">
                                    {tidx + 1}
                                  </span>
                                  <span className="text-gray-800 font-medium group-hover:text-indigo-700 transition-colors">
                                    {topic.title || "Untitled Topic"}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <FaClock className="text-indigo-500 group-hover:text-indigo-600" />
                                  <span className="text-sm font-medium bg-gray-200 px-3 py-1 rounded-full group-hover:bg-indigo-100 transition-colors">
                                    {topic.duration || "N/A"}
                                  </span>
                                </div>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* dkjds */}
            {/* Course Highlights Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transition-shadow gradient-shadow moving-border-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaStar className="text-yellow-500 mr-3" />
                Course Highlights
              </h3>
              <ul className="space-y-4">
                {(course.instituteDetails?.highlights || []).map(
                  (item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-24 relative overflow-hidden bg-gray-900">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/assets/videos/tech-background.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img
              src="/assets/images/tech-background-fallback.jpg"
              alt="Technology background"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 to-gray-900/90"></div>
        </div>

        {/* Animated Tech Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => {
            const size = Math.random() * 20 + 10;
            const isShape = Math.random() > 0.5;

            return (
              <motion.div
                key={i}
                className={`absolute ${
                  isShape ? "rounded-lg" : "rounded-full"
                } bg-indigo-500 opacity-10`}
                style={{
                  width: size,
                  height: size,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
                  rotate: [0, Math.random() * 360],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            );
          })}

          {/* Floating code snippets */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`code-${i}`}
              className="absolute text-xs font-mono text-indigo-300 opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            >
              {i % 2 === 0 ? "Refer Me Group" : "Join Us Now"}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-sm font-semibold tracking-wider uppercase rounded-full mb-4 shadow-sm">
              Meet Your Mentors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Learn from{" "}
              <span className="text-indigo-400">Industry Experts</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-100 leading-relaxed">
              Our team of experienced instructors brings real-world expertise to
              guide you through your {course.category || "learning"} journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Slider {...sliderSettings.instructors}>
              {(course.instructors || []).map((instructor, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 flex flex-col md:flex-row items-start gap-8 border border-white/20 hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative flex-shrink-0"
                    >
                      <div className="absolute inset-0 rounded-full border-4 border-indigo-200 shadow-lg animate-pulse-slow"></div>
                      {/* <img
                  src={instructor.image || "https://via.placeholder.com/144"}
                  alt={instructor.name || "Instructor"}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md object-cover relative z-10"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/144";
                  }}
                /> */}
                      <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {instructor.name || "Unknown Instructor"}
                      </h3>
                      {/* <p className="text-indigo-600 font-medium mb-3">{instructor.role || "N/A"}</p> */}
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-${
                                i < Math.floor(instructor.rating || 0)
                                  ? "yellow-400"
                                  : "gray-300"
                              } mr-1`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold ml-2 text-gray-700">
                          ({instructor.reviews || 0} reviews)
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {instructor.bio ||
                          `With ${
                            instructor.experience || "years of"
                          } industry experience, ${
                            instructor.name || "this instructor"
                          } brings practical insights to your learning journey.`}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(instructor.expertise || []).map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors flex items-center"
                          >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Add-On Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-200 opacity-15"
              style={{
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={particleVariants}
              animate="animate"
              custom={i}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-sm font-semibold tracking-wider uppercase rounded-full mb-4 shadow-sm">
              Add-On Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Additional Perks
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Enhance your learning experience with these exclusive benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(course.addOnBenefits || []).map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <FaGift className="text-indigo-600 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Network Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-200 opacity-15"
              style={{
                width: Math.random() * 15 + 8,
                height: Math.random() * 15 + 8,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={particleVariants}
              animate="animate"
              custom={i}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-sm font-semibold tracking-wider uppercase rounded-full mb-4 shadow-sm">
              Our Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Connect with Our Global Community
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed">
              Join our extensive network of professionals and tap into global
              opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Slider {...networkSliderSettings}>
              {(course.ourNetwork || []).map((metric, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-300 hover:shadow-xl transition-all duration-300">
                    <FaNetworkWired className="text-indigo-600 text-3xl mx-auto mb-3" />
                    <p className="text-gray-700 font-semibold">{metric}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Rise to Roar Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-sm font-semibold tracking-wider uppercase rounded-full mb-4 shadow-sm">
              Rise to Roar
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Transform Your Career
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              {course.riseToRoar?.tagline ||
                "Join thousands who have transformed their careers with us."}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(course.riseToRoar?.achievements || []).map(
              (achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
                >
                  <FaTrophy className="text-yellow-500 text-2xl mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {achievement}
                    </h3>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Training Features and Enquiry Form Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-200 opacity-15"
              style={{
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={particleVariants}
              animate="animate"
              custom={i}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-indigo-800"></div>
              <div className="mb-8">
                <span className="inline-block px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold tracking-wider uppercase rounded-full">
                  Why Choose Us
                </span>
                <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
                  Training Features
                </h3>
                <p className="text-gray-600 text-base mt-2">
                  Unlock the advantages of our {course.category || "course"}{" "}
                  training program.
                </p>
              </div>
              <div className="space-y-4">
                {(course.instituteDetails?.featuresTable || []).map(
                  (feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      }}
                      className="bg-gray-50 p-5 rounded-lg border-gray-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300"
                    >
                      <div className="flex items-start">
                        <FaCheckCircle className="text-indigo-600 text-lg mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-base text-gray-800">
                            {feature.feature || "Feature"}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {feature.details || "No details"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-transparent opacity-30"></div>
              <img src="/assets/gifs/1.gif" alt="" className="w-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
