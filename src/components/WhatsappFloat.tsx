import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/919711758814?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 flex items-center justify-center animate-bounce"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsappFloat;
