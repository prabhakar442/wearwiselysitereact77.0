import React from 'react';
import drycleanImage from './dryclean-bg.webp';
import { FaCheckCircle, FaShieldAlt, FaClock, FaRecycle, FaStar } from 'react-icons/fa';

const DryCleanPage = () => {
  const openCallbackForm = () => {
    window.dispatchEvent(new Event('showCallBackPopup'));
  };

  const pricingData = [
    { category: "Shirt (Starch)", original: 559, discounted: 419 },
    { category: "Shirt (Regular)", original: 409, discounted: 307 },
    { category: "Shirt (Designer)", original: 729, discounted: 547 },
    { category: "T-Shirt", original: 409, discounted: 307 },
    { category: "Trouser/Pant (Starch)", original: 279, discounted: 209 },
    { category: "Trouser/Pant (Regular)", original: 439, discounted: 329 },
    { category: "Jeans", original: 239, discounted: 179 },
    { category: "Kurta/Kameez", original: 449, discounted: 337 },
    { category: "Suit", original: 589, discounted: 442 },
    { category: "Dress", original: 299, discounted: 224 },
    { category: "Dress (Designer)", original: 419, discounted: 314 },
    { category: "Saree", original: 299, discounted: 224 },
    { category: "Blouse", original: 299, discounted: 224 },
    { category: "Sherwani", original: 679, discounted: 509 },
  ];

  const services = [
    { icon: <FaCheckCircle className="text-blue-500 text-2xl" />, title: "Stain Removal", description: "Professional removal of even the toughest stains including ink, oil, and food" },
    { icon: <FaShieldAlt className="text-blue-500 text-2xl" />, title: "Fabric Protection", description: "Specialized treatments to protect delicate fabrics and maintain color vibrancy" },
    { icon: <FaClock className="text-blue-500 text-2xl" />, title: "Fast Turnaround", description: "Most services completed within 3-5 business days with free delivery" },
    { icon: <FaRecycle className="text-blue-500 text-2xl" />, title: "Eco-Friendly", description: "Using biodegradable and non-toxic cleaning solutions safe for all fabrics" },
  ];

  const faqs = [
    { question: "What is dry cleaning and how is it different from regular washing?", answer: "Dry cleaning uses chemical solvents instead of water to clean fabrics, making it safer for delicate materials that might shrink or get damaged in water. It's more effective at removing oil-based stains and preserves garment quality longer." },
    { question: "How long does the dry cleaning process take?", answer: "Typically, dry cleaning is completed within 3-5 working days, including pickup and delivery. We offer express services for urgent needs." },
    { question: "Do you offer pickup and delivery services?", answer: "Yes, we provide free pickup and delivery options across Delhi for all dry cleaning services." },
    { question: "Can you remove tough stains like Holi colors or wine?", answer: "Absolutely! Our professional-grade cleaning solutions can handle even the toughest stains including Holi colors, wine, coffee, ink, and oil stains." },
    { question: "How often should I dry clean my clothes?", answer: "We recommend dry cleaning suits and formal wear after 2-3 wears, delicate fabrics after each wear, and regular clothes when visibly soiled or every few months." },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Professional Dry Cleaning Services</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Premium care for your valued garments. We treat every piece with expert attention to restore its original beauty.
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
            <div className="text-3xl font-bold text-blue-600">50,000+</div>
            <div className="text-gray-600 dark:text-gray-300">Garments Cleaned</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600">99%</div>
            <div className="text-gray-600 dark:text-gray-300">Stain Removal Rate</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600 dark:text-gray-300">Fabric Types Handled</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600">64</div>
            <div className="text-gray-600 dark:text-gray-300">Cities Served</div>
          </div>
        </div>
      </div>

      {/* Dry Clean Image & Text */}
      <div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center relative">
          <div className="absolute -inset-4 bg-blue-100 rounded-xl rotate-3 opacity-30"></div>
          <img
            src={drycleanImage}
            alt="Professional Dry Cleaning Service"
            className="rounded-xl shadow-2xl w-full h-auto max-w-md object-cover relative z-10 hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-6">
          <span className="text-blue-600 font-semibold">PREMIUM DRY CLEANING</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Expert Care for Your Valued Garments
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our certified dry cleaning specialists use advanced techniques and premium solvents to restore your clothes to their original glory. Whether it's delicate silks, formal suits, or designer wear, we handle each piece with meticulous attention.
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
            <h2 className="text-3xl font-bold mt-2 mb-4">Transparent Dry Cleaning Pricing</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Competitive rates for premium services. All prices include free pickup and delivery within Delhi.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left">Garment Type</th>
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
              * Discounted rate valid with coupon MY25 on first order
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
                "My wedding lehenga looked brand new after DhobiLite's service. They removed all the Holi stains perfectly without damaging the delicate embroidery!"
              </p>
              <div className="font-semibold">- Priya Sharma, South Delhi</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "As a corporate professional, I rely on DhobiLite to keep my suits in perfect condition. Their service is consistently excellent with perfect starching and pressing."
              </p>
              <div className="font-semibold">- Rohan Malhotra, Gurgaon</div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Refresh Your Wardrobe?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a pickup today and experience the DhobiLite difference in garment care.
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

export default DryCleanPage;