import { RiMedalLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const WhyChooseUs = () => {
  const images = [
    "https://media.istockphoto.com/id/1262283526/photo/indian-girl-student-wear-headphones-learning-online-watching-webinar-class-looking-at-laptop.jpg?s=612x612&w=0&k=20&c=U53dUb_GsOqsngIbknNaIQhW32dGbTIbCDSAIKV2nHM=",
    "https://media.istockphoto.com/id/1333702087/photo/e-learning-hexagonal-touch-screen-concept.jpg?s=612x612&w=0&k=20&c=WNoDs6YL0JUTtyN4Uht481BhxAbpyxBOo10vMPlnWDc=",
  
    "https://media.istockphoto.com/id/1461631485/photo/group-of-young-students-checking-exam-results-or-waiting-for-project-approval-on-laptop-at.jpg?s=612x612&w=0&k=20&c=NHl0oT8KvfjnFafNt8yG7iF5zbj4n1i0HlcfZNQuVOY=",
 "https://media.istockphoto.com/id/1140419533/photo/young-women-working-and-used-computer-working-concept.jpg?s=612x612&w=0&k=20&c=9Z1EVkDObAtJbOVa7nKbzPiVUPfhXDyHJ2jbDMD7Vco=",
    "https://media.istockphoto.com/id/1286802141/photo/male-student-wearing-headphones-taking-online-course-training-watching-webinar-remote-seminar.jpg?s=612x612&w=0&k=20&c=qt73S_EDsfwvZUrP3480v6EovXxjDDJp0TQgAnTyiqo=",
    "https://media.istockphoto.com/id/1349104991/photo/e-learning-online-education-concept.jpg?s=612x612&w=0&k=20&c=dta2tnpaC95FdcqSy4bpp2tLzBQDTCNajXeLxNsKXoo="
  ];

  const images2 = [
   
    "https://media.istockphoto.com/id/1060814150/photo/elearning-book-as-laptop-electronic-book-concept.jpg?s=612x612&w=0&k=20&c=B2HKFSyPHmkasJxQGOsFyJhqrEOo7e9beW6fDAQe2RE=",
    "https://media.istockphoto.com/id/1288092444/photo/student-using-laptop-having-online-class-with-teacher.jpg?s=612x612&w=0&k=20&c=hI_apluBFBOEzizTYeXzFd26r9Z6QyawI8_Ta9-_sDM=",
    "https://media.istockphoto.com/id/963370628/photo/shopping-buttonkeyboard-with-training-button-highlighted.jpg?s=612x612&w=0&k=20&c=JGqpfcOKmFVrsl0hpEu1Ky6faUgfMSrp84lscqHplCk=",
    "https://media.istockphoto.com/id/1177184973/photo/e-learning-for-student-and-university-concept.jpg?s=612x612&w=0&k=20&c=jy2_wlYLK6jMuTzRgGca7mkI8RLqVcpHm7WtsI8Utgk=",
    "https://media.istockphoto.com/id/1347888376/photo/woman-using-mobile-smartphone-with-connection-data-transfer-data-big-data-and-internet-of.jpg?s=612x612&w=0&k=20&c=aKvxPbISfZcpH-r17RllBqY4pVkqSMb-S_mBJlV0UYI=",
    "https://media.istockphoto.com/id/1263424631/photo/e-learning-online-education-or-internet-encyclopedia-concept-open-laptop-and-book-compilation.jpg?s=612x612&w=0&k=20&c=2xih46TXLwHnvgU5FaY9FRRc3F62MpzL__S8O6v2jRU=",
   
    "https://media.istockphoto.com/id/2151038146/photo/thinking-concentrated-man-studying-sitting-inside-office-at-workplace-businessman-watching.jpg?s=612x612&w=0&k=20&c=ubmXncNJKPVwy7uv4vsuCBQ756ZzihXVHjYkygJDDkY=",
  ];

  const Card = ({ icon, title = "", description = "" }) => (
    <div className="flex flex-col justify-start items-start">
      <div className="flex justify-start text-[20px] gap-x-2 items-center">
        {icon}
        <h2 className="font-semibold text-blue-600">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <section className="bg-white py-12 md:py-2 flex justify-between items-start w-full px-8 gap-6 flex-wrap lg:flex-nowrap overflow-hidden">
      <div className="flex flex-col justify-start items-start w-full lg:w-[45%] py-10">
        <h2 className="text-[20px] uppercase font-semibold text-blue-600">Refer Me Group</h2>
        <p className="text-[30px] font-bold leading-tight text-gray-900 py-2 uppercase">
          Our Anthem is ‘We’ll Lead with Innovative Excellence.’
        </p>
        <p className="py-5 text-gray-600">
        Refer Me Group is a forward-thinking professional training and development platform committed to bridging skill gaps and empowering individuals to thrive in today’s global job market. Our goal is to deliver high-impact learning through innovative, hands-on, and industry-relevant training programs across technology, management, and business domains.
<br/>
Founded by a team of passionate entrepreneurs, Refer Me Group was born out of the need to create a smarter, more effective pathway for professionals to upskill. Our programs are led by seasoned industry experts who bring real-world knowledge into every session — inspiring learners to meet career challenges with confidence.
        </p>

        <div className="w-full grid grid-cols-2 my-3 gap-x-5 gap-y-3">
          <Card
            icon={<RiMedalLine size={20} className="text-blue-600" />}
            title="Career-Focused Learning"
            description="Every course is designed to bridge skills with industry demand."
          />
          <Card
            icon={<RiMedalLine size={20} className="text-blue-600" />}
            title="Personalized Paths"
            description="Training programs tailored to your goals and background."
          />
          <Card
            icon={<RiMedalLine size={20} className="text-blue-600" />}
            title="Trusted Content"
            description="Learn from certified experts with real-world experience."
          />
          <Card
            icon={<RiMedalLine size={20} className="text-blue-600" />}
            title="Learner-First Approach"
            description="Your growth is our mission — at every stage of your journey."
          />
        </div>
      </div>

      <div className="w-full lg:w-[45%] pt-10 flex justify-center items-center gap-2">
        {/* Slider 1 - Slanted and Bottom to Top */}
        <div className="w-1/2 transform -skew-x-0 overflow-hidden">
          <Swiper
            direction="vertical"
            slidesPerView={2.5}
            spaceBetween={0}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-[570px] bg-gray-100"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index} className="!flex !justify-center !py-0 !my-0">
                <img
                  src={item}
                  alt={`Slide ${index + 1}`}
                  className="rounded-none w-full h-48 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slider 2 - Slanted and Top to Bottom */}
        <div className="w-1/2 transform -skew-x-0 overflow-hidden">
          <Swiper
            direction="vertical"
            slidesPerView={2}
            spaceBetween={25}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 0,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-[570px] bg-gray-100"
          >
            {images2.map((item, index) => (
              <SwiperSlide key={index} className="!flex !justify-center">
                <img
                  src={item}
                  alt={`Slide ${index + 1}`}
                  className="rounded-none w-full h-48 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;