import React from "react";
import Layout from "@/Layouts/Layout";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { ServicesSection } from "@/Components/customComponent/ServicesSection";
import SalonPricing from "@/Components/customComponent/SalonPricing";
import SalonContact from "@/Components/customComponent/ContactSection";
import ServiceDetailSection1 from "@/Components/customComponent/ServiceDetailSection1";
import ServiceDetailSection2 from "@/Components/customComponent/ServiceDetailSection2";
import { usePage } from "@inertiajs/react";

const Service = () => {
    const { service, galleryImages, serviceAbout = [] } = usePage().props;
    
    return (
        <Layout>
            <BannerSection title={service?.title || "Services"} />
            {/* <ServiceDetailSection1 /> */}

            {/* ServiceAbout Section */}
            {serviceAbout && serviceAbout.length > 0 && (
                <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50  px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        {serviceAbout.map((about, index) => (
                            <div 
                                key={about.id || index} 
                                className={`mb-16 last:mb-0 ${
                                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                                }`}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Image Side */}
                                    <div className={`${index % 2 === 0 ? 'lg:order-1  p-12 xl:p-20' : 'lg:order-2 p-12 xl:p-20'}`}>
                                        {about.image ? (
                                            <div className="relative">
                                                <div className="absolute inset-0 border-[12px] border-[#3c4c24] transform translate-x-4 translate-y-4 pointer-events-none"></div>
                                                <div className="relative bg-white shadow-2xl overflow-hidden">
                                                    <img
                                                        src={about.image}
                                                        alt={about.title || "Service About"}
                                                        className="w-full aspect-square h-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg">
                                                <span className="text-gray-400">No Image</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Side */}
                                    <div className={`${index % 2 === 0 ? 'lg:order-2 py-6 xl:py-10' : 'lg:order-1 py-6 xl:py-10'}`}>
                                        <div className="space-y-6">
                                            {/* <div className="flex items-center gap-3">
                                                <p className="text-lg italic text-gray-700 head">
                                                    {about.title || "Service Information"}
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
                                            </div> */}

                                            {about.title && (
                                                <h2 className="text-3xl lg:text-4xl font-[500] text-[#3c4c24] leading-tight head">
                                                    {about.title}
                                                </h2>
                                            )}

                                            <div 
                                                className="text-gray-600 leading-relaxed text-base prose max-w-none"
                                                dangerouslySetInnerHTML={{ __html: about.description }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section className="max-w-7xl mx-auto lg:py-20 py-10 md:py-32">
                <div className="px-4">
                    <div className="flex flex-col gap-6 mb-12 items-start justify-between">
                        <h2 className="text-4xl lg:text-6xl text-[#3c4c24] font-[500] head">
                            {service?.title || "Service"}
                        </h2>
                        <p className="text-lg p-m text-gray-600 text-start">
                            {service?.description || "Service description will appear here."}
                        </p>
                    </div>
                    {galleryImages && galleryImages.length > 0 ? (
                        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
                            {galleryImages.map((image, index) => (
                                <div 
                                    key={image.id || index}
                                    className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
                                >
                                    <img 
                                        loading="lazy" 
                                        src={image.image} 
                                        alt={image.title || `Gallery image ${index + 1}`}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="font-[500] text-xl mb-2">
                                                {image.title || `Gallery image ${index + 1}`}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="columns-2 lg:columns-3 gap-4">
                            <div className="break-inside-avoid col-span-3 text-center py-12 text-gray-500">
                                <p>No gallery images available for this service.</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* <ServiceDetailSection2 /> */}
   
            {/* Partners Section */}
            <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-9 lg:py-12 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl lg:text-5xl font-[500] text-[#3c4c24] mb-4 head">
                            Our Partners
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Trusted by leading brands and organizations
                        </p>
                    </div>
                    
                    {/* Marquee Container */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            {/* Marquee Track */}
                            <div 
                                className="flex gap-6 lg:gap-8 marquee-track"
                                style={{
                                    animation: 'marquee 30s linear infinite'
                                }}
                            >
                                {/* First Set of Logos */}
                                {Array.from({ length: 22 }, (_, i) => i + 1).map((num) => (
                                    <div
                                        key={`first-${num}`}
                                        className="group relative bg-white rounded-xl p-3 lg:p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center  border border-gray-100 hover:border-gray-200 flex-shrink-0"
                                    >
                                        <img
                                            src={`/assets/images/new/logos/${num}.png`}
                                            alt={`Partner ${num}`}
                                            className="max-w-full max-h-16 lg:max-h-28 object-contain filter group-hover:opacity-80 transition-opacity duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate Set for Seamless Loop */}
                                {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
                                    <div
                                        key={`second-${num}`}
                                        className="group relative bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[120px] lg:min-h-[160px] min-w-[200px] lg:min-w-[250px] border border-gray-100 hover:border-gray-200 flex-shrink-0"
                                    >
                                        <img
                                            src={`/assets/images/new/logos/${num}.png`}
                                            alt={`Partner ${num}`}
                                            className="max-w-full max-h-16 lg:max-h-28 object-contain filter group-hover:opacity-80 transition-opacity duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marquee Animation Styles */}
                <style>{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    
                    .marquee-track {
                        will-change: transform;
                    }
                    
                    .marquee-track:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            {/* <SalonPricing /> */}

            {/* <ServicesSection /> */}

            <SalonContact />
        </Layout>
    );
};

export default Service;
