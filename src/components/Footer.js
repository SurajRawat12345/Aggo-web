"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#23252E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold text-green-400 mb-4">AGGO</h3>

            <p className="text-gray-300 leading-8">
              AGGO is your trusted digital agriculture platform that connects
              farmers, buyers, equipment owners, and agricultural businesses.
              Rent farming equipment, buy quality products, explore land
              listings, and grow your farming business with confidence.
            </p>

            <div className="flex items-center gap-6 mt-4">
              <Link
                href="#"
                className="transform transition-all duration-300 hover:scale-110 hover:text-[#1877F2]"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
              </Link>

              <Link
                href="#"
                className="transform transition-all duration-300 hover:scale-110 hover:text-[#E4405F]"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </Link>

              <Link
                href="#"
                className="transform transition-all duration-300 hover:scale-110 hover:text-black"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
              </Link>

              <Link
                href="#"
                className="transform transition-all duration-300 hover:scale-110 hover:text-[#0A66C2]"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </Link>

              <Link
                href="#"
                className="transform transition-all duration-300 hover:scale-110 hover:text-[#EA4335]"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              </Link>
            </div>

            <p className="mt-8 text-gray-400">
              © 2026 AGGO. All Rights Reserved.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/equipment"
                  className="hover:text-green-400 transition"
                >
                  Equipment
                </Link>
              </li>

              <li>
                <Link
                  href="/marketplace"
                  className="hover:text-green-400 transition"
                >
                  Marketplace
                </Link>
              </li>

              <li>
                <Link href="/lands" className="hover:text-green-400 transition">
                  Lands
                </Link>
              </li>

              <li>
                <Link href="/shops" className="hover:text-green-400 transition">
                  Shops
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-400 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Support</h4>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-green-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-green-400 transition">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-green-400 transition">
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:text-green-400 transition"
                >
                  <FontAwesomeIcon icon={faEnvelope} size={18} />
                  support@aggo.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            Empowering Farmers With Technology 🌱
          </p>
        </div>
      </div>
    </footer>
  );
}
