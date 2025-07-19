import React, { useState, useEffect } from 'react';
import shoesImage from './shoespiccc bg.webp';
import { FaCheckCircle, FaShieldAlt, FaClock, FaRecycle, FaStar, FaQuestionCircle, FaPlay, FaHeart, FaAward, FaTruck, FaThumbsUp } from 'react-icons/fa';

const ShoePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCallbackForm = () => {
    window.dispatchEvent(new Event('showCallBackPopup'));
  };

  // Image carousel data
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
      title: 'Premium Shoe Cleaning',
      description: 'Professional cleaning and conditioning for all shoe types'
    },
    {
      url: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
      title: 'Suede & Nubuck Restoration',
      description: 'Specialized cleaning techniques for delicate materials'
    },
    {
      url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80',
      title: 'White Sneaker Revival',
      description: 'Advanced whitening and stain removal technology'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pricingData = [
    { category: "Ankle", original: 1099, discounted: 300 },
    { category: "Ankle Premium", original: 1650, discounted: 400 },
    { category: "Belle", original: 329, discounted: 200 },
    { category: "Belle Designer", original: 389, discounted: 250 },
    { category: "Leather", original: 549, discounted: 300 },
    { category: "Leather Premium", original: 819, discounted: 400 },
    { category: "Boots", original: 859, discounted: 400 },
    { category: "Slippers", original: 129, discounted: 97 },
    { category: "Sports", original: 470, discounted: 200 },
    { category: "Sports Premium", original: 699, discounted: 250 },
    { category: "Sneakers", original: 519, discounted: 200 },
    { category: "Jordan Shoes", original: 649, discounted: 250 },
    { category: "Kids Shoe", original: 379, discounted: 150 },
    { category: "Suede", original: 769, discounted: 350 },
  ];

  const services = [
    { icon: <FaCheckCircle className="text-blue-500 text-3xl" />, title: "Deep Cleaning", description: "Removes tough stains and odors from deep within the material", delay: "delay-100" },
    { icon: <FaShieldAlt className="text-blue-500 text-3xl" />, title: "Protection", description: "Specialized coatings to protect against water and dirt", delay: "delay-200" },
    { icon: <FaClock className="text-blue-500 text-3xl" />, title: "Quick Turnaround", description: "Most services completed within 3-5 business days", delay: "delay-300" },
    { icon: <FaRecycle className="text-blue-500 text-3xl" />, title: "Eco-Friendly", description: "Using biodegradable and non-toxic cleaning solutions", delay: "delay-400" },
  ];

  const processSteps = [
    { icon: <FaCheckCircle className="text-green-500 text-2xl" />, title: "Inspection", description: "Detailed assessment of shoe condition and materials" },
    { icon: <FaHeart className="text-red-500 text-2xl" />, title: "Specialized Cleaning", description: "Material-specific cleaning process" },
    { icon: <FaAward className="text-yellow-500 text-2xl" />, title: "Quality Check", description: "Final inspection and quality assurance" },
    { icon: <FaTruck className="text-blue-500 text-2xl" />, title: "Delivery", description: "Free doorstep delivery of your refreshed shoes" }
  ];

  const faqs = [
    { question: "Is shoe cleaning safe for leather shoes?", answer: "Yes, we use specialized leather-safe solutions that clean while maintaining the material's integrity and providing maximum protection and shine." },
    { question: "How long does the shoe cleaning process take?", answer: "Typically, shoe cleaning and repair are completed within 3-7 working days, depending on the service type and current workload." },
    { question: "Do you offer pickup and delivery services?", answer: "Yes, we provide convenient pickup and delivery options across Delhi. Contact us to check availability in your area." },
    { question: "Can you repair damaged soles or heels?", answer: "Absolutely! We offer complete sole and heel replacement services using high-quality materials that match your shoes' original specifications." },
    { question: "How often should I get my shoes professionally cleaned?", answer: "We recommend professional cleaning every 3-6 months for regular wear, or more frequently for light-colored or premium materials." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans overflow-hidden">
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/4 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></div>
      </div>

      {/* Hero Banner with Enhanced Animation */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-x"></div>
        
        {/* Animated background shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            Premium Shoe Cleaning & Restoration
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up delay-300">
            Professional care for your valuable footwear with free pickup and delivery
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-500">
            <button 
              onClick={openCallbackForm}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl"
            >
              <FaPlay className="inline mr-2" />
              Request Call Back
            </button>
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Call: +91-7599764668
            </button>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="relative max-w-7xl mx-auto py-16 px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Animation */}
      <section id="services" data-animate className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Expert Care for Your Valued Footwear
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Your shoes deserve specialized attention. Our certified technicians clean, condition, and protect your footwear using premium products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                isVisible.services ? `animate-fade-in-up ${service.delay}` : 'opacity-0'
              }`}
            >
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cleaning Process</h2>
            <p className="text-gray-700 dark:text-gray-300">From pickup to delivery, we ensure quality at every step</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg mb-4 transform hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Price Table */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-700 dark:text-gray-300">Competitive rates for premium shoe cleaning services</p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="p-6 text-left">Shoe Type</th>
                  <th className="p-6 text-right">Original Price</th>
                  <th className="p-6 text-right">Discounted Price</th>
                  <th className="p-6 text-right">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {pricingData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
                    <td className="p-6 font-medium">{item.category}</td>
                    <td className="p-6 text-right line-through text-gray-500">₹{item.original}</td>
                    <td className="p-6 text-right font-bold text-blue-600 dark:text-blue-400 text-lg">₹{item.discounted}</td>
                    <td className="p-6 text-right text-green-600 dark:text-green-400 font-semibold">₹{item.original - item.discounted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={openCallbackForm}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaStar className="mr-2" /> Get Special Discount
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-700 dark:text-gray-300">Trusted by thousands of shoe owners in Delhi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              text: "My expensive leather shoes had oil stains that I thought were permanent. WearWisely removed them completely and made them look brand new!",
              name: "Rajiv Malhotra",
              location: "South Delhi",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            },
            {
              text: "The convenience of free pickup and delivery along with excellent cleaning service keeps me coming back. My suede shoes have never looked better.",
              name: "Priya Singh",
              location: "Gurgaon",
              image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400 animate-pulse" style={{ animationDelay: `${star * 100}ms` }} />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
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

      {/* Enhanced FAQs */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2">
            <FaQuestionCircle className="text-blue-500 text-3xl animate-bounce" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="group-hover:text-blue-600 transition-colors duration-300 text-lg">{faq.question}</span>
                <svg className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-all duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 dark:text-gray-300 pl-2 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="relative bg-gradient-to-br from-blue-700 via-purple-700 to-blue-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 animate-pulse"></div>
        
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Refresh Your Shoes?</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up delay-200">Schedule a pickup today and experience professional shoe care</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <button 
              onClick={openCallbackForm}
              className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl"
            >
              <FaThumbsUp className="inline mr-2" />
              Book Service Now
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default ShoePage;