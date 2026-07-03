'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-linear-to-r from-green-50 via-lime-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-green-900 leading-tight">
              AGGO के साथ
              <br />
              <span className="text-green-700">खेती का हर काम आसान</span>
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              किसानों, खरीदारों, ट्रैक्टर मालिकों और कृषि सेवा प्रदाताओं को एक डिजिटल प्लेटफॉर्म पर जोड़कर बनाएँ कृषि व्यवसाय और भी बेहतर।
            </p>

            {/* Features List */}
            <div className="space-y-4 py-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
                <span className="text-gray-700">सुरक्षित लेनदेन</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
                <span className="text-gray-700">आसान डिजिटल प्लेटफॉर्म</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
                <span className="text-gray-700">24/7 ग्राहक सहायता</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4 flex-wrap">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg">
                ↓ अभी ऐप डाउनलोड करें
              </button>
              <button className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors">
                📹 वीडियो देखें
              </button>
            </div>
          </div>

          {/* Right Content - Image Mockup */}
          <div className="relative h-96 sm:h-125">
            <div className="absolute inset-0 bg-linear-to-br from-green-200 to-lime-200 rounded-3xl opacity-30"></div>
            <div className="absolute inset-4 bg-linear-to-br from-green-100 to-lime-100 rounded-2xl border-8 border-white shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">📱</div>
                <p className="text-green-700 font-semibold">AGGO App</p>
                <p className="text-sm text-gray-600">Connect. Grow. Prosper.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
