import React from 'react';

const SalonPricing = () => {
  const pricingItems = [
    {
      title: "Ombré Color",
      price: "$35",
      description: "We have a passion for promoting healthy"
    },
    {
      title: "Hair cut with Blow dry",
      price: "$25",
      description: "Step up your healthy hair care routine with tips"
    },
    {
      title: "Blow Dry & Curl",
      price: "$15",
      description: "Take a peek at a little sample of what we are best."
    },
    {
      title: "Shampoo & Set",
      price: "$40",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
      title: "Color & highlights",
      price: "$45",
      description: "Cutting and styling with cruelty free luxury brands"
    }
  ];

  const pricingItemsRight = [
    {
      title: "Shampoo & Set",
      price: "$40",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
      title: "Color & highlights",
      price: "$45",
      description: "Cutting and styling with cruelty free luxury brands"
    },
    {
      title: "Ombré Color",
      price: "$35",
      description: "We have a passion for promoting healthy"
    },
    {
      title: "Hair cut with Blow dry",
      price: "$25",
      description: "Step up your healthy hair care routine with tips"
    },
    {
      title: "Blow Dry & Curl",
      price: "$15",
      description: "Take a peek at a little sample of what we are best."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Left Side - Makeup Brush Image */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=1200&fit=crop"
          alt="Makeup brush"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative bg-gradient-to-br from-pink-50 via-white to-pink-50 py-20 px-4 lg:ml-[25%]">
        {/* Large background text "Pricing" */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
          <h1 className="text-[10rem] lg:text-[14rem] font-bold text-gray-200 opacity-15 select-none whitespace-nowrap">
            Pricing
          </h1>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg width="50" height="30" viewBox="0 0 50 30" className="text-pink-400 transform rotate-180">
                <path d="M 5 15 Q 15 5, 25 15 T 45 15" stroke="currentColor" fill="none" strokeWidth="2"/>
                <polygon points="5,15 10,12 10,18" fill="currentColor"/>
              </svg>
              <p className="text-lg italic text-gray-700 head">Cutting and styling</p>
              <svg width="50" height="30" viewBox="0 0 50 30" className="text-pink-400">
                <path d="M 5 15 Q 15 5, 25 15 T 45 15" stroke="currentColor" fill="none" strokeWidth="2"/>
                <polygon points="45,15 40,12 40,18" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-[#006A4E] head">
              Our Pricing
            </h2>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
              {/* Pink leaf icon at top */}
              <div className="flex justify-center mb-6">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-pink-400">
                  <path d="M 30 10 Q 15 15, 10 30 Q 15 45, 30 50 Q 30 50, 30 10" fill="currentColor" opacity="0.6"/>
                  <path d="M 30 10 Q 45 15, 50 30 Q 45 45, 30 50" fill="currentColor" opacity="0.8"/>
                  <path d="M 30 10 L 30 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {pricingItems.map((item, index) => (
                <div key={index} className="border-b border-dotted border-gray-300 pb-6 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-3xl font-bold text-[#006A4E] head flex-1">
                      {item.title}
                    </h3>
                    <span className="text-2xl font-bold text-gray-800 ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
              {/* Pink leaf icon at top */}
              <div className="flex justify-center mb-6">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-pink-400">
                  <path d="M 30 10 Q 15 15, 10 30 Q 15 45, 30 50 Q 30 50, 30 10" fill="currentColor" opacity="0.6"/>
                  <path d="M 30 10 Q 45 15, 50 30 Q 45 45, 30 50" fill="currentColor" opacity="0.8"/>
                  <path d="M 30 10 L 30 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {pricingItemsRight.map((item, index) => (
                <div key={index} className="border-b border-dotted border-gray-300 pb-6 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-3xl font-bold text-[#006A4E] head flex-1">
                      {item.title}
                    </h3>
                    <span className="text-2xl font-bold text-gray-800 ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonPricing;