"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section
      className="relative min-h-100 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/aggo-back.png')",
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-100 max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-6 lg:grid-cols-2">
        {/* Left - Text */}
        <div className="max-w-xl mb-8">
          <p className="mb-3 flex items-center gap-2 text-lg font-semibold text-green-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#087f3e]"></span>
            </span>
            Smart Agriculture Platform 🌱
          </p>
          {/* <div className="flex items-center gap-3 text-[#087f3e] font-semibold text-2xl">
            <span>Smart Agriculture Platform 🌱</span>
          </div> */}

          <h1 className="text-4xl font-bold leading-tight text-green-950 sm:text-5xl lg:text-6xl">
            Empowering Farmers
            <span className="block text-green-600">With Technology</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#24423A] lg:font-bold">
            Discover smart farming solutions, rent agricultural equipment,
            explore land opportunities, and connect with trusted agricultural
            businesses—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-green-700 cursor-pointer w-full sm:w-auto">
              Get Started
            </button>

            <button className="rounded-full px-7 py-3 font-semibold text-white bg-green-600 transition hover:scale-105 hover:bg-green-700 cursor-pointer w-full sm:w-auto">
              <Link
                href="https://play.google.com/store/apps/details?id=aggo.org"
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faArrowDown} />
                Download App
              </Link>
            </button>
          </div>
        </div>

        {/* Right - Farmer Image */}
        <div className="self-end flex justify-center">
          <img
            src="/images/aggo-farmer.png"
            alt="Farmer using AGGO"
            className="w-full max-w-md object-contain lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

// export default function HeroSection() {
//   return (
//     <section className="bg-linear-to-r from-green-50 via-lime-50 to-green-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-6">
//             <h1 className="text-5xl sm:text-6xl font-bold text-green-900 leading-tight">
//               AGGO के साथ
//               <br />
//               <span className="text-green-700">खेती का हर काम आसान</span>
//             </h1>

//             <p className="text-lg text-gray-700 leading-relaxed">
//               किसानों, खरीदारों, ट्रैक्टर मालिकों और कृषि सेवा प्रदाताओं को एक डिजिटल प्लेटफॉर्म पर जोड़कर बनाएँ कृषि व्यवसाय और भी बेहतर।
//             </p>

//             {/* Features List */}
//             <div className="space-y-4 py-6">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
//                   <span className="text-green-700 font-bold">✓</span>
//                 </div>
//                 <span className="text-gray-700">सुरक्षित लेनदेन</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
//                   <span className="text-green-700 font-bold">✓</span>
//                 </div>
//                 <span className="text-gray-700">आसान डिजिटल प्लेटफॉर्म</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
//                   <span className="text-green-700 font-bold">✓</span>
//                 </div>
//                 <span className="text-gray-700">24/7 ग्राहक सहायता</span>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex gap-4 pt-4 flex-wrap">
//               <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg">
//                 ↓ अभी ऐप डाउनलोड करें
//               </button>
//               <button className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors">
//                 📹 वीडियो देखें
//               </button>
//             </div>
//           </div>

//           {/* Right Content - Image Mockup */}
//           <div className="relative h-96 sm:h-125">
//             <div className="absolute inset-0 bg-linear-to-br from-green-200 to-lime-200 rounded-3xl opacity-30"></div>
//             <div className="absolute inset-4 bg-linear-to-br from-green-100 to-lime-100 rounded-2xl border-8 border-white shadow-2xl flex items-center justify-center">
//               <div className="text-center space-y-4">
//                 <div className="text-6xl">📱</div>
//                 <p className="text-green-700 font-semibold">AGGO App</p>
//                 <p className="text-sm text-gray-600">Connect. Grow. Prosper.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
