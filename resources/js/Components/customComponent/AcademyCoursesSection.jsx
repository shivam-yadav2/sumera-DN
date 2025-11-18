import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePopup } from "../../contexts/PopupContext";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AcademyCoursesSection = () => {
    const { courses = [] } = usePage().props;
    const { openBookingPopup } = usePopup();
    const [swiperInstance, setSwiperInstance] = useState(null);

    // Filter active courses
    const activeCourses = courses.filter(course => course.is_active === 1 || course.is_active === '1');

    if (activeCourses.length === 0) {
        return null; // Don't render if no courses
    }

    return (
        <>
            <div className="bg-gradient-to-br from-pink-50 via-[#3c4c24]/10 to-[#3c4c24]/40 lg:py-20 py-10 px-4 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200 rounded-full opacity-15 blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl lg:text-6xl font-[500] text-[#3c4c24] head mb-4">
                            Academy Courses
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Discover our professional beauty and styling courses
                        </p>
                    </div>

                    {/* Courses Slider */}
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
                            className="academy-courses-swiper"
                            style={{ paddingBottom: '60px' }}
                        >
                            {activeCourses.map((course) => (
                                <SwiperSlide key={course.id}>
                                    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white h-full flex flex-col">
                                        {/* Image Container - 900x1600 dimension (portrait) */}
                                        <div className="relative w-full" style={{ aspectRatio: '900 / 1600' }}>
                                            <img
                                                src={course.image ? `/${course.image}` : 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&h=1600&fit=crop'}
                                                alt={course.title || 'Course Image'}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 flex-grow flex flex-col bg-white">
                                            <h3 className="font-[500] text-xl text-[#3c4c24] mb-3 head group-hover:text-[#D4B5A0] transition-colors">
                                                {course.title || 'Course Title'}
                                            </h3>
                                            
                                            <div className="flex-grow space-y-2 mb-4">
                                                {course.duration && (
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <span className="text-sm font-medium">Duration:</span>
                                                        <span className="text-sm">{course.duration}</span>
                                                    </div>
                                                )}
                                                {course.fees && (
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <span className="text-sm font-medium">Fees:</span>
                                                        <span className="text-sm font-[500] text-[#3c4c24]">{course.fees}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Individual Book Now Button */}
                                            <button
                                                onClick={openBookingPopup}
                                                className="w-full py-3 bg-gradient-to-r from-[#3c4c24] to-[#2d3820] text-white font-[500] rounded-lg hover:from-[#2d3820] hover:to-[#1a2415] transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
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
                        .academy-courses-swiper .swiper-pagination-bullet {
                            width: 12px;
                            height: 12px;
                            background: #d1d5db;
                            opacity: 0.7;
                            transition: all 0.3s ease;
                        }
                        .academy-courses-swiper .swiper-pagination-bullet-active {
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

export default AcademyCoursesSection;

