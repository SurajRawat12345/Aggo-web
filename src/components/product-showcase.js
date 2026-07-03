'use client';

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      title: 'EQUIPMENT',
      subtitle: 'मशीनरी',
      description: 'सभी प्रकार की कृषि मशीनरी किराए पर लें और आपकी आवश्यकताओं को पूरा करें।',
      icon: '🚜',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 2,
      title: 'SHOPPER',
      subtitle: 'खरीदार',
      description: 'अपने उत्पाद बीज, खाद, और अन्य सामग्री सीधे किसानों को बेचें।',
      icon: '👨‍🌾',
      color: 'from-lime-400 to-green-500'
    },
    {
      id: 3,
      title: 'LANDS',
      subtitle: 'जमीन',
      description: 'खेती के लिए जमीन खरीदें, बेचें या किराए पर लें आसानी से।',
      icon: '📍',
      color: 'from-emerald-400 to-green-600'
    },
    {
      id: 4,
      title: 'ABOUT US',
      subtitle: 'हमारे बारे में',
      description: 'हमारा उद्देश्य किसानों की प्रगति, हमारा संकल्प है।',
      icon: '👥',
      color: 'from-teal-400 to-green-600'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-4">
          AGGO की मुख्य सेवाएं
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          किसानों, खरीदारों, और कृषि व्यवसायियों के लिए समस्त समाधान
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${product.color} h-64 sm:h-72 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold">{product.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-green-600 text-sm font-semibold mb-2">{product.subtitle}</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {product.description}
                </p>
                <button className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all group/btn">
                  और जानें
                  <span className="text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
