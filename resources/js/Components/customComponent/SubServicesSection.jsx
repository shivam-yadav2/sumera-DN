import React, { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { usePopup } from "../../contexts/PopupContext";

const SubServicesSection = ({ subServices = [], serviceTitle }) => {
    const { openBookingPopup } = usePopup();
    const [expandedId, setExpandedId] = useState(null);

    const toggleDescription = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };
    const cleanedTitle = serviceTitle
        ? serviceTitle.replace(/services?$/i, "").trim()
        : null;
    const sectionTitle = cleanedTitle
        ? `${cleanedTitle} Services`
        : "Our Sub-Services";
    const sectionSubtitle = cleanedTitle
        ? `Explore complementary treatments that elevate every ${cleanedTitle} experience.`
        : "Choose from our specialized treatments crafted to enhance your overall service.";

    if (!subServices || subServices.length === 0) {
        return null;
    }

    return (
        <section className="bg-gradient-to-br from-[#1a2419] via-[#354a2f] to-[#0f1a0d] py-10 lg:py-16 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-[#4a6040]/15 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#5d7350]/10 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#354a2f]/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16 relative">
                    {/* <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-4 font-medium">
                        SPECIALIZED SERVICES
                    </p> */}
                    <h2 className="text-4xl lg:text-6xl font-[500] text-white relative z-10 head mb-4">
                        {sectionTitle}
                    </h2>
                    {/* <p className="text-gray-200 text-base max-w-2xl mx-auto leading-relaxed">
                        {sectionSubtitle}
                    </p> */}
                </div>

                {/* Sub Services Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 28,
                            },
                        }}
                    >
                        {subServices.map((subService) => (
                            <SwiperSlide key={subService.id}>
                                <div 
                                    className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full ${
                                        expandedId === subService.id ? "ring-1 ring-[#a0815c]/40" : ""
                                    }`}
                                >
                                    {/* Image Container */}
                                    {subService.image && (
                                        <div className="relative overflow-hidden h-64">
                                            <img
                                                src={subService.image}
                                                alt={subService.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                                onError={(e) => {
                                                    e.target.src = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=500&fit=crop";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-[#12110f]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                                        </div>
                                    )}

                                    {/* Content Section */}
                                    <div className="relative p-6 bg-white flex flex-col  items-center h-full">
                                        <h3 className="text-xl font-[600] text-[#2f3720] head leading-tight mb-3 group-hover:text-[#a0815c] transition-colors duration-300">
                                            {subService.title}
                                        </h3>
                                        
                                        {subService.description && (
                                            <>
                                                <div
                                                    className={`text-[#7a705e] text-sm leading-relaxed flex-1 ${
                                                        expandedId === subService.id ? "" : "line-clamp-2"
                                                    }`}
                                                >
                                                    {subService.description}
                                                </div>
                                                {subService.description.length > 100 && (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleDescription(subService.id);
                                                        }}
                                                        className="text-[#a0815c] text-xs font-[600] uppercase tracking-[0.2em] hover:text-[#8b6d4a] transition-colors mt-2 mb-4"
                                                    >
                                                        {expandedId === subService.id ? "Show Less" : "Read More"}
                                                    </button>
                                                )}
                                            </>
                                        )}
                                        
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openBookingPopup();
                                            }}
                                            className="btn-interactive inline-flex items-center gap-2 px-6 py-2.5 bg-[#a0815c] hover:bg-[#8b6d4a] text-white text-sm font-[500] rounded-full shadow-md group-hover:gap-3 mt-auto"
                                        >
                                            <Phone className="w-4 h-4" />
                                            Book Now
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-[#4a6040]/30">
                        <p className="text-gray-200 text-sm">
                            Can't find what you're looking for? 
                            <button 
                                onClick={openBookingPopup}
                                className="text-[#8fb87d] font-[600] hover:underline ml-2 hover:text-[#a8d094] transition-colors"
                            >
                                Contact us for custom services
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubServicesSection;

