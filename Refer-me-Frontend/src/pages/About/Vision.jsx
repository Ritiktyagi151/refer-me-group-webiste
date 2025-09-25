import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Target,
  Globe,
  Users,
  Award,
  Zap,
  Share2,
  Sparkles,
  HeartHandshake,
  Briefcase,
  UserCheck,
  Webcam,
  Network,
  ChevronLeft, // For custom slider navigation
  ChevronRight, // For custom slider navigation
} from "lucide-react";

const Vision = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
  fadeInLeft = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
  fadeInRight = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Function to animate numbers (simple fade in for now)
  const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
      <motion.p
        ref={ref}
        className="text-5xl font-bold text-blue-600" // Adjusted for light theme
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {value}
      </motion.p>
    );
  };

  // Custom Slider Component
  const CustomSlider = ({ slides, autoplayDelay = 5000, slidesPerView = 1, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          ),
        autoplayDelay
      );

      return () => {
        resetTimeout();
      };
    }, [currentIndex, slides.length, autoplayDelay]);

    const goToNext = () => {
      resetTimeout();
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };

    const goToPrevious = () => {
      resetTimeout();
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };

    const goToSlide = (index) => {
      resetTimeout();
      setCurrentIndex(index);
    };

    return (
      <div className={`relative w-full overflow-hidden ${className}`}>
        <div className="flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-20 p-2 bg-gray-300 bg-opacity-50 rounded-full text-gray-800 hover:bg-opacity-75 transition-all duration-300 transform -translate-y-1/2 top-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={`grid gap-8 w-full`} style={{
            gridTemplateColumns: `repeat(${slidesPerView}, minmax(0, 1fr))`
          }}>
            <AnimatePresence initial={false} mode="wait">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className={`col-span-1`}
                  initial={{ opacity: 0, x: index === currentIndex ? 0 : (index > currentIndex ? 100 : -100) }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: index === currentIndex ? 0 : (index > currentIndex ? -100 : 100) }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ display: Math.abs(index - currentIndex) < slidesPerView || (index < slidesPerView && currentIndex >= slides.length - slidesPerView + index) ? 'block' : 'none' }} // Simple visibility logic
                >
                  {slide}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 z-20 p-2 bg-gray-300 bg-opacity-50 rounded-full text-gray-800 hover:bg-opacity-75 transition-all duration-300 transform -translate-y-1/2 top-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500" // Adjusted for light theme
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    );
  };

  // Data for the "Our Impact in Action" slider
  const impactSlides = [
    <motion.div
      key="career-success"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="https://media.istockphoto.com/id/1144647692/photo/corporate-group-portrait-of-cheering-staff-members.jpg?s=612x612&w=0&k=20&c=hgDeW7sDrgX7hn6mBT5SmDNhcsZ14p5H6KolxRsb70k=" // Lighter placeholder
        alt="Career Success"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4 rounded-lg">
        <p className="text-center w-full text-white font-semibold text-lg">Empowering Careers</p>
      </div>
    </motion.div>,
    <motion.div
      key="networking-event"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="https://media.istockphoto.com/id/891501876/photo/aerial-view-of-city-network-of-beijing-skyline.jpg?s=612x612&w=0&k=20&c=cSk-q6Jo9QTyB_xM47cAV2vDSTovEbSlkRCToafAZnc=" // Lighter placeholder
        alt="Networking Event"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4 rounded-lg">
        <p className="text-center w-full text-white font-semibold text-lg">Building Connections</p>
      </div>
    </motion.div>,
    <motion.div
      key="training-session"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="https://media.istockphoto.com/id/1141465446/photo/get-your-notes-out-and-let-the-learning-begin.jpg?s=612x612&w=0&k=20&c=zbTx30J7zZAwvxaySyw3CVPpQoYeq3vfulImIdmcbdA=" // Lighter placeholder
        alt="Training Session"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4 rounded-lg">
        <p className="text-center w-full text-white font-semibold text-lg">Skill Development</p>
      </div>
    </motion.div>,

    <motion.div
      key="training-session"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="https://media.istockphoto.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.jpg?s=612x612&w=0&k=20&c=6cd0XCc7SXbwh3gDTDgg7yjljBPbW8gAmUUmDCQqs9E=" // Lighter placeholder
        alt="Training Session"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4 rounded-lg">
        <p className="text-center w-full text-white font-semibold text-lg">Technical Development</p>
      </div>
    </motion.div>,
  
        <motion.div
      key="training-session"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="https://media.istockphoto.com/id/1486721631/photo/e-learning-graduate-certificate-program-concept-businessman-hand-holding-light-bulb-with.jpg?s=612x612&w=0&k=20&c=SYMp2mNJ--ef0vPLUXMw0rzc5kNzazmoEuWFLzuIVBw=" // Lighter placeholder
        alt="Training Session"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4 rounded-lg">
        <p className="text-center w-full text-white font-semibold text-lg">Innovation in Learning</p>
      </div>
    </motion.div>,

        <motion.div
      key="training-session"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="https://media.istockphoto.com/id/1409520341/photo/group-of-young-people-discussing-in-the-co-working-office.jpg?s=612x612&w=0&k=20&c=MMScAoIbvQebCJ3dhr8pZ1izzuWxW_pBJ4yJ1KQfwpM=" // Lighter placeholder
        alt="Training Session"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4 rounded-lg">
        <p className="text-center w-full text-white font-semibold text-lg">New Opportunities</p>
      </div>
    </motion.div>,

        <motion.div
      key="Real-World Success Stories"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="https://media.istockphoto.com/id/1293703377/vector/online-education-application-learning-worldwide-on-computer-mobile-website-background-social.jpg?s=612x612&w=0&k=20&c=tCkOPiyesvvYDZmGsuU0Sg9FGkCOl4V0pGxp6azTV-E=" // Lighter placeholder
        alt="Training Session"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4 rounded-lg">
        <p className="text-center w-full text-white font-semibold text-lg">Real-World Success Stories</p>
      </div>
    </motion.div>,

        <motion.div
      key="Mentorship Moments"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="https://media.istockphoto.com/id/1462212441/photo/office-trainee-with-manager.jpg?s=612x612&w=0&k=20&c=Wdy47ClX1CIMqKDDKkf5sJUfCoOGHUh471MybmOWipg=" // Lighter placeholder
        alt="Training Session"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4 rounded-lg">
        <p className="text-center w-full text-white font-semibold text-lg">Mentorship Moments</p>
      </div>
    </motion.div>,
   
  ];

  // Data for the "Testimonial Slider"
  const testimonialSlides = [
    <div key="testimonial-1" className="bg-white p-8 rounded-lg text-center shadow-xl border border-gray-200">
      <img
        src="https://placehold.co/100x100/A78BFA/FFFFFF?text=SK" // Placeholder avatar
        alt="Testimonial Sarah K."
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-500" // Adjusted ring color
      />
      <p className="text-lg italic mb-4 text-gray-700">
        "Refer Me Group helped me land my dream job through their job
        placement services and mentorship program! Truly transformative."
      </p>
      <p className="font-semibold text-blue-600">Sarah K., Software Engineer</p>
    </div>,
    <div key="testimonial-2" className="bg-white p-8 rounded-lg text-center shadow-xl border border-gray-200">
      <img
        src="https://placehold.co/100x100/60A5FA/FFFFFF?text=JL" // Placeholder avatar
        alt="Testimonial James L."
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-500" // Adjusted ring color
      />
      <p className="text-lg italic mb-4 text-gray-700">
        "The webinars and networking platforms opened doors I never
        thought possible. An invaluable resource for career growth."
      </p>
      <p className="font-semibold text-blue-600">James L., Marketing Specialist</p>
    </div>,
    <div key="testimonial-3" className="bg-white p-8 rounded-lg text-center shadow-xl border border-gray-200">
      <img
        src="https://placehold.co/100x100/F87171/FFFFFF?text=AR" // Placeholder avatar
        alt="Testimonial Anita R."
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-500" // Adjusted ring color
      />
      <p className="text-lg italic mb-4 text-gray-700">
        "Their career training transformed my skill set and boosted my
        confidence. Highly recommend to anyone seeking professional development."
      </p>
      <p className="font-semibold text-blue-600">Anita R., Data Analyst</p>
    </div>,
      <div key="testimonial-3" className="bg-white p-8 rounded-lg text-center shadow-xl border border-gray-200">
      <img
        src="https://placehold.co/100x100/F87171/FFFFFF?text=AR" // Placeholder avatar
        alt="Testimonial Anita R."
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-500" // Adjusted ring color
      />
      <p className="text-lg italic mb-4 text-gray-700">
        "Their career training transformed my skill set and boosted my
        confidence. Highly recommend to anyone seeking professional development."
      </p>
      <p className="font-semibold text-blue-600">Anita R., Data Analyst</p>
    </div>,
  ];


  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 overflow-hidden font-inter">
      {/* Background Pattern */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')`, // Subtle pattern
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      ></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="py-24 md:py-32 text-center bg-gradient-to-b from-transparent to-gray-50 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
            Our Mission at{" "}
            <motion.span
              className="text-blue-600 inline-block" // Adjusted for light theme
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              Refer Me Group
            </motion.span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-700" // Adjusted for light theme
            variants={fadeInUp}
          >
            We are dedicated to empowering individuals to achieve their career
            aspirations, unlock their full potential, and thrive in a dynamic
            professional landscape.
          </motion.p>
        </motion.section>

        {/* Vision & Mission Section */}
        <motion.section
          className="py-16 px-4 md:px-16 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900 rounded-lg shadow-2xl mx-4 md:mx-auto max-w-7xl my-12" // Adjusted for light theme
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <div className="max-w-6xl mx-auto">
            {/* Vision */}
            <motion.div className="mb-16 text-center" variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-blue-600">Our Vision</h2> {/* Adjusted for light theme */}
              <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
                To revolutionize online education by making{" "}
                <span className="font-semibold text-purple-700"> {/* Adjusted for light theme */}
                  high-quality, accessible training
                </span>{" "}
                available to every learner worldwide, bridging the gap between ambition
                and opportunity.
              </p>
            </motion.div>

            {/* Mission */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Text Content */}
              <motion.div className="md:w-1/2 space-y-6" variants={fadeInLeft}>
                <h2 className="text-4xl font-bold text-blue-600">Our Mission</h2> {/* Adjusted for light theme */}
                <ul className="space-y-4 text-lg text-gray-700">
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <Target className="mt-1 text-purple-600 flex-shrink-0 w-6 h-6" /> {/* Adjusted for light theme */}
                    <span>
                      Empower learners with{" "}
                      <span className="font-semibold text-gray-800">industry-relevant skills</span>{" "}
                      through cutting-edge courses.
                    </span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <Globe className="mt-1 text-purple-600 flex-shrink-0 w-6 h-6" /> {/* Adjusted for light theme */}
                    <span>
                      Democratize education by offering{" "}
                      <span className="font-semibold text-gray-800">affordable, flexible</span>{" "}
                      learning solutions.
                    </span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <Users className="mt-1 text-purple-600 flex-shrink-0 w-6 h-6" /> {/* Adjusted for light theme */}
                    <span>
                      Build a <span className="font-semibold text-gray-800">global community</span> of
                      learners and mentors.
                    </span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <Award className="mt-1 text-purple-600 flex-shrink-0 w-6 h-6" /> {/* Adjusted for light theme */}
                    <span>
                      Deliver <span className="font-semibold text-gray-800">job-ready outcomes</span>{" "}
                      with project-based training.
                    </span>
                  </motion.li>
                </ul>
              </motion.div>

              {/* Animated Graphic */}
              <motion.div className="md:w-1/2" variants={fadeInRight}>
                <motion.img
                  src="https://media.istockphoto.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.jpg?s=612x612&w=0&k=20&c=d7mWQhdzKrowHYTWXXcCrNn02uyfLYQYB78M75G8lKg=" // Lighter placeholder image
                  alt="Refer Me Group Mission"
                  className="rounded-xl shadow-2xl border-4 border-blue-400 w-full h-auto object-cover" // Adjusted border color
                  whileHover={{ scale: 1.03, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          className="py-16 px-4 md:px-16 bg-gray-50" // Adjusted for light theme
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600"> {/* Adjusted for light theme */}
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-200" // Adjusted for light theme
              variants={fadeInUp}
            >
              <div className="text-center mb-4">
                <Zap className="text-blue-500 text-5xl mx-auto mb-2" /> {/* Adjusted for light theme */}
                <h3 className="text-2xl font-semibold text-gray-800">Empowerment</h3>
              </div>
              <p className="text-center text-gray-700">
                We provide tools and opportunities to help individuals take
                control of their career paths and achieve their dreams.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-200" // Adjusted for light theme
              variants={fadeInUp}
            >
              <div className="text-center mb-4">
                <Share2 className="text-green-500 text-5xl mx-auto mb-2" /> {/* Adjusted for light theme */}
                <h3 className="text-2xl font-semibold text-gray-800">Collaboration</h3>
              </div>
              <p className="text-center text-gray-700">
                We foster a community where professionals support and uplift
                each other through shared knowledge and connections.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-200" // Adjusted for light theme
              variants={fadeInUp}
            >
              <div className="text-center mb-4">
                <Sparkles className="text-red-500 text-5xl mx-auto mb-2" /> {/* Adjusted for light theme */}
                <h3 className="text-2xl font-semibold text-gray-800">Innovation</h3>
              </div>
              <p className="text-center text-gray-700">
                We embrace the latest tools and strategies to keep our community
                ahead in a rapidly evolving professional landscape.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-200" // Adjusted for light theme
              variants={fadeInUp}
            >
              <div className="text-center mb-4">
                <HeartHandshake className="text-purple-500 text-5xl mx-auto mb-2" /> {/* Adjusted for light theme */}
                <h3 className="text-2xl font-semibold text-gray-800">Inclusivity</h3>
              </div>
              <p className="text-center text-gray-700">
                We ensure our resources are accessible to all, creating
                opportunities for diverse professionals to thrive.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Image Grid: Our Impact (Now using CustomSlider) */}
        {/* <motion.section
          className="py-16 px-4 md:px-16 bg-gray-100" // Adjusted for light theme
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600"> 
            Our Impact in Action
          </h2>
          <CustomSlider slides={impactSlides} autoplayDelay={4000} slidesPerView={4} className="max-w-7xl mx-auto rounded-lg shadow-2xl py-12 px-8" />
        </motion.section> */}

        {/* Timeline: Our Journey */}
        <motion.section
          className="py-16 px-4 md:px-16 bg-white" // Adjusted for light theme
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Our Journey</h2> {/* Adjusted for light theme */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div> {/* Adjusted for light theme */}

            {/* Timeline Items */}
            <motion.div className="mb-8 flex items-center w-full" variants={fadeIn}>
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-semibold text-blue-700">2018: Inception</h3> {/* Adjusted for light theme */}
                <p className="text-gray-700">Founded Refer Me Group with a vision to bridge career gaps and empower professionals.</p>
              </div>
              <div className="w-1/2 pl-8 relative">
                <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div> {/* Adjusted for light theme */}
              </div>
            </motion.div>

            <motion.div className="mb-8 flex items-center flex-row-reverse w-full" variants={fadeIn}>
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-2xl font-semibold text-blue-700">2020: Platform Launch</h3> {/* Adjusted for light theme */}
                <p className="text-gray-700">Launched our free job sharing platform, rapidly growing to offer over 10,000 job opportunities.</p>
              </div>
              <div className="w-1/2 pr-8 relative">
                <div className="w-6 h-6 bg-blue-500 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div> {/* Adjusted for light theme */}
              </div>
            </motion.div>

            <motion.div className="mb-8 flex items-center w-full" variants={fadeIn}>
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-semibold text-blue-700">2023: Global Expansion</h3> {/* Adjusted for light theme */}
                <p className="text-gray-700">Expanded our reach to 55,000+ job listings and began hosting impactful global webinars.</p>
              </div>
              <div className="w-1/2 pl-8 relative">
                <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div> {/* Adjusted for light theme */}
              </div>
            </motion.div>

            <motion.div className="mb-8 flex items-center flex-row-reverse w-full" variants={fadeIn}>
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-2xl font-semibold text-blue-700">2025: Community Building</h3> {/* Adjusted for light theme */}
                <p className="text-gray-700">Continuously building a vibrant global community of empowered and connected professionals.</p>
              </div>
              <div className="w-1/2 pr-8 relative">
                <div className="w-6 h-6 bg-blue-500 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div> {/* Adjusted for light theme */}
              </div>
            </motion.div>
          </div>
        </motion.section>

     
      </div>
    </div>
  );
};

export default Vision;
