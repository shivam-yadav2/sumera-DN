import React from "react";
import { usePage } from "@inertiajs/react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from "@inertiajs/react";

import 'swiper/css';
import 'swiper/css/navigation';

const ServicesSection = () => {
    const { services = [] } = usePage().props;
    const [swiperInstance, setSwiperInstance] = React.useState(null);

    // Fallback services if no data from database
    const fallbackServices = [
        {
            id: "01",
            title: "Change Coloring",
            image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=500&fit=crop",
        },
        {
            id: "02",
            title: "HairCuts",
            image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=500&fit=crop",
        },
        {
            id: "03",
            title: "Perfect Hairstyles",
            image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&h=500&fit=crop",
        },
        {
            id: "04",
            title: "Makeup",
            image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop",
        },
    ];

    // Filter services that have images (services from backend should have images)
    // Use services from backend if available and have images, otherwise use fallback
    const servicesWithImages = services.filter(service => service.image);
    const displayServices = servicesWithImages.length > 0 ? servicesWithImages : fallbackServices;

    return (
        <div className=" bg-gradient-to-br from-pink-50 via-[#3c4c24]/10 to-[#3c4c24]/40 py-10 lg:py-20 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-32 right-20 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-32 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-25 blur-3xl"></div>

            {/* Large background text "Services" */}
            {/* <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <h1 className="text-[6rem] lg:text-[12rem] font-bold text-[#3c4c24] head  opacity-10 select-none tracking-wider">
                    Services
                </h1>
            </div> */}

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10 lg:mb-20 relative">
                    <h2 className="text-5xl lg:text-6xl font-bold text-[#3c4c24] relative z-10 head">
                        Our Services
                    </h2>
                </div>

                {/* Services Slider */}
                <div className="relative mb-12">
                    <Swiper
                        onSwiper={setSwiperInstance}
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="services-swiper"
                    >
                        {displayServices.map((service, index) => (
                            <SwiperSlide key={service.id || index}>
                                <Link 
                                    href={service.slug_url ? `/services/${service.slug_url}` : '#'}
                                    className="block h-full"
                                >
                                    <Card className="group rounded-none relative overflow-hidden border-[12px] border-[#D4B5A0] shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full">
                                        <CardContent className="p-0 h-full flex flex-col">
                                            <div className="relative overflow-hidden flex-shrink-0">
                                                <img
                                                    src={service.image || "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=500&fit=crop"}
                                                    alt={service.title || "Service"}
                                                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                                                    onError={(e) => {
                                                        e.target.src = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=500&fit=crop";
                                                    }}
                                                />
                                            </div>

                                            <div className="bg-white p-6 text-center flex-grow flex items-center justify-center">
                                                <h3 className="text-xl font-bold text-gray-800">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-8 mt-12">
                    <button 
                        onClick={() => swiperInstance?.slidePrev()}
                        className="flex items-center gap-2 text-gray-700 hover:text-[#3c4c24] transition-colors font-medium text-lg"
                    >
                        <ChevronLeft size={24} />
                        PREV
                    </button>
                    <button 
                        onClick={() => swiperInstance?.slideNext()}
                        className="flex items-center gap-2 text-gray-700 hover:text-[#3c4c24] transition-colors font-medium text-lg"
                    >
                        NEXT
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ServicesSection };
