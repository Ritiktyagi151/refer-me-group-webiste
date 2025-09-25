import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaUserCheck,
  FaVideo,
  FaUserTie,
  FaTrophy,
  FaNetworkWired,
  FaLaptopCode,
  FaCertificate,
  FaFileAlt,
  FaComments,
  FaTools,
} from "react-icons/fa";

const WhatWeDo = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/assets/bg-img/vedio.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="py-10 text-center bg-gradient-to-b from-transparent to-gray-900"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Empower Your Career with{" "}
            <span className="text-blue-400">Refer Me Group</span>
          </h1>
          <p className=" max-w-7xl mx-auto">
            Refer Me Group is dedicated to supporting career growth and
            professional development through accessible, impactful services. We
            aim to empower individuals at every stage—whether they are students,
            job seekers, or experienced professionals. Our Job Sharing
            initiative features over 55,000 verified job opportunities annually,
            available free of charge to ensure inclusive access to employment.
            We offer Career Development Training programs that focus on
            essential skills such as communication, resume building, interview
            preparation, and industry-specific knowledge—preparing individuals
            for real-world success. Through our Job Placement Assistance, we
            help candidates connect with suitable roles by providing guidance on
            applications, profile optimization, and career planning. We
            regularly host Educational Webinars and Workshops led by industry
            experts, focusing on the latest tools, trends, and in-demand skills
            across various domains. Our Mentorship Programs pair professionals
            with experienced mentors who provide valuable insights, goal setting
            support, and career guidance. Networking Platforms enable members to
            build meaningful professional relationships, gain exposure, and
            explore new opportunities. We also support Freelance and Remote Work
            seekers with resources to find projects, manage clients, and grow
            independently. At Refer Me Group, our mission is to unlock
            opportunities, build connections, and help individuals grow with
            confidence in today’s evolving job market.
          </p>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="py-6 px-4 md:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Sharing */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/1351446226/photo/businesswoman-addressing-a-meeting-in-office.jpg?s=612x612&w=0&k=20&c=yCjyd-xDTcFz1VKaU8hoYpBW56QU-QdxYL7i3Rf2vAc="
                alt="Job Sharing"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaBriefcase className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Job Sharing</h3>
              <p>
                Discover over{" "}
                <span className="text-blue-400">55,000 job opportunities</span>{" "}
                annually across our platforms, all completely free. No fees,
                just endless possibilities.
              </p>
            </motion.div>

            {/* Career Development Training */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/889968488/photo/skill-concept.jpg?s=612x612&w=0&k=20&c=yDPoLvtvsnNbJQffOO8iMtfofeYLZ-r4PIdFCH7hBtc="
                alt="Career Training"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaGraduationCap className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Career Development Training
              </h3>
              <p>
                From fresh talent to seasoned professionals, our tailored
                programs equip you with in-demand skills to thrive in today’s
                competitive job market.
              </p>
            </motion.div>

            {/* Job Placement Services */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/1995223299/photo/concept-customer-service-and-guarantee-product-man-hand-holding-tablet-show-top-service.jpg?s=612x612&w=0&k=20&c=OvmqWCOrSk_SurcXntF4fFineGcd5raxr_0RmazXb4c="
                alt="Job Placement"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaUserCheck className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Job Placement Services
              </h3>
              <p>
                Seamlessly transition into rewarding careers with our expert
                placement services, connecting you with top employers in your
                field.
              </p>
            </motion.div>

            {/* Educational Webinars */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/1220226086/photo/on-laptop-diverse-people-collage-webcam-view-over-woman-shoulder.jpg?s=612x612&w=0&k=20&c=HM8xICuAMBP-iHT9qbIotVc9yZzTR-3GKNesOx7Vu1w="
                alt="Webinars"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaVideo className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Educational Webinars
              </h3>
              <p>
                Stay ahead with our free webinars on the latest tools,
                technologies, and industry trends, designed to boost your
                expertise.
              </p>
            </motion.div>

            {/* Mentorship Initiatives */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/2177521463/vector/a-businessman-hands-over-a-to-do-list-to-another-illustrating-the-transition-of-tasks-to-a.jpg?s=612x612&w=0&k=20&c=H9Awtrk-j6jU0mSks4k0kYzApAl-BXRNDgj3zXsogs8="
                alt="Mentorship"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaUserTie className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Mentorship Initiatives
              </h3>
              <p>
                Gain guidance from industry leaders through our mentorship
                programs, fostering support and growth for your career.
              </p>
            </motion.div>

            {/* Recognition of Contribution */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/2174029659/photo/teamwork-and-unity-in-a-business-meeting-setting.jpg?s=612x612&w=0&k=20&c=3dF9tjEdmAv-SaH9tR6B5XZRLaX7sHWxNXZYyELmC50="
                alt="Recognition"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaTrophy className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Recognition of Contribution
              </h3>
              <p>
                We celebrate professionals who uplift others, offering
                opportunities and recognition to foster a collaborative
                community.
              </p>
            </motion.div>

            {/* Networking Platforms */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/1979289151/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.jpg?s=612x612&w=0&k=20&c=TlZAHBk7JzWkpRPe9OkkpJ7jbHc9esLFTmrhEUJWIfA="
                alt="Networking"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaNetworkWired className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Networking Platforms
              </h3>
              <p>
                Expand your professional circle, forge meaningful connections,
                and unlock new opportunities through our dynamic networking
                platforms.
              </p>
            </motion.div>

            {/* Internship Assistance */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/646805636/photo/quality-customer-service-is-a-team-effort.jpg?s=612x612&w=0&k=20&c=Zto3TdDvauVfh4oKOrX1fujp1N13aauF5Ft_mEhUm3k="
                alt="Internship Assistance"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaLaptopCode className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Internship Assistance
              </h3>
              <p>
                We assist students and fresh graduates in gaining hands-on
                industry exposure through internship opportunities that bridge
                the gap between academia and the workplace.
              </p>
            </motion.div>

            {/* Skill Certification Support */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/2157830240/vector/lifelong-learning-self-study-to-motivate-and-improve-skill-development-continue-learn-new.jpg?s=612x612&w=0&k=20&c=hUcOHouTaSB_VG1HpHh1uI7DP-A89sTMjAvZ6ng-WEs="
                alt="Skill Certification"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaCertificate className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Skill Certification Support
              </h3>
              <p>
                We guide professionals in earning certifications from top
                platforms and institutions, boosting their credibility and
                market value across various industries.
              </p>
            </motion.div>

            {/* Resume Building & LinkedIn Optimization */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/184592754/photo/employment.jpg?s=612x612&w=0&k=20&c=IFVQLRGB4_aTCPivw9Txny-ZxFQT0T2TUoq2veI162U="
                alt="Resume Building"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaFileAlt className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Resume Building & LinkedIn Optimization
              </h3>
              <p>
                Our experts help candidates create impactful resumes and
                optimize their LinkedIn profiles to increase visibility and
                attract potential employers and recruiters.
              </p>
            </motion.div>

            {/* Career Counseling */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/1309449027/photo/biracial-female-psychologist-hands-holding-palms-of-millennial-woman-patient.jpg?s=612x612&w=0&k=20&c=b_vg7WH1YsPZALwP20cZ0yrHi0MDcXAKssz3lOI6hZQ="
                alt="Career Counseling"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaComments className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Career Counseling</h3>
              <p>
                We offer one-on-one career counseling sessions to help
                individuals discover their strengths, identify goals, and map
                out personalized career paths aligned with their aspirations.
              </p>
            </motion.div>

            {/* Workshops & Hands-On Sessions */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeIn}
            >
              <img
                src="https://media.istockphoto.com/id/628483496/photo/business-speaker-giving-a-talk-in-conference-hall.jpg?s=612x612&w=0&k=20&c=8pCLJoPgioaOUXRBLHR7NyZB_HZ2ux-PnyU8TebU8Mw="
                alt="Workshops"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <FaTools className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Workshops & Hands-On Sessions
              </h3>
              <p>
                We conduct practical workshops focused on in-demand skills such
                as digital marketing, personal branding, portfolio building, and
                technical tools—offering real-world applications beyond theory.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default WhatWeDo;
