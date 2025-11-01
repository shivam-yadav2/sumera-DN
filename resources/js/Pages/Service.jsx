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
                <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 px-4 relative overflow-hidden">
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
                                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                        {about.image ? (
                                            <div className="relative">
                                                <div className="absolute inset-0 border-[12px] border-[#3c4c24] transform translate-x-4 translate-y-4 pointer-events-none"></div>
                                                <div className="relative bg-white shadow-2xl overflow-hidden">
                                                    <img
                                                        src={about.image}
                                                        alt={about.title || "Service About"}
                                                        className="w-full h-full object-cover object-center"
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
                                    <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
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
                                                <h2 className="text-3xl lg:text-4xl font-bold text-[#3c4c24] leading-tight head">
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
                        <h2 className="text-4xl lg:text-6xl text-[#3c4c24] font-bold head">
                            {service?.title || "Service"}
                        </h2>
                        <p className="text-lg p-m text-gray-600 text-start">
                            {service?.description || "Service description will appear here."}
                        </p>
                    </div>
                    {galleryImages && galleryImages.length > 0 ? (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                            {galleryImages.map((image, index) => (
                                <div key={image.id || index}>
                                    <img 
                                        loading="lazy" 
                                        src={image.image} 
                                        alt={image.title || `Gallery image ${index + 1}`}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="col-span-3 text-center py-12 text-gray-500">
                                <p>No gallery images available for this service.</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <ServiceDetailSection2 />

            {/* <SalonPricing /> */}

            {/* <ServicesSection /> */}

            <SalonContact />
        </Layout>
    );
};

export default Service;
