import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Award, GraduationCap, Briefcase, Code, Users, Rocket } from "lucide-react";

const JobReadySection = () => {
  const courses = [
    { name: "AWS Cloud", url: "https://4achievers.com/aws-training" },
    { name: "Software Testing", url: "https://4achievers.com/software-testing-training" },
    { name: "Digital Marketing", url: "https://4achievers.com/digital-marketing-training" },
    { name: "Oracle Fusion", url: "https://4achievers.com/oracle-fusion-financials-training" },
  ];

  const features = [
    {
      icon: <Award size={40} className="text-indigo-400" />,
      text: "A complete curriculum designed to boost your confidence and help you crack interviews at top tech companies.",
    },
    {
      icon: <GraduationCap size={40} className="text-indigo-400" />,
      text: "Personalized mentorship, industry projects, and certification that set you apart.",
    },
    {
      icon: <Briefcase size={40} className="text-indigo-400" />,
      text: "Real-world job simulations to prepare you for tech roles.",
    },
    {
      icon: <Code size={40} className="text-indigo-400" />,
      text: "Hands-on coding challenges to sharpen your skills.",
    },
    {
      icon: <Users size={40} className="text-indigo-400" />,
      text: "Join a vibrant community of learners and professionals.",
    },
    {
      icon: <Rocket size={40} className="text-indigo-400" />,
      text: "Fast-track your career with accelerated learning paths.",
    },
  ];

  // Debug: Log features to ensure all six are present
  console.log("Features:", features);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-white py-16 px-6 sm:px-10">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-ping opacity-50 top-1/4 left-1/5" />
        <div className="absolute w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-40 bottom-1/3 right-1/4" />
        <div className="absolute w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping opacity-60 top-1/2 left-3/4" />
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Hero Heading */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
        >
          Launch Your Tech Career with{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Job Ready Program
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-200 text-lg sm:text-l max-w-3xl mx-auto"
        >
          Master in-demand skills and land your dream job with 4Achievers’ industry-leading training.
        </motion.p>
      </div>

      {/* Courses Grid */}
      {/* <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto z-10 relative"
        id="courses"
      >
        {courses.map((course, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Tilt glareEnable={true} glareMaxOpacity={0.3} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-indigo-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-xl font-bold text-indigo-300 mb-2">{course.name}</div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition duration-300">
                    Explore Course →
                  </div>
                  <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Certified
                  </span>
                </div>
              </a>
            </Tilt>
          </motion.div>
        ))}
      </motion.div> */}

      {/* Features Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-2 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 z-10 relative"
      >
        {features.map((item, idx) => (
          <motion.div
            key={`feature-${idx}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-white/5 backdrop-blur-md p-8 border border-indigo-500/50 shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 min-w-0 flex-1"
            style={{
              clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 50%)",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.2} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className="absolute inset-0  opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <p className="text-gray-50 text-base font-medium">{item.text}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default JobReadySection;