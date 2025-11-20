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
        <div className="py-10 lg:py-16 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#e7d3ba]/20 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#a0815c]/10 rounded-full opacity-30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Content Card with Shadow */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-[#e4ded2] p-6 lg:p-16 relative overflow-visible">
                    {/* Large background text "Welcome" */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                        <h1 className="text-[10rem] lg:text-[14rem] font-[500] text-[#f5efe3] opacity-30 select-none whitespace-nowrap">
                            Welcome
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center relative z-10">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-3">
                                WELCOME TO
                            </p>
                            <h2 className="text-3xl lg:text-4xl font-[500] text-[#2f3720] leading-tight head">
                                Sumeera Salon And Academy
                            </h2>

                            <p className="text-[#7a705e] leading-relaxed text-base">
                                At Sumeera Salon And Academy in Lucknow, we
                                believe that beauty begins with care and
                                confidence. Our passion lies in enhancing your
                                natural charm through expert hair styling,
                                makeup artistry, nail care, skincare, and body
                                treatments. With a focus on personalized
                                attention and premium-quality services, we
                                ensure every client enjoys a truly satisfying
                                and rejuvenating salon experience.
                                <br />
                                <br />
                                Our skilled professionals are dedicated to
                                helping you look flawless and feel empowered,
                                whether it’s a quick refresh or a complete
                                transformation. Discover why Sumeera Salon And
                                Academy is one of Lucknow’s most trusted
                                destinations for beauty and self-care.
                            </p>

                            {/* Signature */}
                            {/* <div className=" flex items-center justify-center pointer-events-none overflow-hidden">
                                    <h1 className="text-[4rem] lg:text-[8rem] head font-[500] text-[#3c4c24] opacity-15 select-none tracking-wider">
                                        Welcome
                                    </h1>
                                </div> */}
                        </div>

                        <div className="relative lg:block hidden">
                                {/* Top Left - Small horizontal image */}

                                <div className="relative px-12 xl:px-20">
                                    <div className="relative">
                                        {/* Border frame */}
                                        <div className="absolute inset-0 border-[12px] border-[#a0815c] pointer-events-none transform -translate-x-8 translate-y-8 rounded-3xl"></div>

                                        {/* Image */}
                                        <div className="relative aspect-square bg-[#f8f6f2] shadow-2xl overflow-hidden rounded-3xl border border-[#e4ded2]">
                                            <img
                                                loading="lazy"
                                                src="/assets/images/new/homeAbout.jpg"
                                                alt="Salon service"
                                                className="object-cover object-top w-full h-full"
                                            />
                                        </div>
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
