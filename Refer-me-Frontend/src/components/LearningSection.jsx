import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const LearningSection = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Track the current slide (1-based index)

  const slides = [
    {
      title: 'Insights',
      description: 'Get a clear picture of your progress, where you shine and improve with personalized insights on your performance.Join a community of learners to collaborate and grow together.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.',
      // image: 'src/assets/bg-img/gif3.gif', - wrong method
      image: '/assets/bg-img/gif3.gif', // right method
    },
    {
      title: 'Interactive Learning',
      description: 'Engage with hands-on exercises and real-world projects to solidify your skills.Join a community of learners to collaborate and grow together.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.',
      image: '/assets/bg-img/gif1.gif',
    },
    {
      title: 'AI-Powered Feedback',
      description: 'Receive instant, AI-driven feedback to accelerate your learning journey.Join a community of learners to collaborate and grow together.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.',
      image: '/assets/bg-img/gif2.gif',
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your growth with detailed analytics and milestone tracking. Join a community of learners to collaborate and grow together.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.',
      image: '/assets/bg-img/gif8.gif',
    },
    {
      title: 'Community Support',
      description: 'Join a community of learners to collaborate and grow together.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.',
      image: '/assets/bg-img/gif7.gif',
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/assets/bg-img/trr.jpg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-7xl mx-auto py-10 px-4">
          {/* Header */}
          <h2 className="text-sm font-semibold text-center text-gray-500 uppercase mb-2">
            UPGRADE KNOWLEDGEHUT’S UNIQUE PEDAGOGY
          </h2>
          <h3 className="text-3xl font-bold text-center mb-4">
            EXPERIENCE IMMERSIVE LEARNING
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the learning revolution with the ultimate AI-Powered Integrated Learning Platform. Designed to provide a highly engaging, immersive learning experience, it’s always YOU at the centre of the learning.
          </p>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-learning',
              prevEl: '.swiper-button-prev-learning',
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