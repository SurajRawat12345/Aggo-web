'use client';

export default function ImageGallery() {
  const gallery = [
    {
      id: 1,
      title: 'खेत में काम',
      emoji: '🌾',
      color: 'from-green-300 to-green-500'
    },
    {
      id: 2,
      title: 'ट्रैक्टर चलाना',
      emoji: '🚜',
      color: 'from-lime-300 to-green-500'
    },
    {
      id: 3,
      title: 'फसल की देखभाल',
      emoji: '👨‍🌾',
      color: 'from-emerald-300 to-teal-500'
    },
    {
      id: 4,
      title: 'उत्पाद बिक्री',
      emoji: '📦',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-4">
          कृषि उद्यम शुरू करें
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          AGGO प्लेटफॉर्म पर आपके व्यवसायिक लक्ष्य को साकार करें
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div
                className={`bg-gradient-to-br ${item.color} rounded-2xl h-56 sm:h-64 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                {/* Background animation */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-3">
                  <div className="text-7xl drop-shadow-lg">{item.emoji}</div>
                  <p className="text-white font-bold text-lg drop-shadow-md">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg inline-flex items-center gap-2">
            अभी शुरू करें
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
