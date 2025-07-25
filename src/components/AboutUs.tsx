import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Heart, Truck, Shield, Award, Star, ChevronDown } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Clock, title: "25+ Years Experience", desc: "Trusted expertise since 1999" },
    { icon: Truck, title: "Doorstep Service", desc: "Pickup & delivery at your convenience" },
    { icon: Shield, title: "Quality Guarantee", desc: "Professional care for every garment" },
    { icon: Heart, title: "Personal Touch", desc: "Treating your clothes like our own" }
  ];

  const timeline = [
    { year: "1999", event: "Started neighborhood shop in New Delhi", icon: "🏪" },
    { year: "2010", event: "Expanded to serve multiple generations", icon: "👨‍👩‍👧‍👦" },
    { year: "2020", event: "Embraced digital transformation", icon: "💻" },
    { year: "2024", event: "Launched Wear Wisely online platform", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className={`text-center max-w-6xl transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative mb-8">
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
              About Us
            </h1>
            <div className="absolute -top-4 -right-4 text-6xl animate-spin-slow">
              <Sparkles className="text-yellow-400" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Wear Wisely
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Bringing 25+ years of trusted dry cleaning excellence to your doorstep through innovative technology
          </p>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown size={40} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Story
              </h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="transform hover:scale-105 transition-transform duration-300 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  At Wear Wisely, we bring over 25 years of trusted dry cleaning experience into a new, smarter way to care for your clothes.
                </p>
                <p className="transform hover:scale-105 transition-transform duration-300 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  Before launching our online platform, we proudly operated a well-known neighborhood dry cleaning shop in New Delhi, serving generations of loyal customers who relied on us for exceptional garment care.
                </p>
                <p className="transform hover:scale-105 transition-transform duration-300 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  Over the years, we've handled everything from daily wear to delicate couture — always with precision, professionalism, and a personal touch.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">👔</div>
                  <h4 className="text-2xl font-bold text-cyan-400">From Neighborhood to Digital</h4>
                  <p className="text-gray-300">Evolving with technology while maintaining our commitment to quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="transform hover:scale-105 transition-all duration-300 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-500 hover:scale-110 ${
                    activeFeature === index ? 'scale-105' : ''
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Icon size={32} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-cyan-400">{feature.title}</h4>
                      <p className="text-gray-300">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Vision Today
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Wear Wisely was created to combine the craftsmanship of traditional dry cleaning with the ease and efficiency of modern technology. With convenient online booking, doorstep pickup and delivery, and a commitment to quality care, we make it easier than ever to keep your wardrobe looking its best — without ever stepping out of your home.
              </p>
              <div className="flex items-center justify-center space-x-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're navigating a busy schedule or simply want hassle-free clothing care, we're here to help you wear clean, wear smart — Wear Wisely.
          </p>
          <button className="group relative px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:from-purple-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Wear Wisely
            </span>
            <Sparkles className="text-purple-400" />
          </div>
          <p className="text-gray-400">
            © 2024 Wear Wisely. Crafting excellence in garment care since 1999.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;