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
        <div className="min-h-screen bg-[#3c4c24] py-10 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Content Card with Shadow */}
                <div className="bg-white rounded-lg shadow-2xl p-6 lg:p-16 relative overflow-visible">
                    {/* Large background text "Welcome" */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                        <h1 className="text-[10rem] lg:text-[14rem] font-bold text-gray-200 opacity-15 select-none whitespace-nowrap">
                            Welcome
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center relative z-10">
                        {/* Left Content */}
                        <div className="space-y-6">
                            

                            <h2 className="text-3xl lg:text-4xl font-bold text-[#3c4c24] leading-tight head">
                            Where Beauty Meets Perfection – The Sumeera Salon Story
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-base">
                            At Sumeera Salon in Lucknow, we believe that beauty begins with care and confidence. Our passion lies in enhancing your natural charm through expert hair styling, makeup artistry, nail care, skincare, and body treatments. With a focus on personalized attention and premium-quality services, we ensure every client enjoys a truly satisfying and rejuvenating salon experience.
                            <br />
                            <br />
                            Our skilled professionals are dedicated to helping you look flawless and feel empowered, whether it’s a quick refresh or a complete transformation. Discover why Sumeera Salon is one of Lucknow’s most trusted destinations for beauty and self-care.
                            </p>

                            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium">
                                More About
                            </Button>

                            {/* Signature */}
                            <div className=" flex items-center justify-center pointer-events-none overflow-hidden">
                                    <h1 className="text-[4rem] lg:text-[8rem] head font-semibold text-[#3c4c24] opacity-15 select-none tracking-wider">
                                        Welcome
                                    </h1>
                                </div>
                        </div>

                        {/* Right Image Collage */}
                        <div className="relative h-[550px] lg:h-[600px]">
                            <div
                                className="relative w-full h-full transition-all duration-300 ease-in-out"
                                
                            >
                                {/* Top Left - Small horizontal image */}
                                <div className="absolute top-0 left-0 h-80  lg:w-96 lg:h-96 border-[10px] border-[#D4B5A0] bg-white shadow-xl overflow-hidden z-10">
                                    <img
                                        src="/assets/images/new/25.webp"
                                        alt="Hair styling"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Top Right - Medium vertical image */}
                                <div className="absolute top-40 right-0  lg:w-auto h-64 lg:h-80 border-[10px] border-[#D4B5A0] bg-white shadow-xl overflow-hidden z-20">
                                    <img
                                        src="/assets/images/new/44.webp"
                                        alt="Hair coloring"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Left - Large vertical image */}
                                <div className="absolute bottom-0 left-0 lg:left-8 w- h-64 lg:h-72  border-[10px] border-[#D4B5A0] bg-white shadow-xl overflow-hidden z-40">
                                    <img
                                        src="/assets/images/new/39.webp"
                                        alt="Salon service"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Right - Tall vertical image */}
                                {/* <div className="absolute bottom-12 right-0 w-80 border-[10px] border-[#D4B5A0] bg-white shadow-xl overflow-hidden z-10">
                                    <img
                                        src="/assets/images/new/9.webp"
                                        alt="Beauty treatment"
                                        className="w-full h-full object-cover"
                                    />
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AboutSection };
