import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, Globe } from 'lucide-react';

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

  const legalLinks = ['Terms & Conditions', 'Privacy Policy', 'Refund Policy'];

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-orange-400">WearWisely</h2>
                <p className="text-sm text-gray-300">Laundry</p>
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed max-w-sm mx-auto md:mx-0">
              Handling all the daily chores for the part-time working professional with premium quality and care. Your trusted partner for all laundry needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-orange-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 block py-1 hover:pl-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Our Services
              <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-orange-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 block py-1 hover:pl-2"
                  >
                    <span className="text-sm leading-relaxed">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Get In Touch
              <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-orange-400 rounded-full"></div>
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-orange-400 transition-colors group">
                <Phone className="h-5 w-5 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+91 9711758814</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-orange-400 transition-colors group">
                <Mail className="h-5 w-5 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all">wearwiselydrycleaner@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-orange-400 transition-colors group">
                <Globe className="h-5 w-5 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">WearWisely.in</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-3">
                <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 cursor-pointer transition-all duration-300 hover:text-blue-500 hover:bg-gray-700 hover:scale-110 hover:shadow-lg">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 cursor-pointer transition-all duration-300 hover:text-black hover:bg-gray-700 hover:scale-110 hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </div>
                <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 cursor-pointer transition-all duration-300 hover:text-pink-500 hover:bg-gray-700 hover:scale-110 hover:shadow-lg">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 cursor-pointer transition-all duration-300 hover:text-red-500 hover:bg-gray-700 hover:scale-110 hover:shadow-lg">
                  <Youtube className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Copyright Info */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-gray-400 text-sm">
                © Copyright 2003-2025 Owned by Star Points for Laundry Private Limited
              </p>
              <p className="text-gray-500 text-xs mt-1">All rights reserved. Made with care in India</p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-6 order-1 lg:order-2">
              <a
                href="/terms-conditions"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300 border-b border-transparent hover:border-orange-400"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300 border-b border-transparent hover:border-orange-400"
              >
                Privacy Policy
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;