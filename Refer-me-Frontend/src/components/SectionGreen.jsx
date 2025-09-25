import React from "react";

const SectionGreen = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255, 245, 157, 0.6), rgba(255, 255, 255, 0.3)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/30 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row border border-white/20">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Packaging With A Purpose –{" "}
              <span className="text-green-600">Keeping It Green!</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              At JSH Packaging, we strive to be the leading packaging company in
              India and beyond, driving innovation and sustainability in everything
              we do. Our focus is on using recyclable, reusable, and biodegradable
              materials while actively reducing greenhouse gas emissions. We are
              actively reducing our carbon footprint by setting science-based goals to
              lower greenhouse gas emissions. Our approach prioritizes responsible
              resource management, using materials that are recyclable, reusable, or
              biodegradable. Additionally, we are dedicated to 100% workplace safety
              and striving to be an employer of choice.
            </p>
            {/* Highlighted Points */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold text-base border-b-2 border-orange-500 inline-block pb-1">
                    Eco-Friendly Materials
                  </p>
                  <p className="text-gray-600 text-base mt-2">
                    We prioritize biodegradable, recyclable, and reusable materials.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold text-base border-b-2 border-orange-500 inline-block pb-1">
                    Sustainable Solutions
                  </p>
                  <p className="text-gray-600 text-base mt-2">
                    Adapts to various industries like food, electronics, and pharma.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side: Background Image */}
          <div
            className="lg:w-1/2 h-64 lg:h-auto bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SectionGreen;