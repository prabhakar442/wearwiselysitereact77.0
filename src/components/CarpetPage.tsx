import React from 'react';
import carpetImage from './carpetpic-bg.webp';
import { FaCheckCircle, FaShieldAlt, FaClock, FaRecycle, FaStar } from 'react-icons/fa';

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
    { icon: <FaCheckCircle className="text-blue-500 text-2xl" />, title: "Deep Cleaning", description: "Removes embedded dirt, dust mites, and allergens from deep within carpet fibers" },
    { icon: <FaShieldAlt className="text-blue-500 text-2xl" />, title: "Stain Protection", description: "Specialized treatments to protect against future stains and spills" },
    { icon: <FaClock className="text-blue-500 text-2xl" />, title: "Quick Drying", description: "Advanced drying techniques to minimize downtime (typically 4-6 hours)" },
    { icon: <FaRecycle className="text-blue-500 text-2xl" />, title: "Eco-Friendly", description: "Using biodegradable and non-toxic cleaning solutions safe for kids and pets" },
  ];

  const faqs = [
    { question: "Is carpet cleaning safe for delicate fabrics?", answer: "Yes, we use specialized solutions that are safe for all carpet materials including wool, silk, and synthetic blends." },
    { question: "How long does the carpet cleaning process take?", answer: "Typically, carpet cleaning is completed within 5-7 working days, including pickup and delivery. Onsite cleaning takes 2-4 hours depending on size." },
    { question: "Do you offer pickup and delivery services?", answer: "Yes, we provide free pickup and delivery options across Delhi for all carpet cleaning services." },
    { question: "Can you remove tough stains like wine or pet urine?", answer: "Absolutely! Our professional-grade cleaning solutions can handle even the toughest stains including wine, coffee, ink, and pet accidents." },
    { question: "How often should I get my carpets professionally cleaned?", answer: "We recommend professional cleaning every 6-12 months for regular use, or more frequently in high-traffic areas or homes with pets." },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Professional Carpet Care & Cleaning Services</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Revitalize your carpets with our expert deep cleaning, stain removal, and protection services. We treat every carpet with premium care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={openCallbackForm}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Service Now
            </button>
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Call: +91-8800414848
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600">20,000+</div>
            <div className="text-gray-600 dark:text-gray-300">Carpets Cleaned</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600">96%</div>
            <div className="text-gray-600 dark:text-gray-300">Stain Removal Rate</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Stain Types Handled</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600">64</div>
            <div className="text-gray-600 dark:text-gray-300">Cities Served</div>
          </div>
        </div>
      </div>

      {/* Carpet Image & Text */}
      <div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center relative">
          <div className="absolute -inset-4 bg-blue-100 rounded-xl rotate-3 opacity-30"></div>
          <img
            src={carpetImage}
            alt="Professional Carpet Cleaning Service"
            className="rounded-xl shadow-2xl w-full h-auto max-w-md object-cover relative z-10 hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-6">
          <span className="text-blue-600 font-semibold">PREMIUM CARPET CARE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Expert Cleaning for Your Valued Carpets
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our certified carpet care specialists use advanced techniques and premium products to restore your carpets to their original beauty. Whether it's delicate Persian rugs, office carpets, or home area rugs, we handle each piece with meticulous attention.
          </p>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                {service.icon}
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <button 
            onClick={openCallbackForm}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 mt-6"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Price Table */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">AFFORDABLE PRICING</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Transparent Carpet Cleaning Pricing</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Competitive rates for premium services. All prices include free pickup and delivery within Delhi.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left">Carpet Type</th>
                  <th className="p-4 text-right">Original Price</th>
                  <th className="p-4 text-right">Discounted Price</th>
                  <th className="p-4 text-right">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {pricingData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white dark:bg-gray-700" : "bg-gray-50 dark:bg-gray-600"}>
                    <td className="p-4 font-medium">{item.category}</td>
                    <td className="p-4 text-right line-through text-gray-400">₹{item.original}</td>
                    <td className="p-4 text-right font-bold text-blue-600 dark:text-blue-400">₹{item.discounted}</td>
                    <td className="p-4 text-right text-green-600 dark:text-green-400">₹{item.original - item.discounted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              * Prices may vary for extensive stain removal or premium materials
            </p>
            <button 
              onClick={openCallbackForm}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center"
            >
              <FaStar className="mr-2" /> Get Special Member Discount
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-600 font-semibold">CUSTOMER REVIEWS</span>
          <h2 className="text-3xl font-bold mt-2 mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "My white living room carpet looked brand new after DhobiLite's service. They removed red wine stains I thought were permanent!"
              </p>
              <div className="font-semibold">- Priya Malhotra, Gurgaon</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "The office carpets were full of coffee stains and foot traffic marks. DhobiLite made them look like new again - our clients noticed immediately!"
              </p>
              <div className="font-semibold">- Rajesh Khanna, Corporate Office</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">HAVE QUESTIONS?</span>
          <h2 className="text-3xl font-bold mt-2">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-blue-300 transition-colors duration-300">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="group-hover:text-blue-600 transition-colors duration-300">{faq.question}</span>
                <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300 pl-2">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <button 
            onClick={openCallbackForm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Contact Our Support Team
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Refresh Your Carpets?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a cleaning today and experience the DhobiLite difference in carpet care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={openCallbackForm}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
            >
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Call: +91-8800414848
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarpetPage;