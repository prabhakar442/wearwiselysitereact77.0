import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shirt,
  Shield,
  Footprints,
  Briefcase,
  Sparkles
} from 'lucide-react';

const ServiceCard = ({
  icon,
  title,
  price,
  description,
  services,
  buttonText,
  onButtonClick,
  bgColor
}) => {
  return (
    <div
      onClick={onButtonClick}
      className={`${bgColor} cursor-pointer rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/30 backdrop-blur-sm relative overflow-hidden group hover:-translate-y-2`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center w-20 h-20 bg-white/80 dark:bg-gray-800/80 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg backdrop-blur-sm">
          {icon}
        </div>

        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
            {price}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="space-y-2 mb-8">
          {services.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const navigate = useNavigate();

  const services = [
  {
    id: 'dryclean',
    icon: <Shirt className="w-12 h-12 text-blue-500" />, // Clothes cleaning
    title: 'DryClean',
    price: 'Starts from ₹49',
    description: 'Premium quality dry cleaning that extends the lifespan of your clothes.',
    services: ['Non-Damaging Treatment', 'Spotting', 'Ironing and Pressing'],
    buttonText: 'Explore',
    bgColor:
      'bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-900/30 dark:via-blue-800/20 dark:to-cyan-900/30'
  },
    {
    id: 'steam-ironing',
    icon: <Shirt className="w-12 h-12 text-green-500" />, // Clothes ironing
    title: 'Steam Ironing',
    price: 'Starts from ₹20',
    description: 'Gentle steam ironing that removes wrinkles while keeping fabric fresh and soft.',
    services: ['Wrinkle Removal', 'Fabric Friendly', 'Fresh Finish'],
    buttonText: 'Explore',
    bgColor:
      'bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 dark:from-green-900/30 dark:via-green-800/20 dark:to-emerald-900/30'
  },
  {
    id: 'jacket-cleaning',
    icon: <Shield className="w-12 h-12 text-purple-500" />, // Shield → Leather protection
    title: 'Leather Jacket',
    price: 'Starts from ₹249',
    description: 'Dry cleaning for delicate leather preservation. Professional leather care specialists.',
    services: ['Eco Treatment', 'Steam Cleaning', 'Drying & Finishing'],
    buttonText: 'Explore',
    bgColor:
      'bg-gradient-to-br from-purple-50 via-purple-100 to-pink-50 dark:from-purple-900/30 dark:via-purple-800/20 dark:to-pink-900/30'
  },
  {
    id: 'shoe-cleaning',
    icon: <Footprints className="w-12 h-12 text-indigo-500" />, // Shoe cleaning
    title: 'Foot wear',
    price: 'Starts from ₹97',
    description: 'Our specialized shoe care services maintain your footwear investment.',
    services: ['Shoe Leather / Suede', 'Eco Treatment', 'Polishing and Finishing', 'Deodorizing and Disinfecting'],
    buttonText: 'Explore',
    bgColor:
      'bg-gradient-to-br from-indigo-50 via-indigo-100 to-blue-50 dark:from-indigo-900/30 dark:via-indigo-800/20 dark:to-blue-900/30'
  },
  {
    id: 'bag-cleaning',
    icon: <Briefcase className="w-12 h-12 text-pink-500" />, // Bags
    title: 'Bag',
    price: 'Starts from ₹199 ',
    description: 'Professional bag cleaning for all types including leather and fabric.',
    services: ['Surface and Interior Cleaning', 'Stain Removal',  'Packaging'],
    buttonText: 'Explore',
    bgColor:
      'bg-gradient-to-br from-pink-50 via-pink-100 to-rose-50 dark:from-pink-900/30 dark:via-pink-800/20 dark:to-rose-900/30'
  },
  {
    id: 'carpet-cleaning',
    icon: <Sparkles className="w-12 h-12 text-red-500" />, // Carpet cleaning (shine / dust removal)
    title: 'Carpet',
    price: 'Starts from ₹20 per sq feet',
    description: 'Professional carpet cleaning using advanced washing and steam methods.',
    services: ['Vacuuming', 'Steam Cleaning', 'Low Moisture Cleaning', 'Spot Treatment', 'Drying'],
    buttonText: 'Explore',
    bgColor:
      'bg-gradient-to-br from-red-50 via-red-100 to-orange-50 dark:from-red-900/30 dark:via-red-800/20 dark:to-orange-900/30'
  },

];


  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-700 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full dark:from-blue-900/50 dark:to-cyan-900/50 dark:text-blue-300 mb-6 shadow-lg backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-300 dark:to-purple-300 mb-6">
            Premium Cleaning Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We use eco-friendly products and advanced techniques to give your belongings a new life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              price={service.price}
              description={service.description}
              services={service.services}
              buttonText={service.buttonText}
              bgColor={service.bgColor}
              onButtonClick={() => navigate(`/${service.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
