import React, { useState, useEffect } from "react";

function DetailModal({ isOpen, onClose, title, content }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Allow the component to mount before starting the animation
      const timer = setTimeout(() => setShow(true), 10);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShow(false); // Trigger exit animation
    // Wait for the animation to finish before calling the parent's onClose
    setTimeout(onClose, 300); // Duration should match the CSS transition
  };

  if (!isOpen) return null;

  return (
    // Overlay with fade animation
    <div
      className={`fixed inset-0 bg-black z-50 flex justify-center items-center transition-opacity duration-300 ${
        show ? "bg-opacity-60" : "bg-opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* Modal Content with scale and fade animation */}
      <div
        className={`bg-white rounded-xl shadow-2xl w-11/12 md:max-w-2xl transform transition-all duration-300 ease-out ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-800 transition-transform duration-300 hover:rotate-90"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Use whitespace-pre-line to respect newlines in the content string */}
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end p-4 bg-gray-50 rounded-b-xl">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
