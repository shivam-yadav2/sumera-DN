import React from "react";

const ServiceDetailSection2 = () => {
    const features = [
        {
            title: "Expert Stylists",
            description:
                "Our team consists of highly trained professionals with years of experience in the latest hair trends and techniques.",
            icon: "✨",
            image: "/assets/images/new/43.webp",
        },
        {
            title: "Quality Products",
            description:
                "We use only premium, salon-grade products that are gentle on your hair while delivering exceptional results.",
            icon: "💎",
            image: "/assets/images/new/47.webp",
        },
        {
            title: "Personalized Service",
            description:
                "Every client receives a customized consultation to ensure the perfect style that complements your unique features.",
            icon: "👤",
            image: "/assets/images/new/51.webp",
        },
    ];

    return (
        <div className="min-h-screen bg-[#3c4c24] lg:py-20 py-10 px-4 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <svg
                            width="50"
                            height="30"
                            viewBox="0 0 50 30"
                            className="text-pink-400 transform rotate-180"
                        >
                            <path
                                d="M 5 15 Q 15 5, 25 15 T 45 15"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                            />
                            <polygon
                                points="5,15 10,12 10,18"
                                fill="currentColor"
                            />
                        </svg>
                        <p className="text-lg italic text-white/90 head">
                            Why Choose Us
                        </p>
                        <svg
                            width="50"
                            height="30"
                            viewBox="0 0 50 30"
                            className="text-pink-400"
                        >
                            <path
                                d="M 5 15 Q 15 5, 25 15 T 45 15"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                            />
                            <polygon
                                points="45,15 40,12 40,18"
                                fill="currentColor"
                            />
                        </svg>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-[500] text-white mb-6 head">
                        What Makes Us Special
                    </h2>

                    <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                        We pride ourselves on delivering exceptional service with
                        attention to detail, ensuring every client leaves feeling
                        confident and beautiful.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Section */}
                            <div className="relative  overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                
                                {/* Icon Overlay */}
                                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 space-y-4">
                                <h3 className="text-2xl font-[500] text-[#3c4c24] head">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-3xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl lg:text-6xl font-[500] text-white mb-2 head">
                                15+
                            </div>
                            <p className="text-white/80 text-lg">
                                Years of Excellence
                            </p>
                        </div>
                        <div className="text-center border-l-0 md:border-l border-white/20">
                            <div className="text-5xl lg:text-6xl font-[500] text-white mb-2 head">
                                10K+
                            </div>
                            <p className="text-white/80 text-lg">
                                Happy Clients
                            </p>
                        </div>
                        <div className="text-center border-l-0 md:border-l border-white/20">
                            <div className="text-5xl lg:text-6xl font-[500] text-white mb-2 head">
                                50+
                            </div>
                            <p className="text-white/80 text-lg">
                                Expert Stylists
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-white/90 text-lg mb-6">
                        Ready to transform your look?
                    </p>
                    <button className="bg-white text-[#3c4c24] px-10 py-4 text-lg font-[500] rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                        Schedule a Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailSection2;

