import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg text-gray-900 hover:bg-gray-100 p-0 rounded"
        onClick={onClick}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 text-base p-2">{answer}</div>
      )}
    </div>
  );
};

const VideoFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // ✅ track which FAQ is open

  const faqs = [
    {
      question: "Who is Refer Me Group?",
      answer:
        "Refer Me Group is a leading provider of online tech-skilling and certification programs. We empower professionals with job-ready skills across domains such as Software Development, Data Science, Cloud Computing, Cybersecurity, and Project Management. Our platform is outcome-driven and designed to bridge the gap between talent and opportunity through flexible, immersive learning experiences.",
    },
    {
      question:
        "How long do Refer Me Group’s online certifications typically take?",
      answer:
        "The duration of Refer Me Group’s online certifications varies depending on the program. Most foundational and intermediate certifications can be completed within 6 to 12 weeks, while more advanced programs may span up to 6 months. Each course is designed to be flexible, allowing learners to progress at their own pace while achieving clear, outcome-driven goals.",
    },
    {
      question:
        "With so many options, how do I choose the best online certification for me?",
      answer:
        "Choosing the right certification depends on your career goals, current skill level, and the industry you aspire to work in. At Refer Me Group, we provide personalized counseling, course previews, and career mapping tools to help you identify the best program for your ambitions.",
    },
    {
      question: "What are the best online bootcamps at Refer Me Group?",
      answer:
        "Some of the most in-demand bootcamps offered by Refer Me Group include Full-Stack Software Development, Data Science & Machine Learning, Cloud Computing with AWS & Azure, Cybersecurity & Ethical Hacking, and Project Management with Agile Methodologies.",
    },
    {
      question:
        "What are the eligibility criteria for pursuing courses on Refer Me Group’s platform?",
      answer:
        "Most courses at Refer Me Group are open to anyone with a basic understanding of computers and a passion for learning. Advanced programs in AI/ML, Cybersecurity, and Cloud Computing may require a technical background or relevant experience. Prerequisites are clearly outlined for each course to help learners prepare accordingly.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Video Column */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="relative aspect-video w-full h-0 pb-[56.25%]">
              <iframe
                src="https://media.istockphoto.com/id/1362681650/video/businesswoman-having-a-video-conference-on-laptop-in-office.mp4?s=mp4-640x640-is&k=20&c=jNd0wLT4Blep0QEQaxe5MnHIwz30Ne4frVIc1virPrA="
                title="Training Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoFAQSection;
