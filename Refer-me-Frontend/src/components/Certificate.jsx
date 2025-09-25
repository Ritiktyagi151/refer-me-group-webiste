import React from "react";

const Certificate = () => {
  return (

    <>
     <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Two Column Layout - 7:3 ratio */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Text (7/12 width) */}
        <div className="w-full lg:w-7/12">
          <div className=" mb-8 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              CERTIFICATE OF COMPLETION
            </h1>
            <p className="text-5xl text-gray-600 mb-6 font-semibold">
              Show the world you're
              <span className="text-blue-600"> job ready</span>
            </p>

            <p className="text-gray-700 mb-6">
          We’re trusted by thousands of learners across Australia and beyond who are launching new careers and advancing their skills. By enrolling in our comprehensive courses, you’ll gain practical, industry-relevant knowledge designed to prepare you for real-world challenges. After completing in-depth training and successfully passing our rigorous, highly respected final exam, you’ll be awarded a Certificate of Completion—an official credential that validates your skills and commitment.

            </p>

            <p className="text-gray-700 mb-6">
              
This certificate not only demonstrates your readiness to excel in entry-level roles but also boosts your confidence and helps you stand out in today’s competitive job market. Whether you’re starting fresh or switching careers, our certificate serves as a trusted proof of your expertise to employers and industry professionals alike.
            </p>

            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md mb-8">
              Start for Free →
            </button> */}

            {/* <div className="flex flex-col lg:flex-row gap-4 items-center justify-center ">
              <div className="w-full lg:w-6/12  flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-gray-800">4.8</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-gray-600">
                  CareerKarma | 1005 reviews
                </span>
              </div>
              <div className="w-full lg:w-6/12 flex items-center justify-center gap-2 mt-0">
                <span className="text-2xl font-bold text-gray-800">4.9</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-gray-600">
                  CourseReport | 574 reviews
                </span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Column - Image (3/12 width) */}
        <div className="w-full lg:w-5/12 flex items-center justify-center">
          {/* Certificate Image Placeholder */}
          <div className="bg-gray-100 border-2  w-full   flex items-center justify-center">
            <div className="text-center p-4">
              <img src="/assets/banners/b7.jpg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
   
  );
};

export default Certificate;
