import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            id: "01",
            title: "Change Coloring",
            image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=500&fit=crop",
            offset: "top",
        },
        {
            id: "02",
            title: "HairCuts",
            image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=500&fit=crop",
            offset: "bottom",
        },
        {
            id: "03",
            title: "Perfect Hairstyles",
            image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&h=500&fit=crop",
            offset: "top",
        },
        {
            id: "04",
            title: "Makeup",
            image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop",
            offset: "bottom",
        },
        // {
        //     id: "05",
        //     title: "Nail Art",
        //     image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=500&fit=crop",
        //     offset: "top",
        // },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-[#006A4E]/10 to-[#006A4E]/40 py-20 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-32 right-20 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-32 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-25 blur-3xl"></div>

            {/* Large background text "Services" */}
            <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <h1 className="text-[6rem] lg:text-[12rem] font-bold text-[#006A4E] head  opacity-10 select-none tracking-wider">
                    Services
                </h1>
            </div>

            <div className=" relative z-10">
                {/* Header Section */}
                
                <div className="text-center mb-20 relative">
                    <h2 className="text-5xl lg:text-6xl font-bold text-[#006A4E] relative z-10 head">
                        Our Services
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`${
                                service.offset === "bottom" ? "lg:mt-20" : ""
                            }`}
                        >
                            <Card className="group rounded-none relative overflow-hidden border-[12px] border-[#D4B5A0] shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-72 object-cover"
                                        />
                                    </div>

                                    <div className="bg-white p-6 text-center">
                                        
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {service.title}
                                        </h3>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-8 mt-12">
                    <button className="flex items-center gap-2 text-gray-700 hover:text-[#006A4E] transition-colors font-medium text-lg">
                        <ChevronLeft size={24} />
                        PREV
                    </button>
                    <button className="flex items-center gap-2 text-gray-700 hover:text-[#006A4E] transition-colors font-medium text-lg">
                        NEXT
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ServicesSection };
