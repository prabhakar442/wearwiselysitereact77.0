import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component imports
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceTabs from './components/ServiceTabs';
import ServicesGrid from './components/ServicesGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import JacketPage from './components/JacketPage';
import ShoePage from './components/ShoePage';
import BagPage from './components/BagPage';
import CarpetPage from './components/CarpetPage';
import DryCleanPage from './components/DryCleanPage';
import AdminOrderPage from './components/AdminOrderPage';
import AboutUs from './components/AboutUs';
import WhatsappFloat from './components/WhatsappFloat';
import FloatingProductCalculator from './components/FloatingProductCalculator';
import ImageOverlay from './components/ImageOverlay';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);

  // Initialize dark mode and welcome banner
  useEffect(() => {
    // Dark mode setup
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') setDarkMode(true);

    // Welcome banner setup - show on new session
    const lastSessionTime = localStorage.getItem('lastSessionTime');
    const currentTime = new Date().getTime();

    // FIXED: Closing parenthesis added here ✅
    if (!lastSessionTime || (currentTime - Number(lastSessionTime) > 30 * 60 * 1000)) {
      setShowWelcomeBanner(true);
    }

    // Update session time
    localStorage.setItem('lastSessionTime', currentTime.toString());
  }, []);

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const handleCloseWelcomeBanner = () => {
    setShowWelcomeBanner(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServiceTabs />
                <ServicesGrid />
                <FAQ />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dryclean" element={<DryCleanPage />} />
          <Route path="/jacket-cleaning" element={<JacketPage />} />
          <Route path="/shoe-cleaning" element={<ShoePage />} />
          <Route path="/bag-cleaning" element={<BagPage />} />
          <Route path="/carpet-cleaning" element={<CarpetPage />} />
          <Route path="/admin" element={<AdminOrderPage />} />
        </Routes>

        <Footer />
        <WhatsappFloat />
        <FloatingProductCalculator />

        {/* Welcome Banner Overlay - shows for new sessions */}
        {showWelcomeBanner && (
          <ImageOverlay onClose={handleCloseWelcomeBanner} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
