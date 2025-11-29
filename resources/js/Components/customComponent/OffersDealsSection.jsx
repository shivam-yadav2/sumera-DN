import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePopup } from "../../contexts/PopupContext";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OffersDealsSection = () => {
    const { offers = [] } = usePage().props;
    const { openBookingPopup } = usePopup();
    const [swiperInstance, setSwiperInstance] = useState(null);

    // Filter active offers that should be shown on front (is_front = 'yes')
    const activeOffers = offers.filter(offer => 
        (offer.is_active === 1 || offer.is_active === '1') && 
        (offer.is_front === 'yes' || offer.is_front === true)
    );

    if (activeOffers.length === 0) {
        return null; // Don't render if no offers
    }

    return (
        <>
            <div className="bg-gradient-to-br from-[#1a2419] via-[#354a2f] to-[#0f1a0d] lg:py-20 py-10 px-4 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200 rounded-full opacity-15 blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-10 lg:mb-16">
                        <h2 className="text-5xl lg:text-6xl font-[500] text-[#e9dfcc] head mb-4">
                            Deals & Offers
                        </h2>
                        
                    </div>

                    {/* Offers Slider */}
                    <div className="relative">
                        <Swiper
                            onSwiper={setSwiperInstance}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
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
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                            }}
                            className="offers-deals-swiper"
                            style={{ paddingBottom: '60px' }}
                        >
                            {activeOffers.map((offer) => (
                                <SwiperSlide key={offer.id}>
                                    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white h-full flex flex-col">
                                        {/* Image Container - 900x1600 dimension (portrait) */}
                                        <div className="relative w-full" >
                                            <img
                                                src={offer.image }
                                                alt={offer.title || 'Offer Image'}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Badge for special offer */}
                                            
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p- flex-grow flex flex-col bg-white">
                                            {/* Individual Book Now Button */}
                                            <button
                                                onClick={openBookingPopup}
                                                className="w-full py-3 bg-[#e9dfcc]  transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg mt-auto"
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 -translate-x-4"
                        >
                            <ChevronLeft size={24} className="text-[#3c4c24]" />
                        </button>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 translate-x-4"
                        >
                            <ChevronRight size={24} className="text-[#3c4c24]" />
                        </button>
                    </div>

                    {/* Custom Pagination Styles */}
                    <style>{`
                        .offers-deals-swiper .swiper-pagination-bullet {
                            width: 12px;
                            height: 12px;
                            background: #d1d5db;
                            opacity: 0.7;
                            transition: all 0.3s ease;
                        }
                        .offers-deals-swiper .swiper-pagination-bullet-active {
                            background: #3c4c24;
                            opacity: 1;
                            width: 32px;
                            border-radius: 10px;
                        }
                    `}</style>
                </div>
            </div>
        </>
    );
};

export default OffersDealsSection;

