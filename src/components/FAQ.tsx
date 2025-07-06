import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does  WearWisely Laundry determine laundry and dry-cleaning prices?",
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
    // You can add more FAQs as needed
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          FAQs |  WearWisely Laundry - Affordable Laundry & Dry Clean Pricing
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white pr-4">{faq.question}</span>
                {openFAQ === index ? (
                  <Minus className="h-5 w-5 text-gray-500 dark:text-gray-300 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-500 dark:text-gray-300 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
