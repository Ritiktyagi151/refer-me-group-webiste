import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  ClockIcon,
  ChatAlt2Icon as SupportIcon,
  BookOpenIcon,
  PlayIcon,
  UsersIcon,
  BriefcaseIcon
} from "@heroicons/react/outline";

const Identity = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/bg-img/vedio.mp4" type="video/mp4" />
          <img 
            src="/assets/creatives/girl.jpg" 
            alt="ReferMeGroup background" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <h2 className="inline-flex items-center text-sm font-semibold text-white bg-white/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <SupportIcon className="w-4 h-4 mr-2" />
              TRANSFORMING CAREERS
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who is <span className="text-indigo-300">ReferMeGroup</span>?
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-white font-semibold">ReferMeGroup</strong> bridges 
              the digital skills gap through immersive learning experiences, 
              connecting talent with Fortune 500 partners via cutting-edge 
              certification programs and personalized career coaching.
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="mt-6"
          >
            <button className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full shadow-lg transition-all duration-300 group">
              <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </button>
          </motion.div> */}

          {/* Stats counter */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-block"
          >
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "100+", label: "Certifications" },
                { value: "10K+", label: "Career Transitions" },
                { value: "94%", label: "Placement Rate" }
              ].map((item, index) => (
                <div key={index} className="px-4 text-center">
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-sm font-medium text-white/80 uppercase tracking-wider mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Identity;