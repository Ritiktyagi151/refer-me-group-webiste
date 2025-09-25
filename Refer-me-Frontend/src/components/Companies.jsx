import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Companies = () => {
  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    centerPadding: "0px",
    spaceBetween: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    speed: 3000,
    cssEase: "linear",
    arrows: false, // Remove arrows to prevent overflow
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 10,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Company logos (replace with your actual images)
  const companies = [
    {
      id: 1,
      name: "Google",
      logo: "/assets/clients/Frame 423.png",
    },
    {
      id: 2,
      name: "Google",
      logo: "/assets/clients/Frame 424.png",
    },
    {
      id: 3,
      name: "Google",
      logo: "/assets/clients/Frame 425.png",
    },
    {
      id: 4,
      name: "Google",
      logo: "/assets/clients/Frame 426.png",
    },
    {
      id: 5,
      name: "Google",
      logo: "/assets/clients/Frame 427.png",
    },
    {
      id: 6,
      name: "Google",
      logo: "/assets/clients/Frame 428.png",
    },
    {
      id: 7,
      name: "Google",
      logo: "/assets/clients/Frame 429.png",
    },
    {
      id: 8,
      name: "Google",
      logo: "/assets/clients/Frame 430.png",
    },
    {
      id: 9,
      name: "Google",
      logo: "/assets/clients/Frame 431.png",
    },
    {
      id: 10,
      name: "Google",
      logo: "/assets/clients/Frame 432.png",
    },
    {
      id: 11,
      name: "Google",
      logo: "/assets/clients/Frame 433.png",
    },
    {
      id: 12,
      name: "Google",
      logo: "/assets/clients/Frame 434.png",
    },
    {
      id: 13,
      name: "Google",
      logo: "/assets/clients/Frame 435.png",
    },
    {
      id: 14,
      name: "Google",
      logo: "/assets/clients/Frame 436.png",
    },
    {
      id: 15,
      name: "Google",
      logo: "/assets/clients/Frame 437.png",
    },
    {
      id: 16,
      name: "Google",
      logo: "/assets/clients/Frame 438.png",
    },
     {
      id: 17,
      name: "Google",
      logo: "/assets/clients/Frame 439.png",
    },
     {
      id: 18,
      name: "Google",
      logo: "/assets/clients/Frame 440.png",
    },
     {
      id: 19,
      name: "Google",
      logo: "/assets/clients/Frame 441.png",
    },
     {
      id: 20,
      name: "Google",
      logo: "/assets/clients/Frame 442.png",
    },
     {
      id: 21,
      name: "Google",
      logo: "/assets/clients/Frame 443.png",
    },
     {
      id: 22,
      name: "Google",
      logo: "/assets/clients/Frame 444.png",
    },
     {
      id: 23,
      name: "Google",
      logo: "/assets/clients/Frame 445.png",
    },
     {
      id: 24,
      name: "Google",
      logo: "/assets/clients/Frame 446.png",
    },
     {
      id: 25,
      name: "Google",
      logo: "/assets/clients/Frame 447.png",
    },
    


  
  ];

  return (
    <div className="w-full mx-auto bg-white">
      {/* Companies hiring our graduates section */}
      <div className="mt-2 px-4">
        <h2 className="text-2xl font-bold text-center mb-4 uppercase">
          Our Students Working
        </h2>

        {/* Container with overflow hidden */}
     <div className="relative overflow-hidden px-2 py-3 bg-gradient-to-b from-blue-200 to-gray-300 rounded-lg">
  <Slider {...sliderSettings}>
    {companies.map((company) => (
      <div key={company.id} className="px-1 focus:outline-none">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Logo image */}
          <img
            src={company.logo}
            alt={company.name}
            className="h-16 md:h-20 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity px-1 border border-gray-50 border-2"
          />
        </div>
      </div>
    ))}
  </Slider>
</div>
      </div>
    </div>
  );
};

export default Companies;
