import React from 'react';
import ServiceCard from './ServiceCard';
import { Shirt, Package, ShoppingBag, Car as Carpet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesGrid = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Shirt className="w-12 h-12 text-blue-500" />,
      title: "DryClean",
      price: "₹30 per kg",
      description: "Premium quality dry cleaning that extends the lifespan of your clothes.",
      services: ["Non-Damaging Treatment", "Spotting", "Ironing and Pressing"],
      buttonText: "Explore",
      link: "/dry-clean",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Package className="w-12 h-12 text-purple-500" />,
      title: "Leather Jacket",
      price: "₹99 per pc",
      description: "Dry cleaning for delicate leather preservation. Professional leather care specialists.",
      services: ["Eco Treatment", "Steam Cleaning", "Caidron Cleaning", "Drying & Finishing"],
      buttonText: "Explore",
      link: "/jacket-cleaning",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-indigo-500" />,
      title: "Shoe",
      price: "₹89 per pair",
      description: "Our specialized shoe care services maintain your footwear investment.",
      services: ["Shoe Leather / Suede", "Eco Treatment", "Polishing and Finishing", "Deodorizing and Disinfecting"],
      buttonText: "Explore",
      link: "/shoe-cleaning",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-pink-500" />,
      title: "Bag",
      price: "₹140 per pc",
      description: "Professional bag cleaning for all types including leather and fabric.",
      services: ["Surface and Interior Cleaning", "Stain Removal", "Handle and Hardware Care", "Packaging"],
      buttonText: "Explore",
      link: "/bag-cleaning",
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
    },
    {
      icon: <Carpet className="w-12 h-12 text-red-500" />,
      title: "Carpet",
      price: "₹18 per sqft",
      description: "Professional carpet cleaning using advanced washing and steam methods.",
      services: ["Vacuuming", "Steam Cleaning", "Low Moisture Cleaning", "Spot Treatment", "Drying"],
      buttonText: "Explore",
      link: "/carpet-cleaning",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    }
  ];

  const cleaningSteps = [
    { 
      number: "1", 
      title: "Dirty Clothes", 
      description: "We collect your garments with care",
      icon: "🧺"
    },
    { 
      number: "2", 
      title: "Easy Pickup", 
      description: "Schedule at your convenience",
      icon: "🚚"
    },
    { 
      number: "3", 
      title: "Inspection", 
      description: "Thorough quality check",
      icon: "🔍"
    },
    { 
      number: "4", 
      title: "Tagging", 
      description: "Secure identification",
      icon: "🏷️"
    },
    { 
      number: "5", 
      title: "Preprocessing", 
      description: "Stain removal treatment",
      icon: "🧴"
    },
    { 
      number: "6", 
      title: "Processing", 
      description: "Specialized cleaning",
      icon: "🧼"
    },
    { 
      number: "7", 
      title: "Steam Ironing", 
      description: "Professional finishing",
      icon: "♨️"
    },
    { 
      number: "8", 
      title: "Quality Check", 
      description: "Rigorous inspection",
      icon: "✅"
    },
    { 
      number: "9", 
      title: "Packing", 
      description: "Hygienic packaging",
      icon: "📦"
    },
    { 
      number: "10", 
      title: "Delivery", 
      description: "On-time return",
      icon: "🛵"
    }
  ];

  return (
    <section id="services-section" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200 mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Premium Cleaning Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We use eco-friendly products and advanced techniques to give your belongings a new life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              price={service.price}
              description={service.description}
              services={service.services}
              buttonText={service.buttonText}
              onButtonClick={() => service.link && navigate(service.link)}
              bgColor={service.bgColor}
            />
          ))}
        </div>

        {/* 10-Step Cleaning Process Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200 mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              10-Step Formula for Exceptional Cleaning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our meticulous process ensures your items receive the best care possible.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {cleaningSteps.map((step, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100 dark:border-gray-700`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-3">
                    {step.icon}
                  </div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    Step {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/dry-clean')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;