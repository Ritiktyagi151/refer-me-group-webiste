import React from "react";

function KnowledgeFLOSection() {
  return (
    <div
      className="bg-contain  bg-repeat py-10"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/assets/bg-img/pen.jpg')",
      }}
    >
      {/* First Section: Image on Left, Text on Right */}
      <section className="bg-transparent py-4 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-0">
          {/* Left Side - Image with Overlay */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-blue-50 rounded-lg p-6 md:p-8 h-full flex flex-col justify-between">
              {/* Logo and Tagline */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-blue-500">
             Nationally recognized online courses in Business, Tech Services
                </h2>
                <p className="text-blue-600 text-sm mt-1">
                  Talent Management Just Got Smarter
                </p>
              </div>
              {/* Illustration Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  // src="src/assets/creatives/girl.jpg" - wrong method
                  src="https://media.istockphoto.com/id/656378092/photo/man-have-business-meeting-via-video-call-in-a-cafe.jpg?s=612x612&w=0&k=20&c=C49ClWlC15vyUfWtpKPBd_ukDkOSu3qbr_199Du12bY="
                  alt="KnowledgeFLO Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 p-5 bg-red-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
             Learn your way
Flexible Learning, Expert Support, and Career-Focused Courses
            </h3>
            <p className="text-gray-600 mb-6">
         Study at your own pace with Refer Me Group’s flexible online courses, backed by expert support whenever you need it.
            </p>

        

            <a
              href="#learn-more"
              className="text-blue-600 font-semibold hover:underline transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Second Section: Text on Left, Image on Right */}
      <section className="bg-transparent py-4 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-0">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 bg-green-300">
            <div className="p-5">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
               Empower your business with industry-recognised training
              </h3>
              <p className="text-gray-600 mb-6">
            Empower your workforce with industry-recognised training that builds both technical and leadership expertise. Stay ahead of industry changes, boost productivity, and drive profitability by equipping your team with the skills to thrive in a competitive landscape.
              </p>
              <a
                href="#learn-more"
                className="text-blue-600 font-semibold hover:underline transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side - Image with Overlay */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-blue-100 rounded-lg p-6 md:p-8 h-full flex flex-col justify-between">
              {/* Logo and Tagline */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-blue-800">
               Build Skilled, Future-Ready Teams
                </h2>
                <p className="text-blue-600 text-sm mt-1">
                Future-Ready Skills for a Competitive Edge
                </p>
              </div>
              {/* Illustration */}
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  // src="src/assets/creatives/girl.jpg" - wrong method
                  src="https://media.istockphoto.com/id/1347888376/photo/woman-using-mobile-smartphone-with-connection-data-transfer-data-big-data-and-internet-of.jpg?s=612x612&w=0&k=20&c=aKvxPbISfZcpH-r17RllBqY4pVkqSMb-S_mBJlV0UYI="
                  alt="KnowledgeFLO Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="bg-transparent py-4 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-0">
          {/* Left Side - Image with Overlay */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-blue-50 rounded-lg p-6 md:p-8 h-full flex flex-col justify-between">
              {/* Logo and Tagline */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-blue-500">
             From Passive to Powerful Learning
                </h2>
                <p className="text-blue-600 text-sm mt-1">
                  Your Learning, Upgraded.
                </p>
              </div>
              {/* Illustration Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src="https://media.istockphoto.com/id/1263424631/photo/e-learning-online-education-or-internet-encyclopedia-concept-open-laptop-and-book-compilation.jpg?s=612x612&w=0&k=20&c=2xih46TXLwHnvgU5FaY9FRRc3F62MpzL__S8O6v2jRU="
                  alt="KnowledgeFLO Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 p-5 bg-red-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
           More Than PDFs with Refer Me Group
            </h3>
            <p className="text-gray-600 mb-6">
             Go beyond PDFs with Refer Me Group—access interactive tools, extra resources, and simple assessments to make your learning experience more engaging.
            </p>
            <a
              href="#learn-more"
              className="text-blue-600 font-semibold hover:underline transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KnowledgeFLOSection;
