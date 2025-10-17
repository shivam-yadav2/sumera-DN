import React from "react";
import { Button } from "@/components/ui/button";

const SalonAppointment = () => {
    const partners = [
        { name: "PENNY W.", subtitle: "TEXTILES", style: "elegant" },
        { name: "Caroline", subtitle: "BOUTIQUE STORE", style: "script" },
        { name: "J. SMITH", subtitle: "HANDCRAFT", style: "minimal" },
        { name: "B", subtitle: "CAFE & RESTAURANT", style: "circle" },
        { name: "PINKVILLE", subtitle: "HOTEL", style: "modern" },
        { name: "Cheryl", subtitle: "CLOTHING", style: "script" },
    ];

    return (
        <div className="bg-[#3c4c24] py-20 px-4 relative overflow-hidden">
            

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Appointment Card */}
                <div className="relative mb-20">
                    {/* Vertical Text on Left */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:block">
                        <h3 className="text-8xl font-bold text-gray-200 transform -rotate-90 origin-center whitespace-nowrap head">
                            Offer
                        </h3>
                    </div>

                    {/* Card with half background */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-lg overflow-hidden">
                        {/* Left Side - Light Background with Content */}
                        <div
                            className="bg-white p-12 lg:p-16 relative overflow-hidden"
                            style={{
                                backgroundImage:
                                    "url('/assets/images/nake.png')",
                            }}
                        >
                            {/* Subtle pattern overlay */}

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center  gap-3">
                                    <p className="text-xl italic text-gray-700 poppins-regular-italic">
                                        Make an Appointment!
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
                                    & get{" "}
                                    <span className="text-[#004d3a] head font-bold">
                                        25% discount!
                                    </span>
                                </h2>

                                <p className="text-gray-700 text-base font-medium">
                                    Glowing, dewy skin is our thing.
                                </p>

                                <Button className="bg-black rounded-none hover:bg-[#3c4c24] text-white px-8 py-6 text-base font-medium transition-all duration-300">
                                    More Detail
                                </Button>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative h-96 lg:h-auto">
                            <img
                                src="/assets/images/image.png"
                                alt="Beautiful model"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Partners Section */}
                <div className="space-y-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="text-center group cursor-pointer transition-all duration-300 hover:scale-110"
                            >
                                {partner.style === "circle" ? (
                                    <div className="flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mb-2">
                                            <span className="text-3xl font-bold text-white head">
                                                {partner.name}
                                            </span>
                                        </div>
                                        <p className="text-xs text-white tracking-widest">
                                            {partner.subtitle}
                                        </p>
                                    </div>
                                ) : partner.style === "script" ? (
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-3xl italic text-white mb-1 head">
                                            {partner.name}
                                        </h3>
                                        <p className="text-xs text-white tracking-widest uppercase">
                                            {partner.subtitle}
                                        </p>
                                    </div>
                                ) : partner.style === "minimal" ? (
                                    <div className="flex flex-col items-center border-2 border-white px-4 py-3">
                                        <h3 className="text-2xl font-bold text-white mb-1 head">
                                            {partner.name}
                                        </h3>
                                        <div className="w-8 h-8">
                                            <svg
                                                viewBox="0 0 40 40"
                                                className="text-white"
                                            >
                                                <polygon
                                                    points="20,5 25,15 35,15 27,22 30,32 20,26 10,32 13,22 5,15 15,15"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-white tracking-widest mt-1">
                                            {partner.subtitle}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-xl font-bold text-white mb-1 tracking-wide head">
                                            {partner.name}
                                        </h3>
                                        <p className="text-xs text-white tracking-widest">
                                            {partner.subtitle}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalonAppointment;
