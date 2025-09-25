import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlacementRecordsSection = () => {
  // Sample student data inspired by web search results
  const students = [
    {
      name: "Adil Thakur",
      lpa: "47.61 LPA",
      company: "ServiceNow",
      image: "https://media.istockphoto.com/id/1448071296/photo/portrait-of-happy-indian-teenager-college-or-school-boy-holding-books-isolated-on-white.jpg?s=612x612&w=0&k=20&c=VIdVGH8UgmXdAeqroDaCKNZDLvoFO59ReIZqGPUdJP4=",
    },
    {
      name: "Shachi Gupta",
      lpa: "42.87 LPA",
      company: "ServiceNow",
      image: "https://media.istockphoto.com/id/2216235140/photo/teenage-girl-studying-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=XvAxBTwyznZwjvSl0MOhDIG73VbxpCRbDw4pe1Z01T8=",
    },
    {
      name: "Yasir M.",
      lpa: "3 Crore",
      company: "Global IT Giant",
      image: "https://media.istockphoto.com/id/1284864677/photo/smiling-young-student-of-indian-origin-carrying-shoulder-bag-and-a-book.jpg?s=612x612&w=0&k=20&c=SlnRGIFZLoQFkxCCju2SzLmOZW5i9IBVYFsaDgYnNZU=",
    },
    {
      name: "Kreeti Yaswanth",
      lpa: "27 LPA",
      company: "Juspay",
      image: "https://media.istockphoto.com/id/1362063465/photo/female-teen-student-with-a-backpack-and-books-smiling-stock-photo.jpg?s=612x612&w=0&k=20&c=cstb2dGLkOJSfRt9TBEj2G9hfYyIR8mYuBWdZZStsbc=",
    },


    {
      name: "Atul Gupta",
      lpa: "27 LPA",
      company: "Google",
      image: "https://media.istockphoto.com/id/1141737652/photo/portrait-of-a-confident-young-man.jpg?s=612x612&w=0&k=20&c=YQaYjmbPGpJ0DXxGSTLHFPWsBKjBsAmR_l-XHYt2vHU=",
    },,
    {
      name: "Jaya Prakash",
      lpa: "27 LPA",
      company: "Tech Mahindra",
      image: "https://media.istockphoto.com/id/1331422830/photo/confident-smiling-indian-school-teacher-with-students-in-background.jpg?s=612x612&w=0&k=20&c=Y6yICEM3uqYlF0f-PyNPUuVXyjcOyoaqToKZv8vyNZY=",
    },
    {
      name: "Gaurav Goel",
      lpa: "27 LPA",
      company: "Dell",
      image: "https://media.istockphoto.com/id/1398271493/photo/college-student-with-book-and-backpack-outdoor.jpg?s=612x612&w=0&k=20&c=ybXfCOTANR-Q1_mp-EBEZWbqpW3vTOxCUktXSG0ysAk=",
    },
    {
      name: "Rahul Umar",
      lpa: "27 LPA",
      company: "Impetus",
      image: "https://media.istockphoto.com/id/1336832660/photo/male-teenage-student-in-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=24LklaK0hoPbe7bGCSHZPbaWJKV6yH0F1b8lABbOS30=",
    },
    {
      name: "Prachi Sharma",
      lpa: "27 LPA",
      company: "Greenway",
      image: "https://media.istockphoto.com/id/1222372717/photo/indian-young-girl-stock-images.jpg?s=612x612&w=0&k=20&c=OYtnDHPUcBMzT_CYBKETl1_f5DFOCHfXo3hY0R9pinM=",
    },
  ];

  // Slider settings with autoplay
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    loop:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-6 bg-gradient-to-br from-white to-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl  font-bold text-center text-gray-700 mb-10 animate-fade-in">
        Check our placement records to see the highest salary package earned by our students
        </h2>

        {/* Slider */}
        <Slider {...settings} className="relative overflow-hidden">
          {students.map((student, idx) => (
            <div key={idx} className="px-4 overflow-visible ">
              <div className="bg-white/30 border border-gray-500 backdrop-blur-lg rounded-lg shadow-xl p-4 text-center border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-visible">
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
                {/* <p className="text-indigo-600 font-bold text-lg mt-2">{student.lpa}</p> */}
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

export default PlacementRecordsSection;