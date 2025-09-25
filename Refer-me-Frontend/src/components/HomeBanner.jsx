import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Mobile-specific slides
const mobileSlides = [
  {
    id: 1,
    title: "Mobile Summer Collection",
    subtitle: "New Arrivals 2023",
    image: "/assets/banner-new/mobile-view-RMG1.jpg",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Mobile Winter Special",
    subtitle: "Up to 50% Off",
    image: "/assets/banner-new/mobile-view-RMG2.jpg",
    cta: "Discover More",
  },
  {
    id: 3,
    title: "Mobile Limited Edition",
    subtitle: "Exclusive Designs",
    image: "/assets/banner-new/mobile-view-RMG3.jpg",
    cta: "View Collection",
  },
  {
    id: 4,
    title: "Mobile Limited Edition",
    subtitle: "Exclusive Designs",
    image: "/assets/banner-new/mobile-view-RMG4.jpg",
    cta: "View Collection",
  },
];

// Desktop-specific slides
const desktopSlides = [
  {
    id: 1,
    title: "Desktop Summer Collection",
    subtitle: "New Arrivals 2023",
    image: "/assets/banner-new/RMG1.jpg",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Desktop Winter Special",
    subtitle: "Up to 50% Off",
    image: "/assets/banner-new/RMG2.jpg",
    cta: "Discover More",
  },
  {
    id: 3,
    title: "Desktop Limited Edition",
    subtitle: "Exclusive Designs",
    image: "/assets/banner-new/RMG3.jpg",
    cta: "View Collection",
  },
  {
    id: 4,
    title: "Desktop Limited Edition",
    subtitle: "Exclusive Designs",
    image: "/assets/banner-new/RMG4.jpg",
    cta: "View Collection",
  },
];

const HomeBanner = () => {
  return (
    <>
      <section className="pb-12 px-2 mt-1 sm:px-4 lg:py-0 bg-gray-50 pt-3 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-0 sm:-mx-4 lg:-mx-8">
            {/* Left column (8/12 width) */}
            <div className="w-full lg:w-8/12 px-0 sm:px-0 mb-4 lg:mb-0">
              <div className="relative rounded-xl overflow-hidden h-full min-h-[300px] sm:min-h-[400px]">
                {/* Mobile Swiper (hidden on desktop) */}
                <div className="lg:hidden">
                  <Swiper
                    modules={[Autoplay, EffectFade, Navigation]}
                    spaceBetween={30}
                    effect={"fade"}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    className="h-full"
                  >
                    {mobileSlides.map((slide) => (
                      <SwiperSlide key={slide.id} className="relative">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Desktop Swiper (hidden on mobile) */}
                <div className="hidden lg:block">
                  <Swiper
                    modules={[Autoplay, EffectFade, Navigation]}
                    spaceBetween={30}
                    effect={"fade"}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    className="h-full"
                  >
                    {desktopSlides.map((slide) => (
                      <SwiperSlide key={slide.id} className="relative">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            {/* Right column (4/12 width) */}
            <div className="w-full lg:w-4/12 px-2 sm:px-4">
              <div className="grid gap-3 sm:gap-4 h-full">
                {/* First promotional box */}
                <div className="relative rounded-xl min-h-[150px] sm:min-h-[190px] h-full text-white overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/banners/sb1.webp')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-indigo-800/70"></div>
                  <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-xs sm:text-sm font-medium">
                        REFER ME GROUP
                      </span>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold mt-3 uppercase tracking-wide text-center px-4 text-gray-50 shadow-lg">
                        Because Getting Hired Should Reflect Who You Truly Are —
                        And Who Stands Behind You.
                      </h3>
                    </div>
                    <button className="mt-2 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-white text-blue-600 text-xs sm:text-sm font-medium rounded-full hover:bg-gray-100 transition w-fit">
                      About us
                    </button>
                  </div>
                </div>

                {/* Second promotional box */}
                <div className="relative rounded-xl min-h-[150px] sm:min-h-[190px] h-full text-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/gifs/4.gif')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-amber-700/30"></div>
                  <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-xs sm:text-sm font-medium uppercase">
                        We’re more than a job platform
                      </span>
                    </div>
                    <button className="mt-2 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-white text-amber-600 text-xs sm:text-sm font-medium rounded-full hover:bg-gray-100 transition w-fit">
                      Discover Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
