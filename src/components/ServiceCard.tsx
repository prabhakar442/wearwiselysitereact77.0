import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  services: string[];
  buttonText: string;
  onButtonClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, price, description, services, buttonText, onButtonClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>{icon}</div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Starting at</div>
          <div className="text-2xl font-bold">{price}</div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <ul className="text-gray-700 dark:text-gray-300 text-sm mb-4">
        {services.map((service, i) => <li key={i} className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>{service}</li>)}
      </ul>
      <button onClick={onButtonClick} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;