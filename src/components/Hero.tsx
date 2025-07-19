import React from 'react';
import bannervideo from './bannervideo.mp4';  // सही path अपने हिसाब से रख

const Hero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">

      {/* Local Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none scale-105 transition-transform duration-[20s] ease-linear hover:scale-110"
        src={bannervideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Enhanced Gradient Overlay with Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/30 to-orange-900/40 dark:from-black/80 dark:via-purple-900/50 dark:to-orange-900/60 animate-pulse"></div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-0"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce delay-3000"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-orange-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Animated Border Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80 animate-pulse delay-1000"></div>

      {/* Text Content with Enhanced Design */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="transform transition-all duration-1000 ease-out animate-fadeInUp">
          {/* Glassmorphism Background Card */}
          <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-3xl p-8 md:p-12 border border-white/20 dark:border-white/10 shadow-2xl mx-auto max-w-4xl hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-orange-500/20 hover:shadow-2xl">
            
            {/* Decorative Top Element */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight tracking-tight">
              <span className="inline-block animate-slideInLeft">Affordable Laundry &</span>
              <br />
              <span className="inline-block animate-slideInRight delay-300">Dry Cleaning Rates</span>
              <br />
              <span className="inline-block animate-slideInLeft delay-600">Near Me -</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 dark:from-orange-300 dark:via-orange-400 dark:to-orange-200 animate-gradient-x inline-block animate-slideInUp delay-900 drop-shadow-lg">
                No Hidden Costs
              </span>
            </h1>

            {/* Decorative Bottom Elements */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;