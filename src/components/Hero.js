"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons";

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
      <div className="relative z-10 mx-auto grid min-h-100 max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-7 lg:grid-cols-2">
        {/* Left - Text */}
        <div className="max-w-full justify-self-center lg:max-w-xl mb-8">
          <p className="mb-3 flex items-center gap-2 text-lg font-semibold text-green-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#087f3e]"></span>
            </span>
            Smart Agriculture Platform 🌱
          </p>

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
            <button className="rounded-full px-7 py-3 font-semibold text-white bg-green-600 transition hover:bg-green-700 cursor-pointer w-full sm:w-auto">
              <Link
                href="/contact"
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faPhone} />
                Get In Touch
              </Link>
            </button>

            <button className="rounded-full px-7 py-3 font-semibold text-white bg-green-600 transition hover:bg-green-700 cursor-pointer w-full sm:w-auto">
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
