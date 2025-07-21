import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
import emailjs from '@emailjs/browser';

const Header = ({ darkMode, setDarkMode }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

  const navigate = useNavigate();

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

  const handlePricingClick = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('services-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setMenuOpen(false);
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
    emailjs.send('service_0fz254l', 'template_8tjm8ap', templateParams, 'yKzPEtzad9qgCuM2M')
      .then(() => console.log('Email sent'))
      .catch((err) => console.error('Email Error:', err));

    try {
      await fetch('https://api.sheetbest.com/sheets/e2b62836-bbcf-4ce9-b599-0326401afdf0', {
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

  useEffect(() => {
    const showPopupListener = () => setShowPopup(true);
    window.addEventListener('showCallBackPopup', showPopupListener);
    return () => window.removeEventListener('showCallBackPopup', showPopupListener);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={logo} alt="WW" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">WearWisely Laundry</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium flex items-center">
                Our Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 z-50">
                <Link 
                  to="/dryclean" 
                  className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Dry Clean Service
                </Link>
                
                <Link to="/shoe-cleaning" className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700">
                  Shoe Cleaning Service
                </Link>

                <Link to="/jacket-cleaning" className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700">
                  Jacket Cleaning Service
                </Link>

                <Link to="/Bag-cleaning" className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700">Bag Cleaning Service</Link>
                <Link to="/Carpet-cleaning" className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700">Carpet Cleaning Service</Link>
              </div>
            </div>

            <button onClick={handlePricingClick} className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium">Pricing</button>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium">About Us</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:9711758814" className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition">Call Us</a>
            <button onClick={() => setShowPopup(true)} className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">Request Call Back</button>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="ml-2 border px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transform transition-all duration-300 hover:scale-110 shadow-sm"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-gray-700" />}
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-6 w-6 text-gray-700 dark:text-white" /> : <Menu className="h-6 w-6 text-gray-700 dark:text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-4 py-4 space-y-3">
          <button 
            onClick={() => setServicesOpen(!servicesOpen)} 
            className="block text-gray-700 dark:text-gray-200 w-full text-left flex justify-between items-center"
          >
            Our Services
            <svg 
              className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {servicesOpen && (
            <div className="pl-4 space-y-2 mt-2">
              <Link
                to="/dryclean"
                className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Dry Clean Service
              </Link>
              <Link
                to="/jacket-cleaning"
                className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Jacket Cleaning
              </Link>
              <Link
                to="/shoe-cleaning"
                className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Shoe Cleaning
              </Link>
              <Link
                to="/bag-cleaning"
                className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Bag Cleaning
              </Link>
              <Link
                to="/carpet-cleaning"
                className="block px-4 py-2 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Carpet Cleaning
              </Link>
            </div>
          )}

          <button 
            onClick={handlePricingClick} 
            className="block w-full text-left py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-2"
          >
            Pricing
          </button>
          <a href="#" className="block py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-2">About Us</a>
          
          <div className="pt-2 space-y-2">
            <a href="tel:9711758814" className="block bg-orange-500 text-white px-6 py-2 rounded-full text-center font-medium hover:bg-orange-600">
              Call Us
            </a>
            <button 
              onClick={() => {
                setShowPopup(true);
                setMenuOpen(false);
              }} 
              className="block w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Request Call Back
            </button>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="block w-full border px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-center items-center gap-2"
            >
              {darkMode ? (
                <>
                  <Sun className="h-4 w-4 text-yellow-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-gray-700" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Callback Popup */}
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
            
            <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">We're a click away!</h2>
            
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
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors duration-300"
              >
                Request Call Back
              </button>
            </form>
            
            {success && (
              <p className="text-green-600 dark:text-green-400 text-center mt-4 animate-fade-in">
                Request Submitted Successfully!
              </p>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;