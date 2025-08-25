import React from 'react';
import { ArrowLeft, Mail, Phone, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsAndConditions = ({ onNavigate }) => {
  const handleGoBack = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleGoBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Terms & Conditions</h1>
                <p className="text-sm text-gray-500">WearWisely dryclean Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          {/* Last Updated */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-orange-600" />
              <span className="font-semibold text-orange-800">Last Updated:</span>
              <span className="text-orange-700">January 2025</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to <strong className="text-orange-600">WearWisely</strong> . By availing our dry cleaning, dryclean, and related services, you ("Customer", "you", or "your") agree to the following Terms & Conditions. Please read them carefully before using our services.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Service Use
              </h2>
              <p className="text-gray-700 leading-relaxed ml-11">
                By using our services, you agree to comply with these Terms & Conditions. If you do not agree, please refrain from using our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Garment Handling & Risk Disclaimer
              </h2>
              <div className="ml-11 space-y-3">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div className="text-gray-700">
                      <p className="mb-2">All garments, linens, and fabrics given to WearWisely are handled with the utmost care.</p>
                      <p className="mb-2">Despite professional processes, certain fabrics may be prone to <strong>shrinkage, color bleeding, wear and tear, or fabric damage</strong> due to inherent weaknesses, poor quality dyes, or manufacturer defects.</p>
                      <p className="mb-2">Such items are accepted <strong>strictly at the customer's risk</strong>, and WearWisely assumes no liability for these outcomes.</p>
                      <p>Customers are requested to disclose <strong>special care instructions</strong> (e.g., "dry clean only," "hand wash," delicate embroidery, sequins, leather trims). Failure to do so releases the Company from any responsibility for damage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Lost or Damaged Items
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>While we take every precaution, WearWisely will not be held liable for <strong>loss or theft of garments</strong> once they are delivered.</p>
                <p>In rare cases where damage is proven to be caused by our negligence, compensation will be limited to a maximum of <strong className="text-orange-600">5 times the cleaning charge</strong> of the affected item, not exceeding the actual value of the garment.</p>
                <p>Claims must be raised within <strong className="text-red-600">24 hours of delivery</strong> with proper evidence.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Stains & Results Disclaimer
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>We use industry-standard cleaning methods to remove stains, but <strong>complete stain removal cannot be guaranteed</strong>.</p>
                <p>Some stains may reappear after treatment due to oxidation or hidden residues in the fabric.</p>
                <p>Customers accept that results may vary depending on the <strong>age, fabric type, and stain composition</strong>.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Collection & Delivery
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>Garments will be collected and delivered as per the scheduled time slots chosen by the customer.</p>
                <p>Delivery timelines are estimates and may vary due to unforeseen delays (weather, transport issues, etc.).</p>
                <p>Customers must check their garments at the time of delivery. Complaints raised after acceptance will not be entertained.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Payments
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>All payments must be made at the time of order placement or upon delivery, as per the chosen option.</p>
                <p>Prices are displayed in the service list and may be revised without prior notice.</p>
                <p>Unpaid orders will not be delivered.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Storage Policy
              </h2>
              <div className="ml-11 text-gray-700">
                <p>Garments not collected or accepted within <strong className="text-red-600">30 days of service completion</strong> may be donated or disposed of. WearWisely will not be responsible for such items.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Customer Responsibilities
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Ensure that pockets are emptied before handing over garments. We are not responsible for any valuables, cash, or items left in clothing.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Customers must declare if garments have been in contact with hazardous substances (e.g., chemicals, fuels, oils). Such items may be refused.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Providing false information or misusing services may result in suspension of services.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                Liability Limitations
              </h2>
              <div className="ml-11 text-gray-700">
                <p className="mb-3">WearWisely shall not be responsible for:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Normal wear and tear during the cleaning process.</li>
                  <li>Weakening of fabric due to age or prior damage.</li>
                  <li>Accessories (buttons, zippers, beads, sequins) that are not securely stitched.</li>
                </ul>
                <p className="mt-3">Maximum liability is capped as stated under <strong>Lost or Damaged Items</strong>.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                Governing Law
              </h2>
              <div className="ml-11 text-gray-700">
                <p>These Terms are governed by the laws of India. Any disputes will be handled only in the courts located in Delhi.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                Amendments
              </h2>
              <div className="ml-11 text-gray-700">
                <p>WearWisely reserves the right to update these Terms & Conditions at any time. Updated terms will be published on our website, and continued use of our services constitutes acceptance.</p>
              </div>
            </section>

            {/* Section 12 - Contact */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
                Contact Us
              </h2>
              <div className="ml-11">
                <p className="text-gray-700 mb-4">For queries or complaints, please reach us at:</p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Email:</p>
                        <a href="mailto:wearwiselydrycleaner@gmail.com" className="text-orange-600 hover:text-orange-700">
                          wearwiselydrycleaner@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone:</p>
                        <a href="tel:+919711758814" className="text-orange-600 hover:text-orange-700">
                          +91 9711758814
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-600">
                By using WearWisely services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                © 2025 WearWisely. All rights reserved.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;