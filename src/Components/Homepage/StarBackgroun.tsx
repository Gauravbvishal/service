import React from 'react';
import "./StarBackground.css"; // Ensure your CSS file is correctly imported
import { GlobeDemo } from './GlobeDemo'; // Import your GlobeDemo component

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="star-background"></div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      
      {/* Globe Component */}
      <div className="absolute inset-0 z-10">
        <GlobeDemo />
      </div>

      <div className="container relative z-20 flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-2xl md:text-9xl font-bold mb-6 text-transparent gap-20 heading ">
            R S B
          </h1>
          <h4 className="text-3xl  mb-5 font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 shadow-lg">
            Revenue Service Booster
          </h4>
          <h4 className="text-lg mb-5 md:px-32 text-gray-200 shadow-md p-4 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, officiis. Dicta provident Incidunt consectetur ducimus consectetur nihil, fugit reprehenderit  consectetur nihil, fugit reprehenderit 
          </h4>
          <div className="grid gap-2 sm:flex justify-center">
            <button type="button" className="bg-white text-black btn-lg px-4 py-2 rounded shadow-lg transition-transform transform hover:scale-105">
              EXPLORE
            </button>
            <button type="button" className="border border-white text-white btn-lg px-4 py-2 rounded shadow-lg transition-transform transform hover:scale-105">
              VISIT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
