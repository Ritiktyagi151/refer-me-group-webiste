import React, { useState } from "react";
import DetailModal from "./DetailModalofKnowledgesectionhome";

// ✅ UPDATED: Content is now more detailed and structured
const contentData = {
  learnYourWay: {
    title: "Flexible Learning, Expert Support",
    content: `At Refer Me Group, we understand that modern careers demand flexible learning. Our online courses are designed to fit your schedule, not the other way around.

• **Study On Your Terms:** With 24/7 access to our platform, you can learn whenever and wherever works best for you—whether you're a working professional balancing a job or a student managing multiple commitments.

• **Expert Mentorship:** You're never alone. Our seasoned instructors and mentors are dedicated to your success, offering personalized guidance, answering your questions, and providing the expert support you need to master new skills.

• **Career-Focused Curriculum:** Every course is designed with your career goals in mind, focusing on practical, in-demand skills that employers are looking for right now.`,
  },
  empowerBusiness: {
    title: "Industry-Recognised Training for Your Business",
    content: `Invest in your team's future and drive sustainable business growth with our corporate training programs. We offer industry-recognized courses that equip your workforce with the latest technical skills and essential leadership expertise.

• **Boost Productivity & Efficiency:** Upskill your team on cutting-edge tools and methodologies to improve workflow, reduce errors, and increase overall output.

• **Foster a Culture of Innovation:** Encourage new ideas and problem-solving by training employees on the latest industry trends and technologies.

• **Increase Profitability:** A skilled, motivated workforce is a profitable one. Drive your bottom line by investing in your most valuable asset—your people. Let us help you build a future-ready team that thrives in a competitive landscape.`,
  },
  moreThanPDFs: {
    title: "An Interactive and Engaging Learning Experience",
    content: `Effective learning is active, not passive. That's why Refer Me Group's platform goes beyond static PDFs and one-way lectures to create a truly immersive and effective educational environment.

• **Interactive Tools & Labs:** Engage with dynamic content, coding sandboxes, and real-world software simulations to apply what you learn instantly.

• **Hands-On Projects:** Move from theory to practice with projects that mirror real-world business challenges. Build a strong portfolio that showcases your abilities to potential employers.

• **Comprehensive Resources:** Access a rich library of supplementary materials, including articles, case studies, and expert-led webinars to deepen your understanding.`,
  },
};

function KnowledgeFLOSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  // Function to open the modal with specific content
  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-contain bg-repeat py-10"
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
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-blue-500">
                    Nationally recognized online courses in Business, Tech
                    Services
                  </h2>
                  <p className="text-blue-600 text-sm mt-1">
                    Talent Management Just Got Smarter
                  </p>
                </div>
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img
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
                Learn Your Way: Flexible, Supported, and Career-Focused
              </h3>
              {/* ✅ UPDATED: More detailed content */}
              <p className="text-gray-600 mb-6">
                Master in-demand skills on your own schedule with Refer Me
                Group’s flexible online courses. Our programs are designed for
                real-world success, offering hands-on learning backed by
                constant expert support to guide you at every step.
              </p>
              <button
                onClick={() => handleOpenModal(contentData.learnYourWay)}
                className="text-blue-600 font-semibold hover:underline transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Second Section: Text on Left, Image on Right */}
        <section className="bg-transparent py-4 md:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center gap-0">
            {/* Right Side - Image with Overlay */}
            <div className="w-full md:w-1/2 relative">
              <div className="bg-blue-100 rounded-lg p-6 md:p-8 h-full flex flex-col justify-between">
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-blue-800">
                    Build Skilled, Future-Ready Teams
                  </h2>
                  <p className="text-blue-600 text-sm mt-1">
                    Future-Ready Skills for a Competitive Edge
                  </p>
                </div>
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img
                    src="https://media.istockphoto.com/id/1347888376/photo/woman-using-mobile-smartphone-with-connection-data-transfer-data-big-data-and-internet-of.jpg?s=612x612&w=0&k=20&c=aKvxPbISfZcpH-r17RllBqY4pVkqSMb-S_mBJlV0UYI="
                    alt="KnowledgeFLO Illustration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Left Side - Text Content */}
            <div className="w-full md:w-1/2 bg-green-300">
              <div className="p-5">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Empower Your Business with Industry-Recognised Training
                </h3>
                {/* ✅ UPDATED: More detailed content */}
                <p className="text-gray-600 mb-6">
                  Invest in your workforce with our industry-validated training
                  programs that build both technical and leadership expertise.
                  Stay ahead of market changes, significantly boost team
                  productivity, and drive profitability by equipping your
                  employees with the skills to excel in a competitive landscape.
                </p>
                <button
                  onClick={() => handleOpenModal(contentData.empowerBusiness)}
                  className="text-blue-600 font-semibold hover:underline transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section: Image on Left, Text on Right */}
        <section className="bg-transparent py-4 md:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-0">
            {/* Left Side - Image with Overlay */}
            <div className="w-full md:w-1/2 relative">
              <div className="bg-blue-50 rounded-lg p-6 md:p-8 h-full flex flex-col justify-between">
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-blue-500">
                    From Passive to Powerful Learning
                  </h2>
                  <p className="text-blue-600 text-sm mt-1">
                    Your Learning, Upgraded.
                  </p>
                </div>
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
              {/* ✅ UPDATED: More detailed content */}
              <p className="text-gray-600 mb-6">
                Go beyond static PDFs and dive into a dynamic learning
                environment. Refer Me Group provides access to interactive
                tools, hands-on labs, supplementary resources, and practical
                assessments to make your learning experience more effective and
                engaging.
              </p>
              <button
                onClick={() => handleOpenModal(contentData.moreThanPDFs)}
                className="text-blue-600 font-semibold hover:underline transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ✅ ADDED: Render the modal component here */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalContent.title}
        content={modalContent.content}
      />
    </>
  );
}

export default KnowledgeFLOSection;
