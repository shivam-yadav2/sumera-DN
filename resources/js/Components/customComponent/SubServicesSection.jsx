import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { usePopup } from "../../contexts/PopupContext";

const SubServicesSection = ({ subServices = [] }) => {
    const { openBookingPopup } = usePopup();

    if (!subServices || subServices.length === 0) {
        return null;
    }

    return (
        <section className="bg-gradient-to-b from-[#ffffff] via-[#f8f6f2] to-[#f5efe3] py-10 lg:py-16 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-[#e7d3ba]/20 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#a0815c]/15 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#e7d3ba]/5 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16 relative">
                    <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-4 font-medium">
                        SPECIALIZED SERVICES
                    </p>
                    <h2 className="text-4xl lg:text-6xl font-[500] text-[#2f3720] relative z-10 head mb-4">
                        Our Sub-Services
                    </h2>
                    
                </div>

                {/* Sub Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {subServices.map((subService, index) => (
                        <div 
                            key={subService.id}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            onClick={openBookingPopup}
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
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-[#12110f]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                                    
                                    {/* Hover Icon */}
                                    {/* <div className="absolute top-4 right-4 bg-[#a0815c] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div> */}
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="relative p-6 bg-white">
                                {/* Title */}
                                <h3 className="text-xl font-[600] text-[#2f3720] head leading-tight mb-3 group-hover:text-[#a0815c] transition-colors duration-300">
                                    {subService.title}
                                </h3>
                                
                                {/* Description */}
                                {subService.description && (
                                    <p className="text-[#7a705e] text-sm leading-relaxed line-clamp-2 mb-4">
                                        {subService.description}
                                    </p>
                                )}
                                
                                {/* Action Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openBookingPopup();
                                    }}
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#a0815c] hover:bg-[#8b6d4a] text-white text-sm font-[500] rounded-full transition-all duration-300 shadow-md hover:shadow-lg group-hover:gap-3"
                                >
                                    <Phone className="w-4 h-4" />
                                    Book This Service
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md border border-[#e4ded2]">
                        <p className="text-[#7a705e] text-sm">
                            Can't find what you're looking for? 
                            <button 
                                onClick={openBookingPopup}
                                className="text-[#a0815c] font-[600] hover:underline ml-2"
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

