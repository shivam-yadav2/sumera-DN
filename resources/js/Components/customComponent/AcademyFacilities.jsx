import React from "react";

const AcademyFacilities = () => {
    const facilities = [
        {
            title: "Modern Classrooms",
            description:
                "State-of-the-art learning spaces equipped with the latest technology and comfortable seating arrangements.",
            image: "/assets/images/new/19.webp",
        },
        {
            title: "Professional Equipment",
            description:
                "Access to industry-standard tools and equipment used by top professionals worldwide.",
            image: "/assets/images/new/30.webp",
        },
        {
            title: "Practice Stations",
            description:
                "Dedicated individual workstations for hands-on practice and skill development.",
            image: "/assets/images/new/41.webp",
        },
        {
            title: "Product Library",
            description:
                "Extensive collection of professional products from leading brands for learning and practice.",
            image: "/assets/images/new/50.webp",
        },
    ];

    return (
        <div className="min-h-screen bg-[#3c4c24] lg:py-20 py-10 px-4 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-80 h-80 bg-pink-300 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
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
                            World-Class Infrastructure
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

                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 head">
                        Our Facilities & Features
                    </h2>

                    <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                        Experience learning in a professional environment with
                        facilities that match industry standards and exceed your
                        expectations.
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 flex flex-col md:flex-row"
                        >
                            {/* Image Section */}
                            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                                <img
                                    src={facility.image}
                                    alt={facility.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#3c4c24]/20 to-transparent"></div>
                            </div>

                            {/* Content Section */}
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#3c4c24] mb-4 head">
                                    {facility.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    {facility.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features List */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center head">
                        Additional Amenities
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg mb-1">
                                    Free Wi-Fi
                                </h4>
                                <p className="text-white/70 text-sm">
                                    High-speed internet access throughout the campus
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg mb-1">
                                    Library Access
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Comprehensive collection of beauty and fashion books
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg mb-1">
                                    Student Lounge
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Comfortable spaces for relaxation and networking
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg mb-1">
                                    Refreshments
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Complimentary tea, coffee, and snacks
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg mb-1">
                                    Parking Facility
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Secure parking space for students and visitors
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg mb-1">
                                    Flexible Timings
                                </h4>
                                <p className="text-white/70 text-sm">
                                    Morning, afternoon, and weekend batch options
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <p className="text-white/90 text-lg mb-6">
                        Want to see our facilities in person?
                    </p>
                    <button className="bg-white text-[#3c4c24] px-10 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                        Schedule a Campus Tour
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AcademyFacilities;

