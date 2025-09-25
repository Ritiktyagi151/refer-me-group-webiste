import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

function EnquiryModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    message: "",
    isError: false,
  });

  const onSubmit = async (data) => {
    try {
      // Clear any existing messages
      setSubmitStatus({ show: false, message: "", isError: false });

      const response = await fetch(
        "https://formsubmit.co/ajax/contact@refermegroup.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to submit enquiry");
      }

      const res = await response.json();

      // Show success message
      setSubmitStatus({
        show: true,
        message: res.message || "Enquiry submitted successfully!",
        isError: false,
      });

      // Reset form
      reset();

      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Enquiry error:", error);

      // Show error message
      setSubmitStatus({
        show: true,
        message: `Error: ${error.message}`,
        isError: true,
      });
    } finally {
      // Clear message after 3 seconds
      setTimeout(() => {
        setSubmitStatus({ show: false, message: "", isError: false });
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Image Section */}
        <div className="md:w-2/5 bg-blue-600 relative hidden md:block">
          <img
            src="/assets/creatives/close-up-girl-girl-learning-online.jpg"
            alt="Education consultation"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800/30 to-blue-600/70 flex items-end p-8">
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">
                Let's Connect
              </h3>
              <p className="text-white/90">
                We're here to help with your educational journey
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-3/5 p-6 md:p-8 bg-indigo-50 relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Enquiry Form</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-3xl w-8 h-8 flex items-center justify-center"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>

          {/* Status Message */}
          <AnimatePresence>
            {submitStatus.show && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.isError
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-green-50 text-green-700 border border-green-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  {submitStatus.isError ? (
                    <svg
                      className="w-5 h-5"
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
                      className="w-5 h-5"
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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.fullName
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9+\-\s]{10,15}$/,
                    message: "Invalid phone number",
                  },
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.phone ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Write Your Message Here..."
                rows="4"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.message
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
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
                  Submitting...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EnquiryModal;
