import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
    error: false,
  });

  const onSubmit = async (data) => {
    try {
      // Clear any existing messages
      setSubmitStatus({ success: false, message: "", error: false });

      const response = await fetch(
        "https://formsubmit.co/ajax/contact@refermegroup.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      const result = await response.json();

      // Show success message
      setSubmitStatus({
        success: true,
        message:
          result.message ||
          "Thank you! Your message has been sent successfully!",
        error: false,
      });

      // Reset form
      reset();
    } catch (error) {
      console.error("Error sending message: ", error);

      // Show error message
      setSubmitStatus({
        success: false,
        message: `Error: ${error.message}`,
        error: true,
      });
    } finally {
      // Clear message after 3 seconds
      const timer = setTimeout(() => {
        setSubmitStatus({ success: false, message: "", error: false });
      }, 3000);

      // Cleanup function to clear timeout if component unmounts
      return () => clearTimeout(timer);
    }
  };

  return (
    <>
      <div>
        <img
          src={"/assets/banner-new/contact.jpeg"}
          alt="Banner"
          className="w-full"
        />
      </div>

      <div className="min-h-screen bg-blue-50 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're here to help! Fill out the form below, or contact us via the
            details provided.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-md shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Send Us a Message
              </h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Minimum 2 characters" },
                    })}
                    className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.name
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.email
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 76785 73511"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^\+91[6-9][0-9]{9}$/,
                        message: "Use format: +91 76785 73511",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.phone
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: { value: 5, message: "At least 5 characters" },
                    })}
                    className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.subject
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "At least 10 characters",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.message
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-yellow-600 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`mt-6  p-4 rounded-md text-center ${
                      submitStatus.error
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-green-50 text-green-700 border border-green-200"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {submitStatus.error ? (
                        <svg
                          className="w-5 h-5 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span>{submitStatus.message}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Info and Map */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <FaEnvelope className="text-yellow-600 text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-base font-medium">
                        <a
                          href="mailto:contact@refermegroup.com"
                          className="hover:text-yellow-600 transition-colors"
                        >
                          contact@refermegroup.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <FaPhoneAlt className="text-yellow-600 text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Phone
                      </p>
                      <p className="text-base font-medium">
                        <a
                          href="tel:+917678573511"
                          className="hover:text-yellow-600 transition-colors"
                        >
                          +91 76785 73511
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <FaMapMarkerAlt className="text-yellow-600 text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Address
                      </p>
                      <p className="text-base font-medium">
                        B-225, Aditya Park Town, Ghaziabad (UP) 201002
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Our Location
                </h3>
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.719415033119!2d77.48062777495811!3d28.668118882464704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf2170c95d41d%3A0x63766c47c72173a7!2sRefer%20Me%20Group!5e0!3m2!1sen!2sin!4v1750077987488!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://maps.google.com/?q=B-225,Aditya+Park+Town,Ghaziabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 text-sm font-medium transition-colors"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
