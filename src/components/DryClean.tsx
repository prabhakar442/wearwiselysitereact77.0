import React from 'react';
import { useState } from 'react';

const DryClean: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const services = [
    {
      title: "Ornamental Dress Dry-Clean",
      description: "Ornamental and ethnic dresses look gorgeous, but with the delicate intricacies of design on the fabric, these beautiful garments are not suitable for hand or machine wash; only Dry-cleaning can be a safe option for these expensive clothes.",
      image: "/ornamental-dress.jpg"
    },
    {
      title: "Saree Dry-Clean",
      description: "Indian women have a special love for their sarees, but cleaning this extended piece of elegant cloth might not be that easy. To maintain the quality and color of your lovely sarees, what better option can be there than Dry-Cleaning!",
      image: "/saree.jpg"
    },
    {
      title: "Suit Dry-Clean",
      description: "Suit is a formal dress that adds style and class to your personality, and indeed these costly items deserve the quality care of Dry-Cleaning.",
      image: "/suit.jpg"
    },
    {
      title: "Blanket and Bedding Dry-Clean",
      description: "Bedding items get frequently stained and scruffy; cleaning the large pieces of bedding clothes and the heavy blankets can take a toll on you. Leave us with the task, and we assure you to make your beddings look fresh and spotless.",
      image: "/blanket.jpg"
    }
  ];

  const faqs = [
    {
      question: "What is dry cleaning, and how is it different from regular washing?",
      answer: "Dry cleaning uses chemical solvents instead of water to clean fabrics that might be damaged by water or traditional washing."
    },
    {
      question: "Are the chemical solvents used in dry clean process environment friendly?",
      answer: "Yes, we use eco-friendly solvents that are safe for both your clothes and the environment."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">DHOBILITE</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Our Services</a>
            <a href="#" className="hover:underline">Our Stores</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Consultancy</a>
            <a href="#" className="hover:underline">Get Franchise</a>
            <a href="#" className="hover:underline">Our Blog</a>
          </nav>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">
            Request Call Back
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-blue-100 inline-block px-4 py-2 rounded-full text-blue-600 font-medium mb-4">
            25% off for new user
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Dry Cleaning Services at Your Doorstep</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Doing laundry can consume a lot of your time. It's often hard for us to manage this essential chore with our heavy work-life and tight schedule. To save you from this trouble, DhobiLite brings to your doorstep every type of laundry and cleaning service you can think of.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-700 transition">
            Request Call Back
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Dry Cleaning Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <span className="text-gray-500">Image: {service.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium w-full hover:bg-blue-700 transition">
                    Request Call Back
                  </button>
                  <div className="mt-3 text-sm text-blue-600 font-medium">
                    Free delivery in 3-5 days
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Dry Cleaning Rates</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
              {/* Daily Wear */}
              <div>
                <h3 className="font-bold text-lg mb-4 border-b pb-2">Daily</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Shirt Starch</span>
                    <span>₹55 - ₹44</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Shirt</span>
                    <span>₹240 - ₹82</span>
                  </li>
                  {/* Add more items */}
                </ul>
              </div>
              
              {/* Ethnic Wear */}
              <div>
                <h3 className="font-bold text-lg mb-4 border-b pb-2">Ethnic</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Payjama/Salwar</span>
                    <span>₹39 - ₹29</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Kurta/Kameez</span>
                    <span>₹350 - ₹38</span>
                  </li>
                  {/* Add more items */}
                </ul>
              </div>
              
              {/* Woolen */}
              <div>
                <h3 className="font-bold text-lg mb-4 border-b pb-2">Woolen</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Sweat Shirt</span>
                    <span>₹72 - ₹29</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sweat Pants</span>
                    <span>₹72 - ₹29</span>
                  </li>
                  {/* Add more items */}
                </ul>
              </div>
              
              {/* Household */}
              <div>
                <h3 className="font-bold text-lg mb-4 border-b pb-2">Household</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Bedsheet - S</span>
                    <span>₹54 - ₹89</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bedsheet - D</span>
                    <span>₹228 - ₹89</span>
                  </li>
                  {/* Add more items */}
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-4 text-center text-sm">
              Discounted rate valid with coupon MY25 on first order.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-lg py-2"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span>{expandedFaq === index ? '−' : '+'}</span>
                </button>
                {expandedFaq === index && (
                  <div className="mt-2 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline">Help & Support</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Laundry Service</a></li>
              <li><a href="#" className="hover:underline">Organic Dry Clean Service</a></li>
              <li><a href="#" className="hover:underline">Dry Clean Service</a></li>
              <li><a href="#" className="hover:underline">Shoe Cleaning Service</a></li>
              <li><a href="#" className="hover:underline">Jacket Cleaning Service</a></li>
              <li><a href="#" className="hover:underline">Bag Cleaning Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Monday-Sunday 9:00 AM - 10:00 PM</li>
              <li>+91 88004 14848</li>
              <li>WhatsApp</li>
              <li>cc@dhobiLite.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Download App</h3>
            <div className="bg-white p-2 rounded inline-block">
              {/* QR Code Placeholder */}
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-xs">QR Code</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto mt-12 pt-6 border-t border-gray-700 text-center text-sm">
          <p>© Copyrights 2011-2025 Owned by Elite DhobiLite Laundry Private Limited</p>
        </div>
      </footer>
    </div>
  );
};

export default DryClean;