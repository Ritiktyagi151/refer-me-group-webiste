import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LearningSection = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Track the current slide (1-based index)

 const slides = [
  {
    title: "Insights",
    description:
      "Gain deep visibility into your learning journey with powerful, AI-driven insights that reveal your strengths and highlight areas for improvement. Track your performance over time through clear visual analytics that help you understand how far you’ve come and what’s next on your path to mastery. With personalized recommendations, you’ll always know which topics to revisit and which new challenges to take on. Empower yourself to make smarter learning decisions, stay motivated, and achieve measurable progress — all backed by intelligent, data-driven insights built to help you succeed.",
    image: "/assets/bg-img/gif3.gif",
  },
  {
    title: "Interactive Learning",
    description:
      "Step into a dynamic, hands-on learning environment that goes far beyond traditional classrooms. Experience real-world projects, engaging exercises, and interactive simulations that allow you to apply what you’ve learned instantly. Each module is designed to make you think, create, and collaborate — transforming theoretical knowledge into practical expertise. You won’t just watch or read; you’ll experiment, solve challenges, and build real skills. With our interactive approach, every session keeps you motivated, inspired, and fully immersed in the art of learning through doing.",
    image: "/assets/bg-img/gif1.gif",
  },
  {
    title: "AI-Powered Feedback",
    description:
      "Accelerate your growth with intelligent, real-time feedback powered by advanced AI algorithms. Our platform doesn’t just grade your answers — it understands your learning behavior, identifies gaps, and provides precise, actionable guidance. Receive instant suggestions to improve your accuracy, clarity, and efficiency, just like having a personal mentor beside you 24/7. Every piece of feedback is tailored to your unique learning style, helping you make consistent progress with confidence. Learn faster, smarter, and more effectively with feedback that truly understands you.",
    image: "/assets/bg-img/gif2.gif",
  },
  {
    title: "Progress Tracking",
    description:
      "Stay in control of your learning goals with detailed progress tracking that keeps you informed at every step. Visualize your achievements through interactive dashboards that highlight milestones, completion rates, and performance patterns. Whether you’re preparing for exams, mastering a new skill, or pursuing professional certification, our analytics make your progress measurable and rewarding. See how your efforts translate into growth, discover your improvement zones, and plan your next move strategically. Progress tracking isn’t just about numbers — it’s about celebrating how far you’ve come and mapping out where you’re headed next.",
    image: "/assets/bg-img/gif8.gif",
  },
  {
    title: "Community Support",
    description:
      "Join a vibrant global community of learners, mentors, and innovators who share your passion for growth. Collaborate on exciting projects, exchange ideas, and gain fresh perspectives from people who inspire you to go further. Whether you need guidance, motivation, or just a friendly space to share your achievements, our community is always there to uplift and support you. Participate in discussions, join study groups, and learn from diverse experiences that enrich your journey. Together, we’re not just learning — we’re building a network of knowledge, connection, and shared success.",
    image: "/assets/bg-img/gif7.gif",
  },
];


  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/assets/bg-img/trr.jpg')`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="max-w-7xl mx-auto py-10 px-4">
          {/* Header */}
          <h2 className="text-sm font-semibold text-center text-gray-500 uppercase mb-2">
            REFER ME GROUP UNIQUE PEDAGOGY
          </h2>
          <h3 className="text-3xl font-bold text-center mb-4">
            EXPERIENCE IMMERSIVE LEARNING
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the learning revolution with the ultimate AI-Powered Integrated
            Learning Platform. Designed to provide a highly engaging, immersive
            learning experience, it’s always YOU at the centre of the learning.
          </p>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-learning",
              prevEl: ".swiper-button-prev-learning",
            }}
            spaceBetween={40}
            slidesPerView={1.2}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)} // Update active slide index
            onSwiper={(swiper) => setActiveSlide(swiper.activeIndex + 1)} // Set initial slide index
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-800 text-gray-100 p-10 border border-4 border-dotted border-gray-400 rounded-tl-[90px] rounded-bl-[90px] flex flex-col md:flex-row items-center justify-between">
                  {/* Left Side: Text */}
                  <div className="md:w-8/12 mb-6 md:mb-0">
                    <div className="flex items-center mb-4">
                      <span className="inline-block w-20 h-20 bg-yellow-100 text-orange-500 rounded-md flex items-center justify-center font-bold text-4xl mr-4 shadow-lg">
                        {index + 1}
                      </span>
                      <h4 className="text-3xl font-semibold">{slide.title}</h4>
                    </div>
                    <p className="text-gray-300">{slide.description}</p>
                  </div>

                  {/* Right Side: Image */}
                  <div className="md:w-4/12">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows with Dynamic Pagination */}
          <div className="flex justify-center mt-6 space-x-4 items-center">
            <button className="swiper-button-prev-learning w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-gray-600">
              {activeSlide} / {slides.length}
            </span>
            <button className="swiper-button-next-learning w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningSection;
