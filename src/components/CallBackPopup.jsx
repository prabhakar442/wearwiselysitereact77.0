import React, { useState } from 'react';

const CallBackPopup = () => {
  const [show, setShow] = useState(false);

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

            <select className="w-full border px-3 py-2 rounded mb-3">
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Kolkata</option>
            </select>

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
