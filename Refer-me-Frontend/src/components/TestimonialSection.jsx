import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const TestimonialSection = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All Reviews");

  const testimonials = [
    {
      title: "Excellent APM Course",
      rating: 5,
      text: "This APM course which I enrolled and completed in 5 weekends. Sachin Sir was excellent. I got lot of information and all my queries were resolved. Nitesh gave lot of info on Linkedin. I now knew how to use Linkedin for Job searching and making good connections.",
      author: "Jagadeesh M",
      role: "Course Participant",
      source: "Google",
      date: "1 month ago",
    },
    {
      title: "Great ISTQB Preparation",
      rating: 5,
      text: "I recently completed the ISTQB tutorial classes and found them incredibly helpful in preparing for the ISTQB Foundation Level exam. The course was well-structured, covering all key topics such as testing fundamentals, test design techniques, and test management in a clear and concise manner.",
      author: "Snehal Patil",
      role: "ISTQB Student",
      source: "Google",
      date: "1 month ago",
    },
    {
      title: "Valuable Learning Journey",
      rating: 5,
      text: "Had a very good learning journey with these sessions organized by Refer Me group. The teaching style, trainer's availability and real case scenarios covered during the course were very helpful.",
      author: "Saurabh Sharma",
      role: "Trainee",
      source: "Google",
      date: "2 months ago",
    },
    {
      title: "Excellent AWS DevOps Training",
      rating: 5,
      text: "It was really great training sessions. Trainer Hari was very supportive and knowledgeable. I have learned and practice almost all the topics of AWS Devops tools. Thank you 😊",
      author: "Rahul Ranjan",
      role: "AWS Student",
      source: "Google",
      date: "2 months ago",
    },
    {
      title: "APM Interview Prep Success",
      rating: 5,
      text: "I attended the APM interview prep batch over five weekends. Trainer Sachin explained concepts clearly and made sessions interactive with real-world insights. Highly recommended for aspiring APMs! The course also includes job search strategies and mock interview support.",
      author: "satish Rayanagoudar",
      role: "APM Candidate",
      source: "Google",
      date: "1 month ago",
    },
    {
      title: "Exceptional ISTQB Training",
      rating: 5,
      text: "Refer Me group is very helpful for ISTQB exam preparation. Trainer Gunjan explains topics clearly and supports us well. The sessions are easy to follow and build strong confidence.",
      author: "Srikanth Kunchala",
      role: "ISTQB Student",
      source: "Google",
      date: "1 month ago",
    },
    {
      title: "Resume Makeover Success",
      rating: 5,
      text: "Thank you for reviewing and updating my resume. I appreciate it. Your team has gone through a lot of efforts to streamline the resume and make it ATS friendly. Hope you keep providing such exemplary service at an affordable price ubiquitously to everyone. Minimal interference maximum output.",
      author: "Rajeev Singh",
      role: "Job Seeker",
      source: "Google",
      date: "3 months ago",
    },
    {
      title: "Career Growth Opportunities",
      rating: 5,
      text: "Refer me group has given me numerous opportunities to learn and explore in terms of technologies and work opportunities. I truly appreciate the effort taken by the group to help people network and gain reference in job opportunities.",
      author: "kunal patil",
      role: "Professional",
      source: "Google",
      date: "2 months ago",
    },
    {
      title: "Best Automation Testing Course",
      rating: 5,
      text: "This is one of the best team that supports people to achieve their goals and grow in career. I recently attended the automation testing course from RMG platform, which helped to understand the core concepts and the better ways of automation",
      author: "RAKESH R",
      role: "Automation Tester",
      source: "Google",
      date: "6 months ago",
    },

    {
      title: "Comprehensive course!",
      rating: 5,
      text: "Recently attended the Scrum Master course. The instructor demonstrated profound knowledge of Agile methodologies and real-world implementation challenges. The hands-on exercises simulating sprint planning and retrospective meetings were particularly valuable.",
      author: "Preethi N",
      role: "Project Manager",
      source: "Google",
      date: "4 months ago",
    },
    {
      title: "Amazing training ecosystem!",
      rating: 5,
      text: "This is an amazing training ecosystem. They had assigned individual relationship managers who not only did the tactical coordination but also provided career guidance tailored to my growth aspirations. The learning portal resources and community forums added tremendous value beyond the classroom sessions.",
      author: "Rangarajan Rajamani",
      role: "IT Professional",
      source: "Google",
      date: "5 months ago",
    },
  ];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    if (activeTab === "All Reviews") return true;
    return testimonial.source === activeTab;
  });

  return (
    <>
      <div
        className="w-full py-14"
        style={{
          backgroundImage: `url('/assets/bg-img/poly.avif')`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        <div>
          <div className="max-w-7xl mx-auto py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              LEARNER REVIEWS FROM THE WORLD OVER
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-6">
              TESTIMONIALS THAT SPEAK VOLUMES
            </h3>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {filteredTestimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full flex flex-col bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300 transition-all duration-300 hover:shadow-xl hover:border-gray-500">
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold mb-2">
                        {testimonial.title}
                      </h4>
                      <div className="flex mb-2">
                        {Array(testimonial.rating)
                          .fill()
                          .map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-4">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="flex items-center mt-4 border-t-2 pt-4">
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                      <img
                        src={
                          testimonial.source === "Google"
                            ? "https://www.google.com/favicon.ico"
                            : "https://www.linkedin.com/favicon.ico"
                        }
                        alt={testimonial.source}
                        className="w-5 h-5 ml-auto"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                className="swiper-button-prev-custom w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                onClick={() => swiperRef.current?.slidePrev()}
              >
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
              <button
                className="swiper-button-next-custom w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
                onClick={() => swiperRef.current?.slideNext()}
              >
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

            {/* CTA to Google Reviews */}
            <div className="mt-10 text-center">
              <Link
                to="https://www.google.com/search?sca_esv=d590ad2ae697755e&rlz=1C1ONGR_en-GBIN1148IN1148&sxsrf=AE3TifPb4wc0625VeA5kBIcbAykrMpg9Vw:1753435184562&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ez-V2u6BC5V0Bq_f1p5sHFU4e105h9cv8zOuIuEpferRhpk25EQ606khm9z0wqT1ocFn1MQv5IXtLtEzDzRs_s1hGyZo&q=Refer+Me+Group+Reviews&sa=X&ved=2ahUKEwj-4r-K19eOAxVG3TgGHTb_Fb4Q0bkNegQIIhAE&biw=1536&bih=742&dpr=1.25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
              >
                View More Reviews on Google
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
