import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
    const [imagePosition, setImagePosition] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setImagePosition((prev) => {
                const newPos = prev + direction * 0.3;
                if (newPos >= 20 || newPos <= -20) {
                    setDirection((d) => -d);
                }
                return newPos;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [direction]);

    return (
        <div className="min-h-screen bg-[#3c4c24] py-20 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Content Card with Shadow */}
                <div className="bg-white rounded-lg shadow-2xl p-12 lg:p-16 relative overflow-visible">
                    {/* Large background text "Welcome" */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                        <h1 className="text-[10rem] lg:text-[14rem] font-bold text-gray-200 opacity-15 select-none whitespace-nowrap">
                            Welcome
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <p className="text-lg italic text-gray-700 head">
                                    Welcome to
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

                            <h2 className="text-4xl lg:text-5xl font-bold text-[#3c4c24] leading-tight head">
                                Our Salon is Most Popular, Clean and Recommended
                                Hair Salon
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-base">
                                We have a passion for promoting healthy,
                                balanced and beautiful living. Offering massage,
                                Acupuncture, Laser Skincare, fitness classes and
                                more, we emphasize preventive care, stress
                                management, and personal growth. While you may
                                find a visit with us to be a spa-like, relaxing
                                and pampering experience,
                            </p>

                            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium">
                                More About
                            </Button>

                            {/* Signature */}
                            <div className=" flex items-center justify-center pointer-events-none overflow-hidden">
                                    <h1 className="text-[4rem] lg:text-[8rem] head font-bold text-[#3c4c24] opacity-15 select-none tracking-wider">
                                        Welcome
                                    </h1>
                                </div>
                        </div>

                        {/* Right Image Collage */}
                        <div className="relative h-[550px] lg:h-[600px]">
                            <div
                                className="relative w-full h-full transition-all duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(${imagePosition}px)`,
                                }}
                            >
                                {/* Top Left - Small horizontal image */}
                                <div className="absolute top-0 left-0 w-48 h-40 border-[10px] border-[#D4B5A0] bg-white shadow-xl overflow-hidden z-30">
                                    <img
                                        src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&h=250&fit=crop"
                                        alt="Hair styling"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Top Right - Medium vertical image */}
                                <div className="absolute top-16 right-12 w-56 h-64 border-[10px] border-[#D4B5A0] bg-white shadow-xl overflow-hidden z-20">
                                    <img
                                        src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=350&h=400&fit=crop"
                                        alt="Hair coloring"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Left - Large vertical image */}
                                <div className="absolute bottom-0 left-8 w-52 h-72 border-[10px] border-[#D4B5A0] bg-white shadow-xl overflow-hidden z-40">
                                    <img
                                        src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=320&h=450&fit=crop"
                                        alt="Salon service"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Right - Tall vertical image */}
                                <div className="absolute bottom-12 right-0 w-44 h-80 border-[10px] border-[#D4B5A0] bg-white shadow-xl overflow-hidden z-10">
                                    <img
                                        src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=280&h=500&fit=crop"
                                        alt="Beauty treatment"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AboutSection };
