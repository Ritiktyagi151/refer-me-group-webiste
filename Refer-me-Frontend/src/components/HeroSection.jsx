import React from "react";

function HeroSection() {
  return (
    <>
      <section className="relative bg-gray-50 pt-12 md:py-20 overflow-hidden">
        {/* Diagonal Background Image */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50">
          <img
            src="/assets/creatives/main-banner.png"
            alt="Team Collaboration"
            className="w-full h-full object-cover transform -rotate-12 origin-top-left"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="md:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Your Career Training Marketplace
            </h1>
            <p className="text-gray-600 mb-6">
              Search among hundreds of live, virtual and online training
              courses.
            </p>

            {/* Search Bar */}
            {/* <div className="flex mb-8">
              <input
                type="text"
                placeholder="Start your search now or browse services below"
                className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-r-md hover:bg-orange-600 transition duration-300">
                SEARCH
              </button>
            </div> */}

            {/* Training Methods and Stats */}
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="bg-blue-50 p-5 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6 w-full md:w-1/3 transition-all duration-200 hover:shadow-lg">
                <h3 className="text-gray-800 font-bold text-lg mb-3 border-b border-blue-200 pb-2">
                  Training Methods
                </h3>
                <ul className="text-blue-700 space-y-2 list-disc pl-5">
                  <li className="hover:text-blue-800 transition-colors duration-200">
                    Virtual Live Training
                  </li>
                  <li className="hover:text-blue-800 transition-colors duration-200">
                    eLearning Courses
                  </li>
                  <li className="hover:text-blue-800 transition-colors duration-200">
                    In-Person On-Site Training
                  </li>
                </ul>
              </div>
              <div className="flex-1 grid grid-cols-3 gap-4 md:gap-6">
                <div className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-md">
                  <p className="text-4xl font-extrabold text-blue-700 animate-pulse-once">
                    1200+
                  </p>
                  <p className="text-gray-700 mt-2 font-medium">
                    Trained Corporates
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-md">
                  <p className="text-4xl font-extrabold text-blue-700 animate-pulse-once">
                    15+
                  </p>
                  <p className="text-gray-700 mt-2 font-medium">
                    Courses & Videos
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-md">
                  <p className="text-4xl font-extrabold text-blue-700 animate-pulse-once">
                    12K+
                  </p>
                  <p className="text-gray-700 mt-2 font-medium">
                    Training Hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <img src="src/assets/banners/Banner-1.png" alt="" /> - wrong method import src image */}
      <img src="/assets/banners/Banner-1.png" alt="" className="w-full" />
    </>
  );
}

export default HeroSection;
