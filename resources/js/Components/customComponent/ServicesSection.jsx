import React from "react";
import { usePage } from "@inertiajs/react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from "@inertiajs/react";
import { usePopup } from "../../contexts/PopupContext";

import 'swiper/css';
import 'swiper/css/navigation';

const ServicesSection = () => {
    const { services = [] } = usePage().props;
    const { openBookingPopup } = usePopup();
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
        <div className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff] py-10 lg:py-16 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-40 right-10 w-96 h-96 bg-[#e7d3ba]/20 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#a0815c]/15 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#e7d3ba]/5 to-transparent rounded-full blur-3xl"></div>

            {/* Large background text "Services" */}
            {/* <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <h1 className="text-[6rem] lg:text-[12rem] font-[500] text-[#f5efe3] head  opacity-30 select-none tracking-wider">
                    Services
                </h1>
            </div> */}

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-20 relative">
                    <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-4 font-medium">
                        WHAT WE OFFER
                    </p>
                    <h2 className="text-4xl lg:text-6xl font-[500] text-[#2f3720] relative z-10 head mb-4">
                        Our Signature Services
                    </h2>
                    <p className="text-[#7a705e] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                        Experience beauty redefined with our curated collection of premium services, 
                        crafted by expert artists using world-class techniques.
                    </p>
                </div>

                {/* Services Slider */}
                <div className="relative mb-16">
                    <Swiper
                        onSwiper={setSwiperInstance}
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
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
                                spaceBetween: 28,
                            },
                        }}
                        className="services-swiper !pb-4"
                    >
                        {displayServices.map((service, index) => (
                            <SwiperSlide key={service.id || index}>
                                <div className="group h-full">
                                    {/* Card Container - Fixed Height */}
                                    <div className="relative rounded-3xl overflow-hidden bg-[#12110f] shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col">
                                        {/* Image Section */}
                                        <Link 
                                            href={service.slug_url ? `/services/${service.slug_url}` : '#'}
                                            className="relative block overflow-hidden"
                                        >
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={service.image || "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=500&fit=crop"}
                                                    alt={service.title || "Service"}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                    onError={(e) => {
                                                        e.target.src = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=500&fit=crop";
                                                    }}
                                                />
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-transparent to-transparent"></div>
                                            </div>
                                        </Link>

                                        {/* Content Section - Fixed Height */}
                                        <div className="relative p-6 flex-1 flex flex-col text-white">
                                            {/* Decorative line */}
                                            <div className="w-12 h-0.5 bg-[#a0815c] mb-4"></div>
                                            
                                            <div className="flex-1 flex flex-col">
                                                <Link 
                                                    href={service.slug_url ? `/services/${service.slug_url}` : '#'}
                                                    className="flex-1"
                                                >
                                                    <h3 className="text-xl head font-[600] text-white group-hover:text-[#e7d3ba] transition-colors duration-300 leading-tight mb-3 line-clamp-2">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4">
                                                        {service.description || "Experience luxury and transformation with our expertly crafted beauty services."}
                                                    </p>
                                                </Link>
                                                
                                                {/* Action Buttons */}
                                                <div className="flex items-center gap-3 mt-auto pt-4">
                                                    <button
                                                        onClick={openBookingPopup}
                                                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#a0815c] hover:bg-[#8b6d4a] text-white text-sm font-[500] rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                                                    >
                                                        <Phone className="w-4 h-4" />
                                                        Book Now
                                                    </button>
                                                    <Link
                                                        href={service.slug_url ? `/services/${service.slug_url}` : '#'}
                                                        className="inline-flex items-center justify-center gap-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-[500] rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                                                    >
                                                        View
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Decorative gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#a0815c]/10 via-transparent to-transparent pointer-events-none"></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-4 mt-12">
                    <button 
                        onClick={() => swiperInstance?.slidePrev()}
                        className="flex items-center gap-2 text-[#2f3720] hover:text-[#a0815c] transition-colors font-[600] text-base px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border-2 border-[#e4ded2] hover:border-[#a0815c] hover:shadow-md"
                    >
                        <ChevronLeft size={20} />
                        PREV
                    </button>
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-[#e4ded2]">
                        <span className="text-sm text-[#7a705e]">Slide to explore</span>
                    </div>
                    <button 
                        onClick={() => swiperInstance?.slideNext()}
                        className="flex items-center gap-2 text-[#2f3720] hover:text-[#a0815c] transition-colors font-[600] text-base px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border-2 border-[#e4ded2] hover:border-[#a0815c] hover:shadow-md"
                    >
                        NEXT
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* View All Services Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#3c4c24] hover:bg-[#2f3720] text-white text-base font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                        View All Services
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export { ServicesSection };
