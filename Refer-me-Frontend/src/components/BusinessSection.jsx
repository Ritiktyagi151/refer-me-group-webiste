import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/outline"; // Changed from v2 to v1 import
// import fabBackground from "../assets/bg-img/str.jpg";

const BusinessSection = () => {
  return (
    <div className="bg-white pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <div 
          className="rounded-xl shadow-lg overflow-hidden"
          style={{
            // backgroundImage: `url(${fabBackground})`,
            backgroundImage: `url('/assets/bg-img/str.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            minHeight: '300px' // Added minimum height
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 p-8 sm:p-12 md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-lg font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                  FOCUSING ON SUCCESS
                </h2>
                <h3 className="text-3xl font-bold text-white mb-4">
                  ReferMeGroup for Business
                </h3>
                <p className="text-lg text-white/90 mb-6">
                  Empower your workforce with our comprehensive online training programs, 
                  industry-recognized certifications, and expert-led webinars.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/3 md:flex md:justify-end"
            >
              <button className="flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
                Read More
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;