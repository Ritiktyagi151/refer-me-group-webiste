import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobAssistanceSection = () => {
  // Sample student data showcasing learners who benefited from job assistance
  const students = [
    {
      name: "Adil Thakur",
      company: "ServiceNow",
      image:
        "https://media.istockphoto.com/id/1448071296/photo/portrait-of-happy-indian-teenager-college-or-school-boy-holding-books-isolated-on-white.jpg?s=612x612&w=0&k=20&c=VIdVGH8UgmXdAeqroDaCKNZDLvoFO59ReIZqGPUdJP4=",
    },
    {
      name: "Shachi Gupta",
      company: "ServiceNow",
      image:
        "https://media.istockphoto.com/id/2216235140/photo/teenage-girl-studying-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=XvAxBTwyznZwjvSl0MOhDIG73VbxpCRbDw4pe1Z01T8=",
    },
    {
      name: "Yasir M.",
      company: "Global IT Giant",
      image:
        "https://media.istockphoto.com/id/1284864677/photo/smiling-young-student-of-indian-origin-carrying-shoulder-bag-and-a-book.jpg?s=612x612&w=0&k=20&c=SlnRGIFZLoQFkxCCju2SzLmOZW5i9IBVYFsaDgYnNZU=",
    },
    {
      name: "Kreeti Yaswanth",
      company: "Juspay",
      image:
        "https://media.istockphoto.com/id/1362063465/photo/female-teen-student-with-a-backpack-and-books-smiling-stock-photo.jpg?s=612x612&w=0&k=20&c=cstb2dGLkOJSfRt9TBEj2G9hfYyIR8mYuBWdZZStsbc=",
    },
    {
      name: "Atul Gupta",
      company: "Google",
      image:
        "https://media.istockphoto.com/id/1141737652/photo/portrait-of-a-confident-young-man.jpg?s=612x612&w=0&k=20&c=YQaYjmbPGpJ0DXxGSTLHFPWsBKjBsAmR_l-XHYt2vHU=",
    },
    {
      name: "Jaya Prakash",
      company: "Tech Mahindra",
      image:
        "https://media.istockphoto.com/id/1331422830/photo/confident-smiling-indian-school-teacher-with-students-in-background.jpg?s=612x612&w=0&k=20&c=Y6yICEM3uqYlF0f-PyNPUuVXyjcOyoaqToKZv8vyNZY=",
    },
  ];

  // Slider settings with autoplay
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gradient-to-br from-white to-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold text-center text-gray-700 mb-10 animate-fade-in">
          Our Students Benefit from Career Guidance & Job Assistance
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          While we don’t directly place students, we provide dedicated career support, interview preparation, and job assistance to help our learners explore opportunities, build confidence, and succeed in the professional world.
        </p>

        {/* Slider */}
        <Slider {...settings} className="relative overflow-hidden">
          {students.map((student, idx) => (
            <div key={idx} className="px-4 overflow-visible">
              <div className="bg-white/30 border border-gray-500 backdrop-blur-lg rounded-lg shadow-xl p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-visible">
                {/* Student Image */}
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover rounded-full border-2 border-indigo-300"
                  />
                </div>
                {/* Student Details */}
                <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                <p className="text-gray-600 mt-1">{student.company}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Animation for Fade-In */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default JobAssistanceSection;
