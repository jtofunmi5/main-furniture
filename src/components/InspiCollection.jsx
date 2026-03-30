import React from 'react';
import collection1 from "../assets/collection1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const InspiCollection = () => {
  return (
    <section className="my-12 px-4 md:px-12">
      {/* Header Section */}
      <div className="flex flex-col mb-10 text-center justify-center items-center space-y-2">
        <h1 className="font-bold text-2xl md:text-4xl text-[#054C73]">
          Inspiration Collection
        </h1>
        <p className="text-gray-600 max-w-md md:max-w-2xl text-sm md:text-base">
          Breathe Life Into Your Living Space and let Your Space Tell Your Story.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* First Image - Slight offset on desktop for that "organic" look */}
        <div className="md:mt-12 overflow-hidden rounded-2xl shadow-lg">
          <img 
            className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500" 
            src={collection1} 
            alt="Living room inspiration 1"
          />
        </div>

        {/* Second Image - Center/Tallest */}
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img 
            className="w-full h-[450px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-500" 
            src={img2} 
            alt="Living room inspiration 2"
          />
        </div>

        {/* Third Image - Slight offset on desktop */}
        <div className="md:mt-8 overflow-hidden rounded-2xl shadow-lg">
          <img 
            className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500" 
            src={img3} 
            alt="Living room inspiration 3"
          />
        </div>
      </div>
    </section>
  );
};

export default InspiCollection;