import React from 'react';
import { Shield, Lock, Eye, Users, FileText, Phone, Mail, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect and handle your personal information.
          </p>
          <div className="flex items-center justify-center mt-6 text-blue-200">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="text-lg">Last Updated: 23-08-2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-bold text-blue-600">Wear Wisely</span>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our website and services.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">1. Information We Collect</h2>
            </div>
            <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-800 mb-2">Personal Details</h3>
                <p className="text-gray-600">Name, email address, phone number, and delivery address.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-800 mb-2">Order Information</h3>
                <p className="text-gray-600">Garments handed over, service preferences, special care instructions.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-800 mb-2">Payment Details</h3>
                <p className="text-gray-600">Transaction-related information (processed securely through third-party payment gateways).</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-gray-800 mb-2">Usage Data</h3>
                <p className="text-gray-600">Information on how you interact with our website (cookies, device details, IP address).</p>
              </div>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">2. How We Use Your Information</h2>
            </div>
            <p className="text-gray-700 mb-4">Your information is used to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Provide and manage our laundry and dry cleaning services.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Process orders, payments, and deliveries.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Communicate with you regarding orders, offers, or support.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Improve our website, services, and customer experience.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Comply with legal and regulatory obligations.
              </li>
            </ul>
          </section>

          {/* Section 3: Information Sharing */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">3. Information Sharing</h2>
            </div>
            <p className="text-gray-700 mb-4">We do not sell or trade your personal information. However, we may share it with:</p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Service Partners</h3>
                <p className="text-gray-600">Delivery agents, payment processors, or logistics providers who help us fulfill your orders.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Legal Authorities</h3>
                <p className="text-gray-600">If required by law, regulation, or legal process.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Data Security */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">4. Data Security</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                We use reasonable security measures to protect your personal information from unauthorized access, alteration, or misuse.
              </p>
              <p className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Payment details are processed securely by trusted payment gateways. We do not store sensitive payment information like card numbers.
              </p>
            </div>
          </section>

          {/* Section 5: Cookies & Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies & Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use cookies to enhance your browsing experience, analyze traffic, and personalize content. You can disable cookies in your browser settings, but some features of the site may not function properly without them.
            </p>
          </section>

          {/* Section 6: Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to provide our services and comply with legal requirements. Once data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          {/* Section 7: Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">As a customer, you have the right to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">Access and review the personal information we hold about you.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700">Request corrections to inaccurate or incomplete information.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-700">Request deletion of your data, subject to legal and operational requirements.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700">Opt out of marketing communications at any time.</p>
              </div>
            </div>
          </section>

          {/* Section 8: Third-Party Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices, so we encourage you to read their privacy policies separately.
            </p>
          </section>

          {/* Section 9: Updates to this Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Updates to this Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be posted on our website with the "Last Updated" date. Continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Section 10: Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">10. Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Wear Wisely</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <a href="mailto:wearwiselydrycleaner@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    wearwiselydrycleaner@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <a href="tel:9711758814" className="text-green-600 hover:text-green-800 transition-colors">
                    9711758814
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 italic">
              Thank you for trusting Wear Wisely with your laundry and dry cleaning needs. Your privacy and trust are important to us.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;