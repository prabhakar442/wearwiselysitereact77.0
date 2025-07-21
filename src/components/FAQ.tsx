import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqs = [
    {
      question: "How does WearWisely Laundry determine laundry and dry-cleaning prices?",
      answer: "Our pricing is based on weight for most services, with transparent rates per kg. Special items like leather jackets, shoes, and bags have per-piece pricing."
    },
    {
      question: "Are there any discounts available on laundry and dry-cleaning services?",
      answer: "Yes, we offer bulk order discounts, subscription plans, and seasonal offers. Check our prepaid plans for better rates."
    },
    {
      question: "Is pickup and delivery included in the service price?",
      answer: "Yes, pickup and delivery are included within our coverage areas. No extra charges for standard pickup and delivery."
    },
    {
      question: "Are dry cleaning prices different from regular laundry prices?",
      answer: "Yes, dry cleaning costs more due to specialized solvents and equipment. Check our rate cards for specific pricing."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 transform transition-all duration-700 ease-out">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
            WearWisely Laundry - Affordable Laundry & Dry Clean Pricing
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group transform transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 ease-out hover:border-blue-300 dark:hover:border-blue-600">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600"
                >
                  <span className="font-semibold text-lg text-gray-900 dark:text-white pr-6 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`transform transition-all duration-500 ease-out ${openFAQ === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'} p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900`}>
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    ) : (
                      <Plus className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    openFAQ === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className={`transform transition-all duration-500 ease-out ${
                      openFAQ === index 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}>
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Still have questions? Contact our support team</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;