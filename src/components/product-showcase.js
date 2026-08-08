"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTractor,
  faBagShopping,
  faSeedling,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      title: "EQUIPMENT",
      subtitle: "Farm Machinery",
      description:
        "Rent tractors, harvesters, and other agricultural equipment at affordable prices to meet your farming needs.",
      icon: faTractor,
      color: "from-green-400 to-green-600",
    },
    {
      id: 2,
      title: "MARKETPLACE",
      subtitle: "Buy & Sell",
      description:
        "Buy or sell seeds, fertilizers, pesticides, and other farming essentials directly through the platform.",
      icon: faBagShopping,
      color: "from-green-400 to-green-600",
    },
    {
      id: 3,
      title: "LANDS",
      subtitle: "Land Services",
      description:
        "Buy, sell, or lease agricultural land with a secure and hassle-free process.",
      icon: faSeedling,
      color: "from-green-400 to-green-600",
    },
    {
      id: 4,
      title: "SHOPS",
      subtitle: "Aggo Shops",
      description:
        "Explore nearby AGGO shops to purchase high-quality seeds, fertilizers, pesticides, farming tools, and other agricultural essentials at competitive prices.",
      icon: faShop,
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-4">
          AGGO's Core Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive solutions for farmers, buyers, and agricultural
          businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`bg-linear-to-br ${product.color} h-40 sm:h-54 flex flex-col items-center justify-center text-white relative overflow-hidden`}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* <div className="text-6xl mb-4">{product.icon}</div> */}
                    <div className="mb-4 flex justify-center">
                      <FontAwesomeIcon
                        icon={product.icon}
                        className="text-6xl text-white"
                      />
                    </div>
                    <h3 className="text-1xl sm:text-2xl font-bold">
                      {product.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-green-600 text-sm font-semibold mb-2">
                    {product.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <button className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all group/btn cursor-pointer">
                    Know More
                    <span className="text-lg group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
