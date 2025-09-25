import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Freelancing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    technicalExpertise: "",
    projectsDelivered: "",
    remark: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show submitting toast
    toast.info("Submitting your application...", {
      autoClose: false,
      isLoading: true,
      toastId: "submitting-toast",
    });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contact@refermegroup.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Freelancer Application from ${formData.name}`,
            _template: "table",
            _autoresponse: `Dear ${formData.name},\n\nThank you for your freelancer application! We've received your submission and will review it shortly.\n\nBest regards,\nFreelance Team`,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.dismiss("submitting-toast");
        toast.success(
          "Application submitted successfully! We will contact you soon.",
          {
            position: "top-center",
            autoClose: 5000,
          }
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          technicalExpertise: "",
          projectsDelivered: "",
          remark: "",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      toast.dismiss("submitting-toast");
      toast.error(`Submission failed: ${error.message}`, {
        position: "top-center",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "design":
        return (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                title: "UI/UX Design",
                desc: "We create intuitive and visually appealing user interfaces that enhance user experience and engagement.",
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
              },
              {
                title: "Website Design",
                desc: "Modern, responsive website designs that work across all devices and screen sizes.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Mobile App Design",
                desc: "Native mobile app designs following platform-specific guidelines for iOS and Android.",
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
              },
              {
                title: "Logo & Branding",
                desc: "Complete branding solutions including logo design, color schemes, and visual identity.",
                icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
              },
            ].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        );
      case "development":
        return (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                title: "Website Development",
                desc: "Custom website development using modern technologies like React, Next.js, and Tailwind CSS.",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
              {
                title: "Mobile App Development",
                desc: "Cross-platform mobile app development with React Native or native iOS/Android development.",
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
              },
              {
                title: "E-commerce Solutions",
                desc: "Complete e-commerce solutions with payment integration, inventory management, and more.",
                icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "CMS Implementation",
                desc: "Content Management System setup and customization for easy content updates.",
                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
              },
            ].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        );
      case "training":
        return (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                title: "Project Documentation",
                desc: "Detailed documentation explaining design and development decisions for your learning.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Code Walkthroughs",
                desc: "Step-by-step explanations of the codebase to help you understand implementation details.",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              },
              {
                title: "Design Process Explanation",
                desc: "Insight into our design thinking process and rationale behind design choices.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Best Practices Guide",
                desc: "Comprehensive guide covering industry best practices relevant to your project.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
            ].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const ServiceCard = ({ title, desc, icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-100 group">
      <div className="flex items-start">
        <div className="bg-purple-50 p-3 rounded-lg mr-4 group-hover:bg-purple-100 transition-colors duration-300">
          <svg
            className="w-6 h-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={icon}
            ></path>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );

  const ProcessStep = ({ number, title, description }) => (
    <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const PortfolioItem = ({ title, desc, imgSrc }) => (
    <div className="relative group overflow-hidden rounded-xl">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
          <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
          <p className="text-gray-300">{desc}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-gray-800 antialiased">
      <ToastContainer />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Grow Your Career as a Freelancer with Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join our platform to showcase your skills, work with top clients,
            and build your freelance journey.
          </p>
          <button
            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl"
            onClick={() =>
              document
                .getElementById("apply")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Become a Freelancer
          </button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Global Exposure",
                description:
                  "Connect with clients from around the world and grow your portfolio.",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Timely Payments",
                description:
                  "Transparent payment process with reliable and timely payouts.",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Trusted Platform",
                description:
                  "Be part of a secure and reputable freelancing ecosystem.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.icon}
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white" id="apply">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Freelancer Application</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to join our freelancer network
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email ID*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Number*
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="technicalExpertise"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Technical Expertise*
                </label>
                <input
                  type="text"
                  id="technicalExpertise"
                  name="technicalExpertise"
                  value={formData.technicalExpertise}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="e.g., React, UI/UX Design, Python"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="projectsDelivered"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                How many projects delivered as Freelancer?*
              </label>
              <select
                id="projectsDelivered"
                name="projectsDelivered"
                value={formData.projectsDelivered}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Select an option</option>
                <option value="0">0 (Just starting)</option>
                <option value="1-5">1-5 projects</option>
                <option value="6-10">6-10 projects</option>
                <option value="11-20">11-20 projects</option>
                <option value="20+">20+ projects</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="remark"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Remark
              </label>
              <textarea
                id="remark"
                name="remark"
                value={formData.remark}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Tell us about your experience, skills, or any special requirements"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Freelancing;
