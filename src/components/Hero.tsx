import React, { useEffect, useRef, useState } from 'react';
import bannervideo from './bannervideo.mp4';
import emailjs from '@emailjs/browser';

const Hero = () => {
  const cardRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();

  // Popup state management
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const locations = [
    "North Delhi",
    "Civil Lines",
    "Kamla Nagar",
    "Mukherjee Nagar",
    "Model Town",
    "Kashmiri Gate",
    "Shakti Nagar",
    "Majnu-ka-Tilla",
    "North West Delhi",
    "Rohini",
    "Pitampura",
    "Shalimar Bagh",
    "Adarsh Nagar",
    "Keshav Puram",
    "West Delhi",
    "Janakpuri",
    "Punjabi Bagh",
    "Rajouri Garden",
    "Uttam Nagar",
    "Paschim Vihar",
    "Hari Nagar",
    "South Delhi",
    "Hauz Khas",
    "Greater Kailash (GK I & II)",
    "Defence Colony",
    "Saket",
    "Vasant Kunj",
    "Malviya Nagar",
    "Lajpat Nagar",
    "Panchsheel Park",
    "Jor Bagh",
    "Neeti Bagh",
    "Sunder Nagar",
    "Chhatarpur",
    "Safdarjung Development Area (SDA)",
    "Kalkaji",
    "East Delhi",
    "Mayur Vihar (Phases I, II, III)",
    "Laxmi Nagar",
    "Preet Vihar",
    "Shahdara",
    "Anand Vihar",
    "Central Delhi",
    "Connaught Place",
    "Karol Bagh",
    "Paharganj",
    "Sadar Bazaar",
    "Lodhi Colony",
    "Golf Links",
    "Chanakyapuri",
    "Dwarka",
    "Dilshad Garden",
    "Azadpur"
  ];

  useEffect(() => {
    // Simple entrance animations without GSAP dependency
    if (cardRef.current) {
      cardRef.current.style.transform = 'translateY(50px)';
      cardRef.current.style.opacity = '0';
      
      setTimeout(() => {
        cardRef.current.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        cardRef.current.style.transform = 'translateY(0)';
        cardRef.current.style.opacity = '1';
      }, 300);
    }

    if (titleRef.current) {
      titleRef.current.style.transform = 'translateY(30px)';
      titleRef.current.style.opacity = '0';
      
      setTimeout(() => {
        titleRef.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        titleRef.current.style.transform = 'translateY(0)';
        titleRef.current.style.opacity = '1';
      }, 600);
    }

    if (subtitleRef.current) {
      subtitleRef.current.style.transform = 'translateY(20px)';
      subtitleRef.current.style.opacity = '0';
      
      setTimeout(() => {
        subtitleRef.current.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        subtitleRef.current.style.transform = 'translateY(0)';
        subtitleRef.current.style.opacity = '1';
      }, 900);
    }
  }, []);

  // Location search functionality
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = locations.filter(location =>
        location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredLocations([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleLocationSelect = (location) => {
    setSearchTerm(location);
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !address || !email || !searchTerm) {
      alert("Please fill all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    if (phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    const templateParams = { name, phone, address, email, location: searchTerm };
    emailjs.send('service_6guir0d', 'template_ruxloc9', templateParams, 'XTMFu1O4ZXhgU_alV')
      .then(() => console.log('Email sent'))
      .catch((err) => console.error('Email Error:', err));

    try {
      await fetch('https://api.sheetbest.com/sheets/74950d34-4f8a-4b9e-8e4f-0d2e09565e79', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          Name: name, 
          Phone: phone, 
          Location: searchTerm, 
          Address: address, 
          Email: email 
        })
      });
      setSuccess(true);
      setName('');
      setPhone('');
      setAddress('');
      setEmail('');
      setSearchTerm('');
      setTimeout(() => {
        setShowPopup(false);
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Google Sheet Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video with Enhanced Visibility */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover scale-110"
        src={bannervideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Optimized Overlay for Video Visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/25 to-black/40" />

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/6 w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div 
          ref={cardRef}
          className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-12 md:p-16 max-w-5xl mx-auto text-center shadow-2xl hover:bg-white/8 hover:scale-[1.02] transition-all duration-500 ease-out"
        >
          {/* Decorative Element */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
          </div>

          {/* Main Title */}
          <div ref={titleRef} className="mb-8">
            <div className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4 font-sans">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                Affordable
              </span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-sans">
              Laundry & Dry Cleaning
            </div>
          </div>

          {/* Subtitle */}
          <div 
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-orange-200 mb-12 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Premium Quality Service with{' '}
            <span className="text-white font-semibold">No Hidden Costs</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowPopup(true)}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Book Now
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg backdrop-blur-sm">
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

      {/* Booking Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-xl relative animate-fade-in">
            <button 
              onClick={() => {
                setShowPopup(false);
                setSearchTerm('');
              }} 
              className="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white text-xl"
              aria-label="Close popup"
            >
              ✕
            </button>
            
            <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">Book Your Service!</h2>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
                  className="w-full border px-3 py-2 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                {showSuggestions && filteredLocations.length > 0 && (
                  <ul className="absolute z-10 w-full mt-1 max-h-60 overflow-auto border border-gray-300 bg-white dark:bg-gray-800 rounded shadow-lg">
                    {filteredLocations.map((location, index) => (
                      <li
                        key={index}
                        className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer dark:text-white"
                        onClick={() => handleLocationSelect(location)}
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full border px-3 py-2 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                required
              />
              
              <input 
                type="tel" 
                placeholder="Mobile Number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="w-full border px-3 py-2 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                required
                minLength="10"
              />
              
              <input 
                type="text" 
                placeholder="Address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                className="w-full border px-3 py-2 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                required
              />
              
              <input 
                type="email" 
                placeholder="E-mail Address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full border px-3 py-2 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                required
              />
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                We will contact you via Call, SMS, WhatsApp or Email.
              </p>
              
              <button 
                type="submit" 
                className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-colors duration-300"
              >
                Book Service
              </button>
            </form>
            
            {success && (
              <p className="text-green-600 dark:text-green-400 text-center mt-4 animate-fade-in">
                Booking Request Submitted Successfully!
              </p>
            )}
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .font-sans {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-feature-settings: 'kern' 1, 'liga' 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Custom animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;