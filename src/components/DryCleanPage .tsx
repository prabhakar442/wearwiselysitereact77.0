import React from 'react';

const DryCleanPage = () => {
  const handleCallBackClick = () => {
    window.dispatchEvent(new Event('showCallBackPopup'));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* Banner Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Best Dry Cleaning Services Near Me
        </h1>
        <p className="text-lg mb-6">| Free Pickup & Delivery within 48 Hours</p>
        <button
          className="bg-green-600 px-6 py-2 rounded-full hover:bg-green-700 transition"
          onClick={handleCallBackClick}
        >
          Request Call Back
        </button>
      </section>

      {/* Service Info */}
      <section className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        <h2 className="text-2xl font-bold">Professional Dry Cleaning for Everyday & Premium Wear</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Our expert dry cleaning service extends the life of your clothes, removes tough stains, and restores fabric freshness. Trusted by thousands of customers for spotless, damage-free cleaning.
        </p>
      </section>

      {/* Price Table */}
      <section className="max-w-5xl mx-auto py-8 px-4">
        <h2 className="text-xl font-semibold mb-4">Dry Cleaning Rates (Delhi)</h2>
        <table className="w-full border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border p-2">Shirt / Top</th>
              <th className="border p-2">Trousers / Bottom</th>
              <th className="border p-2">Saree / Dupatta</th>
              <th className="border p-2">Winter Wear</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                <span className="line-through text-gray-500">₹120</span>{' '}
                <span className="font-semibold">₹80</span>
              </td>
              <td className="border p-2">
                <span className="line-through text-gray-500">₹150</span>{' '}
                <span className="font-semibold">₹100</span>
              </td>
              <td className="border p-2">
                <span className="line-through text-gray-500">₹200</span>{' '}
                <span className="font-semibold">₹150</span>
              </td>
              <td className="border p-2">
                <span className="line-through text-gray-500">₹350</span>{' '}
                <span className="font-semibold">₹250</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">FAQs - Dry Cleaning</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded">How is dry cleaning different from normal washing?</li>
          <li className="border p-4 rounded">Do you offer free home pickup and delivery?</li>
          <li className="border p-4 rounded">Can I request urgent express service?</li>
          <li>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={handleCallBackClick}
            >
              Request Call Back
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DryCleanPage;
