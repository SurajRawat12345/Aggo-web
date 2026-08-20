"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="">
      <div className="text-black w-full mt-12">
        <div className="m-4 flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="max-w-lg text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
                AGGO at a Glance
              </h2>
            </div>
            <div className="text-lg sm:text-2xl text-primary mt-6">
              Everything Farmers Need, All in One Place
            </div>
            <div className="text-justify mt-4">
              AGGO brings essential agricultural services together in one simple
              platform. Discover and rent farming equipment, explore crops and
              markets, find agricultural land, and connect with trusted
              shops—all designed to make farming easier, smarter, and more
              connected.
            </div>
            <div className="font-bold mt-4">
              One Platform. Smarter Farming. Better Opportunities. 🌱
            </div>
          </div>
          <div className="">
            <div className="relative border-8 border-black rounded-3xl z-0 bg-black">
              <div className="absolute left-1/2 top-1.5 z-20 h-3 w-12 -translate-x-1/2 rounded-full bg-black"></div>
              <img
                src="/images/aggo-app.gif"
                alt="AGGO at a glance"
                className="h-100 rounded-2xl border-3 border-black"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-40 overflow-hidden relative bg-white">
          <div className="absolute bottom-0 w-full h-20 bg-amber-600">
            <div className="absolute top-3 w-full border-t-4 border-amber-800" />
            <div className="absolute top-10 w-full border-t-4 border-amber-800" />
            <div className="absolute top-16 w-full border-t-4 border-amber-800" />
          </div>

          <img
            src="/images/tractor.png"
            className="h-20 tractor-animation absolute bottom-16 z-10"
            alt="tractor"
          />
        </div>
      </div>
    </section>
  );
}
