// import { motion } from "framer-motion";
// import {
//   CheckCircleIcon,
//   ClockIcon,
//   ChatAlt2Icon as SupportIcon, // Correct v1 name for support icon
//   BookOpenIcon,
//   UsersIcon,
//   BriefcaseIcon
// } from "@heroicons/react/outline";

// const ReferMeGroupSection = () => {
//   const features = [
//     {
//       icon: <CheckCircleIcon className="w-8 h-8" />,
//       title: "Courses Designed for Real-World Success",
//       description: "Equip yourself with the skills that employers demand."
//     },
//     {
//       icon: <ClockIcon className="w-8 h-8" />,
//       title: "Learn at Your Own Pace",
//       description: "Flexible online courses customized to your schedule."
//     },
//     {
//       icon: <BookOpenIcon className="w-8 h-8" />,
//       title: "More Than PDFs with MyReferMe",
//       description: "Interactive tools and resources for engaging learning."
//     },
//     {
//       icon: <SupportIcon className="w-8 h-8" />,
//       title: "Expert Support Every Step of the Way",
//       description: "1-on-1 mentoring to ensure your success."
//     },
//     {
//       icon: <BriefcaseIcon className="w-8 h-8" />,
//       title: "Partnered with Industry Leaders",
//       description: "Latest content from industry collaborations."
//     },
//     {
//       icon: <UsersIcon className="w-8 h-8" />,
//       title: "Empower Your Workforce",
//       description: "Specialized training to enhance productivity."
//     }
//   ];
  
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             At <span className="text-indigo-600">Refer Me Group</span>, your success is our priority
//           </h1>
//           <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -5, scale: 1.02 }}
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="text-indigo-600 mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="mt-16 text-center"
//         >
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
//             >
//               Browse courses
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors"
//             >
//               Get in touch →
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ReferMeGroupSection;