import React from "react";
import Layout from "@/Layouts/Layout";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import SubServicesSection from "@/Components/customComponent/SubServicesSection";
import ServiceWhyChoose from "@/Components/customComponent/ServiceWhyChoose";
import SEOHead from "@/Components/SEOHead";
import { usePage } from "@inertiajs/react";
import { Phone, Scissors } from "lucide-react";

const MensGrooming = () => {
    const { service, galleryImages = [], serviceAbout = [], subServices = [], whyChooseUs = [], seo } = usePage().props;
    
    return (
        <Layout>
            <SEOHead seo={seo} />
            <div className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff]">
                <BannerSection 
                    title={service?.title || "Men's Grooming"}
                    subtitle={service?.subtitle || "Professional Salon Services for Men"}
                    description={service?.description || "Expert grooming services tailored specifically for the modern gentleman. From classic cuts to contemporary styles, we've got you covered."}
                    label="MEN'S SERVICES"
                    backgroundImage={service?.banner || "/assets/images/banner.jpg"}
                />

                {/* ServiceAbout Section */}
                {serviceAbout && serviceAbout.length > 0 && (
                    <section className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff] px-4 relative overflow-hidden">
                        <div className="max-w-7xl mx-auto relative z-10">
                            {serviceAbout.map((about, index) => (
                                <div 
                                    key={about.id || index} 
                                    className={`mb-16 last:mb-0`}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
                                        {/* Image Side */}
                                        <div className={`${index % 2 === 0 ? 'lg:order-1 p-6 xl:p-20' : 'lg:order-2 p-6 xl:p-20'}`}>
                                            {about.image ? (
                                                <div className="relative">
                                                    <div className="absolute inset-0 border-[12px] border-[#a0815c] transform translate-x-4 translate-y-4 pointer-events-none rounded-3xl"></div>
                                                    <div className="relative bg-white shadow-2xl overflow-hidden rounded-3xl border border-[#e4ded2]">
                                                        <img
                                                            src={about.image}
                                                            alt={about.title || "Service About"}
                                                            className="w-full aspect-square h-full object-cover object-center"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-[#f8f6f2] h-96 flex items-center justify-center rounded-3xl border border-[#e4ded2]">
                                                    <span className="text-[#7a705e]">No Image</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Side */}
                                        <div className={`${index % 2 === 0 ? 'lg:order-2 py-6 xl:py-10' : 'lg:order-1 py-6 xl:py-10'}`}>
                                            <div className="space-y-6">
                                                {about.title && (
                                                    <h2 className="text-3xl lg:text-4xl font-[500] text-[#2f3720] leading-tight head">
                                                        {about.title}
                                                    </h2>
                                                )}

                                                <div 
                                                    className="text-[#7a705e] leading-relaxed text-base prose prose-stone max-w-none"
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

                {/* Sub Services Section */}
                {subServices && subServices.length > 0 && (
                    <SubServicesSection subServices={subServices} serviceTitle={service?.title || "Men's Grooming"} />
                )}

                {/* Gallery Section */}
                {galleryImages && galleryImages.length > 0 && (
                    <section className="max-w-7xl mx-auto lg:py-20 py-10 md:py-16 px-4">
                        <div className="text-center mb-12">
                            <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-3">
                                OUR WORK
                            </p>
                            <h2 className="text-3xl lg:text-5xl font-[500] text-[#2f3720] mb-6 head">
                                Men's Grooming Gallery
                            </h2>
                        </div>

                        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
                            {galleryImages.map((image, index) => (
                                <div 
                                    key={image.id || index}
                                    className="break-inside-avoid group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] border border-[#e4ded2]"
                                >
                                    <img 
                                        loading="lazy" 
                                        src={image.image} 
                                        alt={image.title || `Gallery image ${index + 1}`}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#3c4c24]/90 via-[#3c4c24]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="font-[500] text-xl mb-2">
                                                {image.title || `Gallery image ${index + 1}`}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Why Choose Us Section */}
                {(whyChooseUs && whyChooseUs.length > 0) && (
                    <ServiceWhyChoose />
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-b from-[#f8f6f2] to-[#ffffff]">
                    <div className="container mx-auto px-4 py-16">
                        <div className="bg-[#12110f] rounded-3xl overflow-hidden text-white">
                            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] items-center">
                                <div className="h-full bg-[url('/assets/images/new/CTA3.webp')] bg-cover bg-center min-h-[260px]" />
                                <div className="relative p-10 md:p-14">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#a0815c]/20 via-transparent to-transparent pointer-events-none" />
                                    <h3 className="text-3xl font-[500] mb-4 head">
                                        Ready for a Fresh Look?
                                    </h3>
                                    <p className="text-white/70 leading-relaxed max-w-2xl mb-6">
                                        Book your appointment today and experience premium men's grooming services. Our expert team is ready to help you look and feel your best.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm font-[500]">
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#3c4c24] hover:bg-[#f5efe3] transition"
                                        >
                                            Book Appointment
                                            <Phone className="h-4 w-4" />
                                        </a>
                                        <a
                                            href="/academy"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                                        >
                                            Join the Academy
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MensGrooming;
