import React from "react";
import Layout from "@/Layouts/Layout";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { ServicesSection } from "@/Components/customComponent/ServicesSection";
import SalonPricing from "@/Components/customComponent/SalonPricing";
import SalonContact from "@/Components/customComponent/ContactSection";
import ServiceDetailSection1 from "@/Components/customComponent/ServiceDetailSection1";
import ServiceDetailSection2 from "@/Components/customComponent/ServiceDetailSection2";
import ServiceWhyChoose from "@/Components/customComponent/ServiceWhyChoose";
import SubServicesSection from "@/Components/customComponent/SubServicesSection";
import SEOHead from "@/Components/SEOHead";
import { usePage } from "@inertiajs/react";
import { Phone } from "lucide-react";

const Service = () => {
    const {
        service,
        galleryImages,
        serviceAbout = [],
        subServices = [],
        seo,
    } = usePage().props;

    return (
        <Layout>
            <SEOHead seo={seo} />
            <div className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff]">
                <BannerSection
                    title={service?.title || "Our Services"}
                    subtitle={service?.subtitle || null}
                    description={
                        service?.description ||
                        "Experience luxury beauty treatments designed to enhance your natural beauty and boost your confidence. Our expert team uses premium products and latest techniques."
                    }
                    label={service?.banner_label || "PREMIUM SERVICES"}
                />

                {/* ServiceAbout Section */}
                {serviceAbout && serviceAbout.length > 0 && (
                    <section className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff] px-4 relative overflow-hidden">
                        <div className="max-w-7xl mx-auto relative z-10">
                            {serviceAbout.map((about, index) => (
                                <div
                                    key={about.id || index}
                                    className={`mb-16 last:mb-0 ${
                                        index % 2 === 0
                                            ? ""
                                            : "lg:flex-row-reverse"
                                    }`}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
                                        {/* Image Side */}
                                        <div
                                            className={`${
                                                index % 2 === 0
                                                    ? "lg:order-1  p-6 xl:p-20"
                                                    : "lg:order-2 p-6 xl:p-20"
                                            }`}
                                        >
                                            {about.image ? (
                                                <div className="relative">
                                                    <div className="absolute inset-0 border-[12px] border-[#a0815c] transform translate-x-4 translate-y-4 pointer-events-none rounded-3xl"></div>
                                                    <div className="relative bg-white shadow-2xl overflow-hidden rounded-3xl border border-[#e4ded2]">
                                                        <img
                                                            src={about.image}
                                                            alt={
                                                                about.title ||
                                                                "Service About"
                                                            }
                                                            className="w-full aspect-square h-full object-cover object-center"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-[#f8f6f2] h-96 flex items-center justify-center rounded-3xl border border-[#e4ded2]">
                                                    <span className="text-[#7a705e]">
                                                        No Image
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Side */}
                                        <div
                                            className={`${
                                                index % 2 === 0
                                                    ? "lg:order-2 py-6 xl:py-10"
                                                    : "lg:order-1 py-6 xl:py-10"
                                            }`}
                                        >
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
                                                    <h2 className="text-3xl lg:text-4xl font-[500] text-[#2f3720] leading-tight head">
                                                        {about.title}
                                                    </h2>
                                                )}

                                                <div
                                                    className="text-[#7a705e] leading-relaxed text-base prose prose-stone max-w-none"
                                                    dangerouslySetInnerHTML={{
                                                        __html: about.description,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Sub Services Section */}
                <SubServicesSection
                    subServices={subServices}
                    serviceTitle={service?.title}
                />

                <section className="max-w-7xl mx-auto lg:py-20 py-10 md:py-32">
                    <div className="px-4">
                        {/* <div className="flex flex-col gap-6 mb-12 items-start justify-between">
                        <h2 className="text-4xl lg:text-6xl text-[#3c4c24] font-[500] head">
                            {service?.title || "Service"}
                        </h2>
                        <p className="text-lg p-m text-gray-600 text-start">
                            {service?.description || "Service description will appear here."}
                        </p>
                    </div> */}
                        {galleryImages && galleryImages.length > 0 ? (
                            <div className="columns-2 lg:columns-3 gap-4 space-y-4">
                                {galleryImages.map((image, index) => (
                                    <div
                                        key={image.id || index}
                                        className="break-inside-avoid group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] border border-[#e4ded2]"
                                    >
                                        <img
                                            loading="lazy"
                                            src={image.image}
                                            alt={
                                                image.title ||
                                                `Gallery image ${index + 1}`
                                            }
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#3c4c24]/90 via-[#3c4c24]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="font-[500] text-xl mb-2">
                                                {image.title || `Gallery image ${index + 1}`}
                                            </h3>
                                        </div>
                                    </div> */}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="columns-2 lg:columns-3 gap-4">
                                <div className="break-inside-avoid col-span-3 text-center py-12 text-[#7a705e]">
                                    <p>
                                        No gallery images available for this
                                        service.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                {/* <ServiceDetailSection2 /> */}
                {/* Why Choose Us Section */}
                <div className="lg:block hidden">
                    <ServiceWhyChoose />
                </div>
                {/* Partners Section */}
                <section className="bg-gradient-to-b from-[#f8f6f2] via-[#f5efe3] to-[#f8f6f2] py-12 lg:py-16 px-4 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 lg:mb-16">
                            {/* <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-3">
                            TRUSTED PARTNERSHIPS
                        </p> */}
                            <h2 className="text-3xl lg:text-5xl font-[500] text-[#2f3720] mb-4 head">
                                Makeup Product Used
                            </h2>
                        </div>

                        {/* Marquee Container */}
                        <div className="relative">
                            <div className="overflow-hidden">
                                {/* Marquee Track */}
                                <div
                                    className="flex gap-6 lg:gap-8 marquee-track"
                                    style={{
                                        animation:
                                            "marquee 5s linear infinite",
                                    }}
                                >
                                    {/* First Set of Logos */}
                                    {Array.from(
                                        { length: 22 },
                                        (_, i) => i + 1
                                    ).map((num) => (
                                        <div
                                            key={`first-${num}`}
                                            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-5 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-[#e4ded2] hover:border-[#a0815c] flex-shrink-0"
                                        >
                                            <img
                                                src={`/assets/images/new/logos/${num}.webp`}
                                                alt={`Partner ${num}`}
                                                className="max-w-full max-h-16 lg:max-h-28 object-contain filter group-hover:opacity-80 transition-opacity duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                    {/* Duplicate Set for Seamless Loop */}
                                    {Array.from(
                                        { length: 16 },
                                        (_, i) => i + 1
                                    ).map((num) => (
                                        <div
                                            key={`second-${num}`}
                                            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[120px] lg:min-h-[160px] min-w-[200px] lg:min-w-[250px] border border-[#e4ded2] hover:border-[#a0815c] flex-shrink-0"
                                        >
                                            <img
                                                src={`/assets/images/new/logos/${num}.webp`}
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

                {/* Dark CTA Section */}
                <div className="bg-gradient-to-b from-[#f8f6f2] to-[#ffffff]">
                    <div className="container mx-auto px-4 py-16">
                        <div className="bg-[#12110f] rounded-3xl overflow-hidden text-white">
                            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] items-center">
                                <div className="h-full bg-[url('/assets/images/new/CTA3.webp')] bg-cover bg-center min-h-[260px]" />
                                <div className="relative p-10 md:p-14">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#a0815c]/20 via-transparent to-transparent pointer-events-none" />
                                    <h3 className="text-3xl font-[500] mb-4 head">
                                        Ready to Transform Your Look?
                                    </h3>
                                    <p className="text-white/70 leading-relaxed max-w-2xl mb-6">
                                        Book your appointment today and
                                        experience the difference our expert
                                        team can make. Whether it's a special
                                        occasion or everyday pampering, we're
                                        here to make you look and feel your
                                        best.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm font-[500]">
                                        <a
                                            href="/contact"
                                            className="btn-interactive inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#3c4c24] hover:bg-[#f5efe3]"
                                        >
                                            Book Appointment
                                            <Phone className="h-4 w-4" />
                                        </a>
                                        <a
                                            href="/academy"
                                            className="btn-interactive inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"
                                        >
                                            Join the Academy
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SalonContact />
            </div>
        </Layout>
    );
};

export default Service;
