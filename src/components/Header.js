"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "EQUIPMENT", href: "#" },
    { label: "SHOPPER", href: "#" },
    { label: "LANDS", href: "#" },
    { label: "ABOUT US", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-bottom-border shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="object-contain"
                width={60}
                height={60}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-[950px]:flex items-center gap-1">
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
          <div className="hidden min-[950px]:flex items-center gap-2">
            <button className="flex items-center gap-2 bg-button-primary-background hover:bg-button-primary-background-hover text-button-primary px-6 py-2.5 rounded-full font-semibold transition-colors duration-200 shadow-md cursor-pointer">
              <Link
                href="https://play.google.com/store/apps/details?id=aggo.org"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faArrowDown} />
                Download App
              </Link>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="relative min-[950px]:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-black hover:bg-link-hover-background focus:outline-none transition-colors duration-200 cursor-pointer"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>

            {/* Hamburger Icon */}
            <FontAwesomeIcon
              icon={faBars}
              className={`text-2xl absolute h-6 w-6 transition-all duration-300 ease-in-out ${
                isOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            {/* Close Icon */}
            <FontAwesomeIcon
              icon={faX}
              className={`text-2xl absolute h-6 w-6 transition-all duration-300 ease-in-out ${
                isOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 z-40 min-[950px]:hidden transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Sidebar */}
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 space-y-2 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-4 py-3 text-base font-medium text-black transition hover:bg-link-hover-background hover:text-link-hover"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="https://play.google.com/store/apps/details?id=aggo.org"
              target="_blank"
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-button-primary-background px-4 py-3 font-semibold text-button-primary transition hover:bg-button-primary-background-hover"
            >
              <FontAwesomeIcon icon={faArrowDown} />
              Download App
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
