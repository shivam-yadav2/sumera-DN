import React from "react";
import { Button } from "@/components/ui/button";

const SalonAppointment = () => {
    return (
        <div className="bg-[#3c4c24] py-10 lg:py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Appointment Card */}
                <div className="relative mb-20">
                    {/* Vertical Text on Left */}
                    <div className="absolute left-[-12rem] top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:block">
                        <h3 className="text-8xl font-bold text-gray-200 transform -rotate-90 origin-center whitespace-nowrap head">
                            Offer
                        </h3>
                    </div>

                    {/* Card with half background */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 shadow-2xl rounded-lg overflow-hidden">
                        {/* Left Side - Light Background with Content */}
                        <div
                            className="bg-white p-6 col-span-3 lg:p-16 relative overflow-hidden"
                            style={{
                                backgroundImage:
                                    "url('/assets/images/nake.png')",
                            }}
                        >
                            {/* Subtle pattern overlay */}

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-3">
                                    <p className="text-xl italic text-gray-700 poppins-regular-italic">
                                        Master the Art of Makeup
                                    </p>
                                    {/* SVG remains the same */}
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

                                <h2 className="text-4xl lg:text-5xl font-bold text-[#3c4c24] leading-tight head">
                                    Become a{" "}
                                    <span className="text-[#004d3a] head font-semibold">
                                        Certified Pro
                                    </span>{" "}
                                    at the Sumeera Academy in Lucknow.
                                </h2>

                                <p className="text-gray-700 text-base leading-8 font-medium max-w-md">
                                    Join our specialized courses at Sumeera Academy in Lucknow, taught by
                                    industry veterans. Learn techniques for flawless glowing skin, intricate bridal
                                    looks, and high-fashion editorial styles. Master the art of beauty and makeup
                                    with hands-on training from experts. Your career in the beauty industry starts here
                                    at one of Lucknow's premier beauty academies. Get certified and become a
                                    professional makeup artist, hairstylist, or beauty expert.
                                </p>

                                <Button className="bg-black rounded-none hover:bg-[#3c4c24] text-white px-8 py-6 text-base font-medium transition-all duration-300">
                                    Explore Academy Courses
                                </Button>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative col-span-2  ">
                            <img
                                src="/assets/images/new/49.webp"
                                alt="Beautiful model"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>

                {/* Partners Section */}
                <div className="bg-white py-9 lg:py-12 overflow-hidden rounded-2xl">
                    <div className="relative">
                        <div className="overflow-hidden">
                            {/* Marquee Track */}
                            <div 
                                className="flex gap-6 lg:gap-8 marquee-track"
                                style={{
                                    animation: 'marquee 30s linear infinite'
                                }}
                            >
                                {/* First Set of Logos */}
                                {Array.from({ length: 22 }, (_, i) => i + 1).map((num) => (
                                    <div
                                        key={`first-${num}`}
                                        className="group relative bg-white rounded-xl p-3 lg:p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-gray-200 flex-shrink-0"
                                    >
                                        <img
                                            src={`/assets/images/new/logos/${num}.png`}
                                            alt={`Partner ${num}`}
                                            className="max-w-full max-h-16 lg:max-h-28 object-contain filter group-hover:opacity-80 transition-opacity duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate Set for Seamless Loop */}
                                {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
                                    <div
                                        key={`second-${num}`}
                                        className="group relative bg-white rounded-xl p-3 lg:p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-gray-200 flex-shrink-0"
                                    >
                                        <img
                                            src={`/assets/images/new/logos/${num}.png`}
                                            alt={`Partner ${num}`}
                                            className="max-w-full max-h-16 lg:max-h-28 object-contain filter group-hover:opacity-80 transition-opacity duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Marquee Animation Styles */}
                    <style>{`
                        @keyframes marquee {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        
                        .marquee-track {
                            will-change: transform;
                        }
                        
                        .marquee-track:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
};

export default SalonAppointment;
