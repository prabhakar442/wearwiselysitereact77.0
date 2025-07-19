import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from './logo.jpg';

const Footer = () => {
  const quickLinks = ['Pricing Plans', 'Careers', 'Contact Us', 'Community', 'Help Desk'];
  const services = ['Regular Dry Clean Service', 'Dry Clean Service', 'Premium Dry Clean Service', 'Bulk Cleaning Service', 'Carpet Cleaning Service', 'Steam Ironing Service'];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and App Download */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden">
                <img src={logo} alt="WW" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white"> WearWisely Laundry</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Handling all the daily chores for the part-time working professional.
            </p>
            
            <div className="space-y-4">
              <p className="font-medium text-gray-900 dark:text-white">Scan the QR Code</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">To Download Mobile App</p>
              
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-500 dark:text-gray-300">QR Code</span>
              </div>
              
              <div className="flex space-x-2">
                <div className="bg-black text-white px-3 py-1 rounded text-xs">App Store</div>
                <div className="bg-black text-white px-3 py-1 rounded text-xs">Google Play</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Scan the QR Code</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">To Download Mobile App</p>
            
            <div className="flex space-x-4 mb-6">
              <Facebook className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-pink-600 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-red-600 cursor-pointer" />
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-2">📞 +91 7599764668</p>
              <p className="mb-2">📧 hello@ WearWisely Laundry.com</p>
              <p>🏢  WearWisely Laundry.in</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © Copyright 2017-2025 Owned by Star Points for Laundry Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
