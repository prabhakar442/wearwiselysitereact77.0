import React from 'react';
import bannervideo from './bannervideo.mp4';  // सही path अपने हिसाब से रख

const Hero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">

      {/* Local Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src={bannervideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-black dark:bg-opacity-70"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
          Affordable Laundry & Dry Cleaning Rates Near Me - 
          <br />
          <span className="text-orange-400 dark:text-orange-300">No Hidden Costs</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
