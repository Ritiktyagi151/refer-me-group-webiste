import React from "react";

const logos = [
  "/assets/clients/Frame 423.png","/assets/clients/Frame 424.png","/assets/clients/Frame 425.png","/assets/clients/Frame 426.png","/assets/clients/Frame 427.png","/assets/clients/Frame 428.png","/assets/clients/Frame 429.png","/assets/clients/Frame 430.png","/assets/clients/Frame 431.png","/assets/clients/Frame 432.png","/assets/clients/Frame 433.png","/assets/clients/Frame 434.png","/assets/clients/Frame 435.png","/assets/clients/Frame 436.png","/assets/clients/Frame 437.png","/assets/clients/Frame 438.png",
  "/assets/clients/Frame 439.png","/assets/clients/Frame 440.png","/assets/clients/Frame 441.png","/assets/clients/Frame 442.png","/assets/clients/Frame 443.png","/assets/clients/Frame 444.png","/assets/clients/Frame 445.png","/assets/clients/Frame 446.png","/assets/clients/Frame 447.png","/assets/clients/Frame 448.png","/assets/clients/Frame 449.png","/assets/clients/Frame 450.png",
 
];

const HiringSection = () => {
  return (
    <section className="py-20 px-4 md:px-16 bg-gradient-to-br from-gray-100 to-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* LEFT TEXT */}
        <div className="md:w-1/3 text-left">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            <span className="text-purple-700"> Placement Partners </span> Who Value <br />
             <span className="text-purple-700 font-semibold">Our Candidates</span>
          </h2>
        </div>

        {/* RIGHT GRID */}
        <div className="md:w-2/3 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-0 bg-white rounded shadow hover:shadow-md transition"
            >
              <img
                src={`${logo}`}
                alt={logo}
                className="max-h-16 object-contain"
              /> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
