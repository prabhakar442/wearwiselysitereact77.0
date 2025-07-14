import React from 'react';
import carpetImage from './carpetpic-bg.webp';
import { FaCheckCircle, FaShieldAlt, FaClock, FaRecycle, FaStar, FaPhone, FaWhatsapp } from 'react-icons/fa';

const CarpetPage = () => {
  const openCallbackForm = () => {
    window.dispatchEvent(new Event('showCallBackPopup'));
  };

  const pricingData = [
    { category: "Small Carpet (5x3 ft)", original: 1099, discounted: 800 },
    { category: "Medium Carpet (8x5 ft)", original: 1650, discounted: 1200 },
    { category: "Large Carpet (10x7 ft)", original: 2199, discounted: 1600 },
    { category: "Extra Large Carpet (12x9 ft)", original: 2899, discounted: 2100 },
    { category: "Persian/Rug (6x4 ft)", original: 2499, discounted: 1800 },
    { category: "Stair Carpet (per step)", original: 99, discounted: 75 },
    { category: "Office Carpet (per sq ft)", original: 25, discounted: 20 },
  ];

  const services = [
    { icon: <FaCheckCircle className="text-blue-500 text-2xl" />, title: "Deep Cleaning", description: "Removes embedded dirt, dust mites, and allergens" },
    { icon: <FaShieldAlt className="text-blue-500 text-2xl" />, title: "Stain Protection", description: "Specialized treatments against future stains" },
    { icon: <FaClock className="text-blue-500 text-2xl" />, title: "Quick Drying", description: "Advanced drying (typically 4-6 hours)" },
    { icon: <FaRecycle className="text-blue-500 text-2xl" />, title: "Eco-Friendly", description: "Safe solutions for kids and pets" },
  ];

  const faqs = [
    { question: "Is carpet cleaning safe for delicate fabrics?", answer: "Yes, safe for wool, silk, and synthetic blends." },
    { question: "How long does cleaning take?", answer: "5-7 days with pickup/delivery. Onsite: 2-4 hours." },
    { question: "Do you offer pickup and delivery?", answer: "Yes, free across Delhi." },
    { question: "Can you remove tough stains?", answer: "Yes, including wine, coffee, ink, and pet stains." },
    { question: "How often should I clean?", answer: "Every 6-12 months, more for high-traffic areas." },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">

      {/* Floating Action Buttons - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a 
          href="tel:+919711758814"
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        >
          <FaPhone className="text-xl" />
        </a>
        <a 
          href="https://wa.me/919711758814"
          className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Professional Carpet Cleaning</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto">
            Revitalize your carpets with expert deep cleaning and stain removal
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <button 
              onClick={openCallbackForm}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
            >
              Book Service Now
            </button>
            <a 
              href="tel:+919711758814" 
              className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <FaPhone /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
          {[
            { value: "20,000+", label: "Carpets Cleaned" },
            { value: "96%", label: "Stain Removal" },
            { value: "50+", label: "Stain Types" },
            { value: "64", label: "Cities Served" }
          ].map((stat, index) => (
            <div key={index} className="p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Carpet Image & Text */}
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex justify-center relative order-2 md:order-1">
          <div className="absolute -inset-2 md:-inset-4 bg-blue-100 rounded-xl rotate-3 opacity-30"></div>
          <img
            src={carpetImage}
            alt="Professional Carpet Cleaning Service"
            className="rounded-xl shadow-2xl w-full h-auto max-w-md object-cover relative z-10 hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-4 md:space-y-6 order-1 md:order-2">
          <span className="text-blue-600 font-semibold text-sm md:text-base">PREMIUM CARPET CARE</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Expert Cleaning for Your Carpets
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our certified specialists restore your carpets using advanced techniques and premium products.
          </p>
          <ul className="space-y-2 md:space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                {service.icon}
                <div>
                  <h3 className="font-semibold text-sm md:text-base">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <button 
            onClick={openCallbackForm}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-300 mt-4 md:mt-6 text-sm md:text-base"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Price Table */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-blue-600 font-semibold text-sm md:text-base">AFFORDABLE PRICING</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-3 md:mb-4">Carpet Cleaning Pricing</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Competitive rates with free pickup and delivery in Delhi
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 md:p-4 text-left text-sm md:text-base">Carpet Type</th>
                  <th className="p-3 md:p-4 text-right text-sm md:text-base">Original</th>
                  <th className="p-3 md:p-4 text-right text-sm md:text-base">Discounted</th>
                  <th className="p-3 md:p-4 text-right text-sm md:text-base">Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {pricingData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white dark:bg-gray-700" : "bg-gray-50 dark:bg-gray-600"}>
                    <td className="p-3 md:p-4 font-medium text-sm md:text-base">{item.category}</td>
                    <td className="p-3 md:p-4 text-right line-through text-gray-400 text-sm md:text-base">₹{item.original}</td>
                    <td className="p-3 md:p-4 text-right font-bold text-blue-600 dark:text-blue-400 text-sm md:text-base">₹{item.discounted}</td>
                    <td className="p-3 md:p-4 text-right text-green-600 dark:text-green-400 text-sm md:text-base">₹{item.original - item.discounted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 md:mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-xs md:text-sm">
              * Prices may vary for extensive stain removal
            </p>
            <button 
              onClick={openCallbackForm}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center text-sm md:text-base"
            >
              <FaStar className="mr-1 md:mr-2" /> Member Discount
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 md:py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-600 font-semibold text-sm md:text-base">CUSTOMER REVIEWS</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-8 md:mb-12">What Clients Say</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {[
              {
                quote: "My white carpet looked brand new after DhobiLite's service. They removed red wine stains!",
                name: "- Priya Malhotra, Gurgaon"
              },
              {
                quote: "Office carpets were full of stains. DhobiLite made them look like new again!",
                name: "- Rajesh Khanna, Corporate Office"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-400 text-sm md:text-base" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-3 md:mb-4 text-sm md:text-base">
                  {testimonial.quote}
                </p>
                <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto py-12 md:py-16 px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-blue-600 font-semibold text-sm md:text-base">HAVE QUESTIONS?</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">FAQs</h2>
        </div>
        
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border border-gray-200 dark:border-gray-700 rounded-xl p-3 md:p-4 hover:border-blue-300 transition-colors duration-300">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="group-hover:text-blue-600 transition-colors duration-300 text-sm md:text-base">{faq.question}</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-blue-600 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 md:mt-3 text-gray-700 dark:text-gray-300 pl-2 text-xs md:text-sm">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Still have questions?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button 
              onClick={openCallbackForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base"
            >
              Contact Support
            </button>
            <a 
              href="https://wa.me/919711758814"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Refresh Your Carpets?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a cleaning today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <button 
              onClick={openCallbackForm}
              className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              Book Now
            </button>
            <a 
              href="tel:+919711758814"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <FaPhone /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarpetPage;