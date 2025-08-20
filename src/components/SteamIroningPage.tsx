import React, { useState, useEffect, useRef } from 'react';
import { 
  FaCheckCircle, FaShieldAlt, FaClock, FaRecycle, 
  FaStar, FaPhone, FaWhatsapp, FaQuestionCircle, 
  FaPlay, FaHeart, FaAward, FaTruck, FaThumbsUp,
  FaFire, FaTshirt, FaHome, FaLeaf
} from 'react-icons/fa';

const SteamIroningPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Daily Wear');
  const [searchTerm, setSearchTerm] = useState('');
  const carouselRef = useRef(null);

  const openCallbackForm = () => {
    window.dispatchEvent(new Event('showCallBackPopup'));
  };

  // Mock image URLs - replace with your actual imports
  const carouselImages = [
    {
      url: 'https://imgs.search.brave.com/StqTgaL3oO9D63Z55Uv90FrQ3LE5IZSV441s90Boelw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/NjI1NjU1Ny9waG90/by9jbG9zZS11cC1v/Zi1hc2lhbi1jaGlu/ZXNlLWFjdGl2ZS1z/ZW5pb3Itd29tYW4t/aXJvbnMtaGVyLXNv/bi1zaGlydC1pbi10/aGUtbGl2aW5nLXJv/b20uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTVFUEdxdmdh/OHJtOXhJalA2OUVn/c3k2d3ZtNHpFcHQ5/RHZuWG9LaG9lLTg9',
      title: 'Professional Steam Ironing',
      description: 'Crisp, wrinkle-free finish for all your garments'
    },
    {
      url: 'https://imgs.search.brave.com/EvlSyy_UKAIBWXQpg7gJTCLo-9bZLW2C3O6-JEeWGgI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI0/OTg4NTk4OC9waG90/by9jbG9zZXVwLW9u/LXdvbWFuLWNsZWFu/aW5nLWlyb24td2l0/aC1jbG90aC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bkh5/X1AwNzhUYmpXbWI4/OHBnMzVBdWhfcl8y/cUVEdG01QnAxdVhh/eXpsND0',
      title: 'Express Service',
      description: 'Quick turnaround for your urgent ironing needs'
    },
    {
      url: 'https://imgs.search.brave.com/qoecgzV2I1BwjqDflES0r2ZpO0Z75ThlkJlzJUXHJDE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlLmNv/bS90aG1iL2RQNl9T/RjBwZU56MTZqTlJR/Z2FTZV9QNm9GZz0v/Zml0LWluLzE1MDB4/MjY2OC9maWx0ZXJz/Om5vX3Vwc2NhbGUo/KTptYXhfYnl0ZXMo/MTUwMDAwKTpzdHJp/cF9pY2MoKS9zcHIt/aXJvbnMtYXVnLTI0/LXRlc3QtY2hpLWVs/ZWN0cmljLWVicm9j/a29iLTAwMi0yMi03/MWU4OWNmYTU2MmM0/OWZhYjA0NDE4M2Jl/Njg2YjIwOC5qcGVn',
      title: 'Eco-Friendly Process',
      description: 'Steam technology that is gentle on fabrics and environment'
    }
  ];

  const pricingData = {
  "Daily Wear": [
    { "item": "Shirt", "rate": 40 },
    { "item": "Shirt Designer", "rate": 50 },
    { "item": "T-Shirt", "rate": 40 },
    { "item": "Ladies Top", "rate": 40 },
    { "item": "Trouser / Pant", "rate": 40 },
    { "item": "Jeans", "rate": 40 },
    { "item": "Skirt Half", "rate": 50 },
    { "item": "Skirt Full", "rate": 100 },
    { "item": "Dress", "rate": 100 },
    { "item": "Dress Designer", "rate": 120 },
    { "item": "Jump Suit R", "rate": 100 },
    { "item": "Gown Plain", "rate": 150 },
    { "item": "Gown M", "rate": 195 },
    { "item": "Gown H", "rate": 200 },
    { "item": "Kids Dress", "rate": 50 }
  ],
  "Ethnic Wear": [
    { "item": "Payjama / Salwar / Legging", "rate": 40 },
    { "item": "Plazo Plain", "rate": 50 },
    { "item": "Plazo H", "rate": 100 },
    { "item": "Kurta / Kameez", "rate": 40 },
    { "item": "Kurta / Kameez Work", "rate": 55 },
    { "item": "Kurta / Kameez Light Work", "rate": 50 },
    { "item": "Kurta Kameez Work H", "rate": 70 },
    { "item": "Sharara R", "rate": 120 },
    { "item": "Sharara H", "rate": 150 },
    { "item": "Dupatta", "rate": 30 },
    { "item": "Dupatta H", "rate": 50 },
    { "item": "Blouse", "rate": 30 },
    { "item": "Blouse H", "rate": 40 },
    { "item": "Lehnga H", "rate": 250 },
    { "item": "Lengnga R", "rate": 200 },
    { "item": "Bridal Gown", "rate": 250 },
    { "item": "Choli R", "rate": 40 },
    { "item": "Chaniya R", "rate": 60 },
    { "item": "Anaekali Suit", "rate": 150 },
    { "item": "Shrug Short", "rate": 40 },
    { "item": "Kids Kurta", "rate": 30 },
    { "item": "Kids Sherwani", "rate": 100 }
  ],
  "Woolen Wear": [
    { "item": "Sweat Shirt", "rate": 50 },
    { "item": "Sweat Pants", "rate": 50 },
    { "item": "Sweater Half", "rate": 40 },
    { "item": "Sweater Full", "rate": 60 },
    { "item": "Waist Coat", "rate": 60 },
    { "item": "Coat", "rate": 100 },
    { "item": "Coat Designer", "rate": 120 },
    { "item": "Over Coat", "rate": 120 },
    { "item": "Over Coat Woolen", "rate": 150 },
    { "item": "Half Koti R", "rate": 60 },
    { "item": "Half Koti H", "rate": 80 },
    { "item": "Jacket Half", "rate": 70 },
    { "item": "Jacket Half H", "rate": 70 },
    { "item": "Jacket Full", "rate": 90 },
    { "item": "Shawl", "rate": 60 },
    { "item": "Shawl Fancy", "rate": 80 }
  ],
  "Household Items": [
    { "item": "Bedsheet S", "rate": 50 },
    { "item": "Bedsheet D", "rate": 80 },
    { "item": "Bed Cover S", "rate": 50 },
    { "item": "Bed Cover D", "rate": 80 },
    { "item": "Pillow Cover", "rate": 20 },
    { "item": "Cushion Cover", "rate": 20 },
    { "item": "Curtain Window", "rate": 30 },
    { "item": "Curtain Door", "rate": 50 },
    { "item": "Curtain Net", "rate": 60 }
  ]
};

  const filteredItems = pricingData[activeCategory].filter(item =>
    item.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Auto-rotate carousel with pause on hover
  useEffect(() => {
    let interval;
    const startInterval = () => {
      interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % carouselImages.length);
      }, 5000);
    };

    startInterval();

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mouseenter', () => clearInterval(interval));
      carousel.addEventListener('mouseleave', startInterval);
    }

    return () => {
      clearInterval(interval);
      if (carousel) {
        carousel.removeEventListener('mouseenter', () => clearInterval(interval));
        carousel.removeEventListener('mouseleave', startInterval);
      }
    };
  }, [carouselImages.length]);

  // Intersection Observer for animations with cleanup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const services = [
    { icon: <FaCheckCircle className="text-blue-500 text-3xl" />, title: "Professional Ironing", description: "Expert care for all fabric types", delay: "delay-100" },
    { icon: <FaFire className="text-red-500 text-3xl" />, title: "Steam Technology", description: "Deep-penetrating steam removes wrinkles", delay: "delay-200" },
    { icon: <FaClock className="text-blue-500 text-3xl" />, title: "Fast Service", description: "Same-day service available", delay: "delay-300" },
    { icon: <FaLeaf className="text-green-500 text-3xl" />, title: "Eco-Friendly", description: "Water-efficient steam process", delay: "delay-400" },
  ];

  const processSteps = [
    { icon: <FaCheckCircle className="text-green-500 text-2xl" />, title: "Inspection", description: "Assessment of fabric type and condition" },
    { icon: <FaFire className="text-red-500 text-2xl" />, title: "Steam Treatment", description: "Professional steam application" },
    { icon: <FaTshirt className="text-blue-500 text-2xl" />, title: "Precision Ironing", description: "Careful pressing for perfect finish" },
    { icon: <FaTruck className="text-blue-500 text-2xl" />, title: "Delivery", description: "Free doorstep delivery" }
  ];

  const faqs = [
    { question: "What is steam ironing and how is it different from regular ironing?", answer: "Steam ironing uses pressurized steam to penetrate fabrics deeply, removing wrinkles more effectively than traditional dry ironing while being gentler on delicate materials." },
    { question: "Can steam ironing remove stubborn wrinkles from stored clothes?", answer: "Yes, our professional steam irons generate high-temperature steam that effectively removes even deep-set wrinkles from clothes that have been stored or packed." },
    { question: "Is steam ironing safe for all types of fabrics?", answer: "Our technicians are trained to adjust temperature and steam levels according to fabric type, making it safe for everything from delicate silks to heavy cottons." },
    { question: "How long does steam ironing service take?", answer: "Standard service takes 24-48 hours. Express same-day service is available for urgent requirements." },
    { question: "Do you offer pickup and delivery for steam ironing?", answer: "Yes, we provide free pickup and delivery service for all steam ironing orders within our service areas." },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans overflow-hidden">
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full animate-pulse opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: ['bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400'][Math.floor(Math.random() * 4)],
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-x" />
        
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            Professional Steam Ironing Services
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up delay-300">
            Crisp, wrinkle-free garments with free pickup and delivery
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-500">
            <button 
              onClick={openCallbackForm}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <FaPlay className="mr-2" />
              Request Call Back
            </button>
            <a 
              href="tel:+918800414848"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
            >
              <FaPhone className="mr-2" />
              Call: +91-8800414848
            </a>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="relative max-w-7xl mx-auto py-16 px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl" ref={carouselRef}>
          <div className="relative h-96 md:h-[500px]">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8">
                    <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 animate-slide-up">
                      {image.title}
                    </h2>
                    <p className="text-white/90 text-lg animate-slide-up delay-200">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Steam Ironing Services</h2>
          <p className="text-gray-700 dark:text-gray-300">Professional care for all your garments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 py-20 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <FaFire className="text-white text-2xl" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Our Steam Ironing Process
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional care that delivers crisp, wrinkle-free results every time
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connecting line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 transform -translate-x-1/2 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                  </div>
                )}
                
                {/* Step Card */}
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:scale-105 z-10 border border-gray-100 dark:border-gray-700">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl flex items-center justify-center shadow-inner group-hover:shadow-lg transition-all duration-300 transform group-hover:rotate-6">
                      <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 px-8 py-4 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-white text-sm" />
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-white text-sm" />
                </div>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <FaAward className="text-white text-sm" />
                </div>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Professional • Fast • Quality Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-700 dark:text-gray-300">Competitive rates for professional steam ironing</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(pricingData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="p-4 sm:p-6 text-left">Item</th>
                    <th className="p-4 sm:p-6 text-right">Rate (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {filteredItems.map((item, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <td className="p-4 sm:p-6 font-medium">{item.item}</td>
                      <td className="p-4 sm:p-6 text-right font-bold text-blue-600 dark:text-blue-400">₹{item.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Rate information note */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-800 p-4">
              <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                💼 Professional steam ironing rates - Crisp finish guaranteed
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={openCallbackForm}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaStar className="mr-2" /> Get Quote Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-700 dark:text-gray-300">Trusted by thousands of customers across Delhi NCR</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              text: "My office shirts have never looked better! The steam ironing service gives them a crisp, fresh-from-the-store look every time.",
              name: "Rajiv Malhotra",
              location: "Connaught Place",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
              rating: 5
            },
            {
              text: "I was amazed at how they handled my delicate silk sarees. Perfect ironing without any damage to the fabric or embroidery.",
              name: "Priya Singh",
              location: "Saket",
              image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2">
            <FaQuestionCircle className="text-blue-500 text-3xl animate-bounce" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 dark:border-gray-700 rounded-xl p-5 transition-all duration-300 ${
                activeFaq === index ? 'bg-white/50 dark:bg-gray-700/50 shadow-md' : 'hover:border-blue-300'
              }`}
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeFaq === index}
                aria-controls={`faq-${index}`}
              >
                <span className={`font-medium text-lg ${
                  activeFaq === index ? 'text-blue-600 dark:text-blue-400' : ''
                }`}>
                  {faq.question}
                </span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    activeFaq === index ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                id={`faq-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  activeFaq === index ? 'mt-4 opacity-100 max-h-96' : 'opacity-0 max-h-0'
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300 pl-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-blue-700 via-purple-700 to-blue-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 animate-pulse" />
        
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready for Crisp, Wrinkle-Free Clothes?</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up delay-200">
            Schedule a pickup today and experience professional steam ironing
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <button 
              onClick={openCallbackForm}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 sm:px-10 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <FaThumbsUp className="mr-2" />
              Book Service Now
            </button>
            <a 
              href="tel:+918800414848"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 sm:px-10 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaPhone /> Call Now
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default SteamIroningPage;