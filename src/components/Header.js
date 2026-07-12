'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowDownToLine } from 'lucide-react';

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
    <header className="sticky top-0 z-50 border-b border-bottom-border shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <p className="font-bold text-primary text-lg">AGGO</p>
              <p className="text-xs text-secondary -mt-1">
                Connecting Agriculture. Building Future.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-[1050px]:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-link hover:text-link-hover hover:bg-link-hover-background rounded-md transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden min-[1050px]:flex items-center">
            <button className="flex items-center gap-2 bg-button-primary-background hover:bg-button-primary-background-hover text-button-primary px-6 py-2.5 rounded-full font-semibold transition-colors duration-200 shadow-md cursor-pointer">
              <ArrowDownToLine />
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="min-[1050px]:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-link-hover-background focus:outline-none transition-colors duration-200"
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
        <nav className="min-[1050px]:hidden bg-white border-t border-bottom-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-link-hover hover:bg-link-hover-background transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-button-primary-background hover:bg-button-primary-background-hover text-white px-4 py-2.5 rounded-full font-semibold transition-colors duration-200 cursor-pointer">
              <ArrowDownToLine />
              Download App
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
