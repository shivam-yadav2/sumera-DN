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
    const { service, galleryImages } = usePage().props;
    
    return (
        <Layout>
            <BannerSection title={service?.title || "Services"} />
            <ServiceDetailSection1 />

            <section className="max-w-7xl mx-auto py-20 md:py-32">
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
                        <div className="grid lg:grid-cols-3 gap-8">
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

            <SalonPricing />

            {/* <ServicesSection /> */}

            <SalonContact />
        </Layout>
    );
};

export default Service;
