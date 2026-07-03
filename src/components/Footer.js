'use client';

import { Leaf, Users, Handshake, Tractor, MapPin } from 'lucide-react';

export default function Footer() {
  const stats = [
    {
      icon: Users,
      number: '50K+',
      label: 'सहयुग उपभोक्ता',
      engLabel: 'Active Users',
    },
    {
      icon: Handshake,
      number: '10K+',
      label: 'सहभागी किसान',
      engLabel: 'Farmers',
    },
    {
      icon: Tractor,
      number: '5K+',
      label: 'मशीनरी लिस्टिंग',
      engLabel: 'Machinery',
    },
    {
      icon: MapPin,
      number: '15K+',
      label: 'भूमि लिस्टिंग',
      engLabel: 'Lands',
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white relative">
      {/* Decorative leaf */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <Leaf className="w-48 h-48 text-white" strokeWidth={0.5} fill="white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-12 text-green-100">
            AGGO के साथ जुड़कर बढ़ाएँ अपनी सफलता
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-green-700 rounded-full p-3">
                      <Icon className="w-8 h-8 text-green-200" />
                    </div>
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-green-100 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-green-200 font-medium">{stat.label}</p>
                  <p className="text-xs text-green-300 mt-1">{stat.engLabel}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 my-8"></div>

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <button className="bg-green-200 hover:bg-green-100 text-green-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-colors duration-200 shadow-lg">
            <span className="text-lg">→</span>
            AGGO - किसानों की प्रगति, हमारा संकल्प
          </button>
        </div>

        {/* Footer Links and Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-green-700">
          <div>
            <h3 className="font-bold text-lg mb-4 text-green-100">About</h3>
            <ul className="space-y-2 text-sm text-green-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About AGGO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-green-100">Services</h3>
            <ul className="space-y-2 text-sm text-green-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Equipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shopper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lands
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-green-100">Follow Us</h3>
            <ul className="space-y-2 text-sm text-green-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-green-100">Legal</h3>
            <ul className="space-y-2 text-sm text-green-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm text-green-300">
          <p>&copy; 2026 AGGO. All rights reserved. Connecting Agriculture. Building Future.</p>
        </div>
      </div>
    </footer>
  );
}



// const Footer = () => {
//   return (
//     <div className="bg-blue-700 p-4">
//       Footer
//     </div>
//   )
// }

// export default Footer
