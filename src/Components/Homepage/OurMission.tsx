"use client";
import React, { useEffect, useRef } from 'react';

const OurMission: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (video) {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollProgress = Math.min(scrollY / maxScroll, 1);
        video.currentTime = video.duration * scrollProgress;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <h1 className='font-bold text-4xl text-white'>OUR MISSION </h1>
    
    <div className="relative overflow-hidden h-screen flex items-center justify-center font-serif text-justify">
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full shadow-lg  rounded-lg glow"
        muted
        playsInline
        loop
        preload="auto"
        src="/assets/img/bgscrool2.mp4"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full  p-4">
       <h4 className='text-white font-bold mt-10'>mission one</h4>
       <p className='text-sm md:text-xl text-gray-300 leading-relaxed mb-10 px-2 md:px-24'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table. Together,
            we work cohesively, driven by a shared goal  
          </p>
          <h4 className='text-white font-bold'>mission two</h4>
          <p className='text-sm md:text-xl text-gray-300 leading-relaxed mb-10 px-2 md:px-24'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table. Together,
            we work cohesively, driven by a shared goal  
          </p>
          <h4 className='text-white font-bold'>mission two</h4>
          <p className='text-sm md:text-xl text-gray-300 leading-relaxed mb-10 px-2 md:px-24'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table. Together,
            we work cohesively, driven by a shared goal  
          </p>
          <h4 className='text-white font-bold'>mission two</h4>
          <p className='text-sm md:text-xl text-gray-300 leading-relaxed mb-10 px-2 md:px-24'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table. Together,
            we work cohesively, driven by a shared goal  
          </p>
          
      </div>
    </div>
    </>
  );
};

export default OurMission;
