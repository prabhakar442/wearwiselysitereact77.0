import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

const Footer = () => {
  const quickLinks = ['Pricing Plans', 'Careers', 'Contact Us', 'Community', 'Help Desk'];
  const services = [
    'Regular Dry Clean Service',
    'Dry Clean Service',
    'Premium Dry Clean Service',
    'Bulk Cleaning Service',
    'Carpet Cleaning Service',
    'Steam Ironing Service'
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                <img src={logo} alt="WearWisely" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-orange-400">WearWisely</h2>
                <p className="text-sm text-gray-300">Laundry</p>
              </div>
            </div>

            <p className="text-gray-300 text-base mb-8 leading-relaxed">
              Handling all the daily chores for the part-time working professional with premium quality and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-sm leading-relaxed">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-400 rounded-full"></div>
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors">
                <Phone className="h-5 w-5 text-orange-400" />
                <span>+91 9711758814</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors">
                <Mail className="h-5 w-5 text-orange-400" />
                <span>wearwiselydrycleaner@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors">
                <Globe className="h-5 w-5 text-orange-400" />
                <span>WearWisely.in</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 cursor-pointer transition-all duration-300 hover:text-blue-500 hover:bg-gray-700 hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 cursor-pointer transition-all duration-300 hover:text-black hover:bg-gray-700 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </div>
                <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 cursor-pointer transition-all duration-300 hover:text-pink-500 hover:bg-gray-700 hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 cursor-pointer transition-all duration-300 hover:text-red-500 hover:bg-gray-700 hover:scale-110">
                  <Youtube className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © Copyright 2003-2025 Owned by Star Points for Laundry Private Limited
              </p>
              <p className="text-gray-500 text-xs mt-1">All rights reserved. Made with care in India</p>
            </div>
            
            {/* Admin Panel Link
            <Link
              to="/admin"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="text-sm font-medium">Admin Panel</span>
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;