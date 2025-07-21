import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceTabs from './components/ServiceTabs';
import ServicesGrid from './components/ServicesGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import JacketPage from './components/JacketPage';
import ShoePage from './components/ShoePage';
import BagPage from './components/BagPage';
import WhatsappFloat from './components/WhatsappFloat';
import CarpetPage from './components/CarpetPage';
import DryCleanPage from './components/DryCleanPage';
import AdminOrderPage from './components/AdminOrderPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

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
          <Route path="/dryclean" element={<DryCleanPage />} />
          <Route path="/jacket-cleaning" element={<JacketPage />} />
          <Route path="/shoe-cleaning" element={<ShoePage />} />
          <Route path="/bag-cleaning" element={<BagPage />} />
          <Route path="/carpet-cleaning" element={<CarpetPage />} />
          <Route path="/admin" element={<AdminOrderPage />} />
        </Routes>

        <Footer />
        <WhatsappFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;
