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
                            Founder
                        </h3>
                    </div>

                    {/* Card with half background */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 shadow-2xl rounded-lg overflow-hidden">
                        {/* Left Side - Light Background with Content */}
                        <div
                            className="bg-white p-6 col-span-3 lg:p-10 relative overflow-hidden"
                            style={{
                                backgroundImage:
                                    "url('/assets/images/nake.png')",
                            }}
                        >
                            {/* Subtle pattern overlay */}

                            <div className="relative z-10 space-y-4">
                                

                                <h2 className="text-2xl lg:text-3xl font-semibold text-[#3c4c24] leading-tight head">
                                    Shikha Chauhan is a renowned Makeup Artist,
                                    Educator, and Entrepreneur, and the proud
                                    Founder of Sumeera Salon & Academy in
                                    Lucknow.
                                </h2>

                                <p className="text-gray-700 text-base leading-6 font-medium ">
                                    Once a civil services aspirant who even
                                    qualified the PCS prelims, Shikha’s life
                                    took an unexpected yet beautiful turn — from
                                    administration to artistry. Armed with a
                                    Master’s degree and an unshakable passion
                                    for creativity, she chose to redefine her
                                    path and turn her love for beauty into a
                                    meaningful career.
                                </p>
                                <p className="text-gray-700 text-base leading-6 font-medium ">
                                    With dedication, vision, and artistry, she
                                    founded Sumeera Salon & Academy, a space
                                    where beauty meets education and
                                    empowerment. Her work and contribution to
                                    the beauty industry have been widely
                                    recognized — she has been honoured at
                                    numerous social events and proudly holds the
                                    title of “Best Makeup Artist” by ICON of
                                    India.
                                </p>
                                <p className="text-gray-700 text-base leading-6 font-medium ">
                                    Today, Shikha Chauhan continues to inspire
                                    countless aspiring artists with her story —
                                    a journey that proves that when passion
                                    meets purpose, success naturally follows.
                                </p>
                                <p className="text-gray-700 text-base leading-6 font-medium ">
                                    ✨ From UPSC books to makeup brushes — her
                                    journey is a testament to courage,
                                    creativity, and self-belief.
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

              
            </div>
        </div>
    );
};

export default SalonAppointment;
