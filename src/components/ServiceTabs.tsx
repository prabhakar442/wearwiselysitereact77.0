import React, { useState } from 'react';

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('dryclean');

  const tabs = [
    { id: 'dryclean', label: 'Dry-clean Rates' }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get The Best Rates with  WearWisely Laundry
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            At  WearWisely Laundry, we believe in transparent pricing. You deserve to know exactly what you're paying for,
            whether it's regular laundry, organic dry cleaning, or on-demand ironing. Besides competitive rates and 
            transparent laundry and dry cleaning prices, we also offer real-time updates from a laundry near you. 
            No surcharge, no hidden pricing!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceTabs;
