import React, { useState, useEffect, useRef } from 'react';

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('dryclean');
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const tabsRef = useRef(null);
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);

  const tabs = [
  { id: 'dryclean', label: 'Dry-clean', icon: '🧥' },
  { id: 'premium', label: 'Premium Service', icon: '👕' },
  { id: 'ironing', label: 'Premium Ironing', icon: '🔥' },
  { id: 'express', label: 'Express Delivery', icon: '⚡' }
];

  useEffect(() => {
    // Dynamically load GSAP from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      if (window.gsap) {
        initAnimations();
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initAnimations = () => {
    const gsap = window.gsap;
    
    // Set initial states
    gsap.set([titleRef.current, descriptionRef.current, tabsRef.current], {
      opacity: 0,
      y: 50
    });

    // Create timeline for entrance animations
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.to(backgroundRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(tabsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.4");

    // Floating animation for background elements
    gsap.to(containerRef.current, {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  };

  const handleTabChange = (tabId) => {
    if (window.gsap && activeTab !== tabId) {
      const gsap = window.gsap;
      
      // Animate tab switch with scale effect
      gsap.fromTo(tabsRef.current, 
        { scale: 1 },
        { 
          scale: 1.02, 
          duration: 0.15,
          ease: "power2.out",
          yoyo: true,
          repeat: 1
        }
      );

      // Pulse effect on title
      gsap.fromTo(titleRef.current,
        { scale: 1 },
        {
          scale: 1.01,
          duration: 0.3,
          ease: "power2.out",
          yoyo: true,
          repeat: 1
        }
      );
    }
    setActiveTab(tabId);
  };

  const handleTabHover = (e) => {
    if (window.gsap) {
      const gsap = window.gsap;
      gsap.to(e.target, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleTabLeave = (e) => {
    if (window.gsap) {
      const gsap = window.gsap;
      gsap.to(e.target, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <section ref={containerRef} className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div ref={backgroundRef} className="absolute inset-0 opacity-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Get The Best Rates with WearWisely dryclean
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            At WearWisely dryclean, we believe in transparent pricing. You deserve to know exactly what you're paying for,
            whether it's regular dryclean, organic dry cleaning, or on-demand ironing. Besides competitive rates and 
            transparent dryclean and dry cleaning prices, we also offer real-time updates from a dryclean near you.
            <span className="font-semibold text-blue-600 dark:text-blue-400"> No surcharge, no hidden pricing!</span>
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center mb-12">
          <div 
            ref={tabsRef}
            className="flex flex-wrap justify-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-2"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                onMouseEnter={handleTabHover}
                onMouseLeave={handleTabLeave}
                className={`group flex items-center gap-3 px-6 py-4 font-medium rounded-xl transition-all duration-300 transform relative overflow-hidden ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background for active tab */}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 animate-pulse"></div>
                )}
                
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {tab.icon}
                </span>
                <span className="relative z-10 whitespace-nowrap">
                  {tab.label}
                </span>
                
                {/* Hover effect indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform transition-transform duration-300 ${
                  activeTab === tab.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Content area with subtle animation */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-700/30 shadow-lg">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Real-time pricing on site
            </span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
    </section>
  );
};

export default ServiceTabs;