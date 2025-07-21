import React, { useState, useEffect } from 'react';

const CallBackPopup = () => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
    "Shahdara",
    "Azadpur"
  ];

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

  return (
    <>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
        onClick={() => setShow(true)}
      >
        Request Call Back
      </button>

      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade-in">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg relative animate-slide-up">
            <h2 className="text-lg font-semibold mb-4 text-center">We're a click away!</h2>

            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search your area..."
                className="w-full border px-3 py-2 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
              />
              {showSuggestions && filteredLocations.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 max-h-60 overflow-auto border border-gray-300 bg-white rounded shadow-lg">
                  {filteredLocations.map((location, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
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
              className="w-full border px-3 py-2 rounded mb-3"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border px-3 py-2 rounded mb-3"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full border px-3 py-2 rounded mb-4"
            />

            <div className="text-xs text-gray-500 mb-4">
              <input type="checkbox" checked readOnly className="mr-2" />
              I understand that the DhobiLite representative will contact me via call, SMS, WhatsApp, or RCS.
            </div>

            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mb-2">
              Request Call Back
            </button>

            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
              onClick={() => setShow(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CallBackPopup;