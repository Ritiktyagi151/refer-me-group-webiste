import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider() {
  const testimonials = [
    { 
      name: "Alex Rivera", 
      role: "Frontend Dev", 
      quote: "This cut my development time in half!", 
      img: "https://randomuser.me/api/portraits/men/75.jpg" 
    },
    { 
      name: "Sam Lee", 
      role: "UX Designer", 
      quote: "The cleanest components I’ve ever used.", 
      img: "https://randomuser.me/api/portraits/women/65.jpg" 
    },
    { 
      name: "Jordan Smith", 
      role: "Fullstack Engineer", 
      quote: "Perfect balance of flexibility and structure.", 
      img: "https://randomuser.me/api/portraits/men/22.jpg" 
    },
    { 
        name: "Jordan Smith", 
        role: "Fullstack Engineer", 
        quote: "Perfect balance of flexibility and structure.", 
        img: "https://randomuser.me/api/portraits/men/22.jpg" 
    },
    { 
        name: "Jordan Smith", 
        role: "Fullstack Engineer", 
        quote: "Perfect balance of flexibility and structure.", 
        img: "https://randomuser.me/api/portraits/men/22.jpg" 
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for tablets and up
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 768, // for mobile screens
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-12 bg-orange-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Success Stories from Our Students</h2>
        
        <Slider {...settings} className="px-2">
          {testimonials.map((user, i) => (
            <div key={i} className="px-2">
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <p className="text-gray-600 italic mb-6">"{user.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={user.img} 
                    alt={user.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{user.name}</h4>
                    <p className="text-gray-500 text-sm">{user.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

