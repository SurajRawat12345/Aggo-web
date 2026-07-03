'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'EQUIPMENT', href: '#' },
    { label: 'SHOPPER', href: '#' },
    { label: 'LANDS', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-lime-50 to-green-50 border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <p className="font-bold text-green-700 text-lg">AGGO</p>
              <p className="text-xs text-green-600 -mt-1">
                Connecting Agriculture. Building Future.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-100 rounded-md transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-full font-semibold transition-colors duration-200 shadow-md">
              <span>↓</span>
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-green-100 focus:outline-none transition-colors duration-200"
            onClick={toggleMenu}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-green-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-100 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-full font-semibold transition-colors duration-200">
              <span>↓</span>
              Download App
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}


// const Header = () => {
//   return (
//     <div className="bg-red-500">
//       Header 
//     </div>
//   )
// }

// export default Header
