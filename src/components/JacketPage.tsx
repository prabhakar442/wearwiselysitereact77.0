import React from 'react';
import { FaStar, FaShieldAlt, FaTruck, FaLeaf, FaQuestionCircle } from 'react-icons/fa';
import jacketImage from './jacketpic.webp'; // Make sure the image path is correct

const JacketPage = () => {
  const handleCallBackClick = () => {
    window.dispatchEvent(new Event('showCallBackPopup'));
  };

  const services = [
    { icon: <FaShieldAlt className="text-blue-500 text-2xl" />, title: "Premium Protection", description: "Specialized treatments to protect your jacket from wear and tear" },
    { icon: <FaTruck className="text-blue-500 text-2xl" />, title: "Free Pickup & Delivery", description: "Convenient service across Delhi/NCR" },
    { icon: <FaLeaf className="text-blue-500 text-2xl" />, title: "Eco-Friendly", description: "Using biodegradable cleaning solutions" },
  ];

  const faqs = [
    { question: "How does WearWisely Laundry clean leather jackets?", answer: "We use specialized leather cleaning solutions and techniques that gently remove dirt while preserving the natural oils in the leather. Our process includes conditioning to keep the leather supple." },
    { question: "How long does cleaning take?", answer: "Standard cleaning takes 3-5 business days. For deep cleaning or repairs, it may take up to 7 days. We offer express services at an additional charge." },
    { question: "Is pickup and delivery free?", answer: "Yes, we provide free pickup and delivery for all jacket cleaning services within our service areas in Delhi/NCR." },
    { question: "Can you remove tough stains from jackets?", answer: "Our stain removal experts can handle most common stains including oil, ink, and food stains. We evaluate each stain individually for the best treatment approach." },
    { question: "Do you repair damaged zippers or linings?", answer: "Yes, we offer complete jacket repair services including zipper replacement, lining repair, seam fixing, and more using high-quality materials." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Premium Jacket Cleaning & Repair Services</h1>
          <p className="text-xl mb-8 opacity-90">Professional care for your valuable jackets with free pickup and delivery</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleCallBackClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
            >
              Request Call Back
            </button>
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300">
              Call: +91-9711758814
            </button>
          </div>
        </div>
      </section>

      {/* Jacket Image Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img
            src={jacketImage}
            alt="Professional Jacket Cleaning Service"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            style={{ maxHeight: '500px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
            <h2 className="text-white text-2xl md:text-3xl font-bold">Expert Care for All Types of Jackets</h2>
          </div>
        </div>
      </section>

      {/* Leather Jackets Info */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Expert Care for Your Valued Jackets</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Your leather jackets deserve specialized attention. Our certified technicians clean, condition, and protect your outerwear using premium products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Price Table */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-700 dark:text-gray-300">Competitive rates for premium jacket cleaning services</p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left">Jacket Type</th>
                  <th className="p-4 text-right">Original Price</th>
                  <th className="p-4 text-right">Discounted Price</th>
                  <th className="p-4 text-right">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 font-medium">Leather Jacket</td>
                  <td className="p-4 text-right line-through text-gray-500">₹660</td>
                  <td className="p-4 text-right font-bold text-blue-600 dark:text-blue-400">₹400</td>
                  <td className="p-4 text-right text-green-600 dark:text-green-400">₹260</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 font-medium">Leather Jacket - H</td>
                  <td className="p-4 text-right line-through text-gray-500">₹529</td>
                  <td className="p-4 text-right font-bold text-blue-600 dark:text-blue-400">₹300</td>
                  <td className="p-4 text-right text-green-600 dark:text-green-400">₹229</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 font-medium">Leather Jacket Rexine</td>
                  <td className="p-4 text-right line-through text-gray-500">₹470</td>
                  <td className="p-4 text-right font-bold text-blue-600 dark:text-blue-400">₹250</td>
                  <td className="p-4 text-right text-green-600 dark:text-green-400">₹220</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 font-medium">Leather Jacket Suede</td>
                  <td className="p-4 text-right line-through text-gray-500">₹809</td>
                  <td className="p-4 text-right font-bold text-blue-600 dark:text-blue-400">₹400</td>
                  <td className="p-4 text-right text-green-600 dark:text-green-400">₹409</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={handleCallBackClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center"
            >
              <FaStar className="mr-2" /> Get Special Discount
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-700 dark:text-gray-300">Trusted by thousands of jacket owners in Delhi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
              "My expensive leather jacket had oil stains that I thought were permanent. WearWisely removed them completely and made it look brand new!"
            </p>
            <div className="font-semibold">- Rajiv Malhotra, South Delhi</div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
              "The convenience of free pickup and delivery along with excellent cleaning service keeps me coming back. My suede jacket has never looked better."
            </p>
            <div className="font-semibold">- Priya Singh, Gurgaon</div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2">
            <FaQuestionCircle className="text-blue-500 text-2xl" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
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
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Refresh Your Jackets?</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a pickup today and experience professional jacket care</p>
          <button 
            onClick={handleCallBackClick}
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
          >
            Book Service Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default JacketPage;