import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PartnershipPrograms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    organizationEmail: "",
    remark: "",
    termsAgreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.termsAgreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

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
            name: formData.name,
            email: formData.email,
            contactNumber: formData.contactNumber,
            organizationEmail: formData.organizationEmail,
            remark: formData.remark,
            termsAgreed: formData.termsAgreed ? "Yes" : "No",
            _captcha: "false",
            _template: "table",
            _subject: `New Partnership Application from ${formData.name}`,
            _autoresponse: `Dear ${formData.name},\n\nThank you for your partnership application! We've received your submission and will review it shortly.\n\nBest regards,\nPartnership Team`,
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
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          organizationEmail: "",
          remark: "",
          termsAgreed: false,
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

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <ToastContainer />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Grow Together with Our Partnership Programs
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Collaborate with us to create mutual value, expand reach, and
            deliver exceptional learning experiences
          </p>
          <button
            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl"
            onClick={() =>
              document
                .getElementById("apply")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Become a Partner
          </button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Expanded Reach",
                description: "Access our global community of 500,000+ learners",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Revenue Sharing",
                description: "Competitive revenue models with timely payouts",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Trusted Brand",
                description:
                  "Associate with an award-winning education platform",
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
      <section className="py-20 bg-gray-50" id="apply">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apply for Partnership</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get back to you within 2
              business days
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <div className="mb-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="organizationEmail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Organization Email*
              </label>
              <input
                type="email"
                id="organizationEmail"
                name="organizationEmail"
                value={formData.organizationEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="termsAgreed"
                    name="termsAgreed"
                    type="checkbox"
                    checked={formData.termsAgreed}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <label
                  htmlFor="termsAgreed"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Partnership
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  *
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-70"
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

export default PartnershipPrograms;
