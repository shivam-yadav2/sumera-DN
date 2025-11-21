import Layout from "@/Layouts/Layout";
import React from "react";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { AboutSection } from "@/Components/customComponent/AboutSection";
import { ServicesSection } from "@/Components/customComponent/ServicesSection";
import Faq from "@/Components/customComponent/Faq";
import { WhyChooseUsSection } from "@/Components/customComponent/WhyChooseUsSection";
import { usePopup } from "../contexts/PopupContext";
import { Award, Target, Heart, Users, ArrowRight } from "lucide-react";

// Component that uses the hook - must be inside Layout
const AppointmentButton = () => {
    const { openBookingPopup } = usePopup();
    return (
        <button 
            onClick={openBookingPopup}
            className="inline-flex items-center gap-2 bg-white text-[#3c4c24] hover:bg-[#f5efe3] py-3 px-8 text-lg font-medium rounded-full shadow-md transition-all duration-300 head"
        >
            Make An Appointment
        </button>
    );
};

// Founder Section Component
const FounderSection = () => {
    return (
        <section className="py-10 lg:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-3">
                        MEET THE VISIONARY
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-[500] text-[#2f3720] head">
                        About the Founder
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="absolute inset-0 border-[12px] border-[#a0815c] transform translate-x-6 translate-y-6 rounded-3xl pointer-events-none"></div>
                        <div className="relative bg-white shadow-2xl overflow-hidden rounded-3xl border border-[#e4ded2]">
                            <img
                                src="/assets/images/new/homeAbout.jpg"
                                alt="Founder"
                                className="w-full h-[500px] object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-[#e4ded2] p-8 shadow-md">
                            <h3 className="text-3xl font-[500] text-[#2f3720] mb-2 head">
                                Shikha Chauhan
                            </h3>
                            <p className="text-[#a0815c] text-lg mb-4">Founder & Lead Artist</p>
                            
                            <div className="space-y-4 text-[#7a705e] leading-relaxed">
                                <p>
                                    With over a decade of experience in the beauty industry, Shikha Chauhan founded Sumeera Salon And Academy with a vision to create a space where artistry meets expertise. Her passion for beauty and dedication to excellence has transformed countless lives.
                                </p>
                                <p>
                                    A certified professional with international training, Shikha specializes in bridal makeup, fashion styling, and professional beauty education. Her work has been featured in numerous fashion shows and celebrity events across India.
                                </p>
                                <p>
                                    "Beauty is not just about looking good—it's about feeling confident and empowered. At Sumeera, we believe every person deserves to discover their unique beauty."
                                </p>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-[#f8f6f2] rounded-2xl">
                                    <Award className="w-6 h-6 text-[#a0815c]" />
                                    <div>
                                        <p className="text-sm text-[#7a705e]">Experience</p>
                                        <p className="font-[600] text-[#2f3720]">12+ Years</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-[#f8f6f2] rounded-2xl">
                                    <Users className="w-6 h-6 text-[#a0815c]" />
                                    <div>
                                        <p className="text-sm text-[#7a705e]">Happy Clients</p>
                                        <p className="font-[600] text-[#2f3720]">5000+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <Layout>
            {/* Main content with Blog-style background */}
            <div className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff]">
                <BannerSection 
                    title="About Us"
                    subtitle="Where Beauty Meets Excellence"
                    description="Discover the story behind Lucknow's premier beauty destination. Since 2012, we've been transforming lives through expert services and professional training."
                    label="WELCOME TO"
                />
                <AboutSection />
                
                {/* Our Story Section - Dark elegant section */}
                <section className="bg-[#12110f] text-white text-center lg:py-20 py-10 px-4 relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-10"
                        style={{ backgroundImage: "url('/assets/images/1.JPG')" }}
                    ></div>
                    <div className="absolute top-20 left-10 w-64 h-64 bg-[#a0815c]/20 rounded-full opacity-40 blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#e7d3ba]/10 rounded-full opacity-30 blur-3xl"></div>
                    <div className="relative z-10 space-y-5 max-w-4xl mx-auto">
                        <p className="uppercase tracking-[0.4em] text-xs text-[#e7d3ba] mb-3">
                            SINCE 2012
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-[500] my-4 head text-white">
                             Our Story
                        </h1>
                        <p className="max-w-3xl mx-auto mb-6 text-lg text-white/80 leading-relaxed">
                        Beauty is more than a service — it's an experience.
    Since 2012, we've been helping clients and students express their best selves with style and skill.
    Our goal is simple: to blend expertise with a personal touch, so every visit feels special.
                        </p>
                        <AppointmentButton />
                    </div>
                </section>

                {/* About the Founder Section */}
                <FounderSection />
                
                {/* Why Choose Us Section */}
                <WhyChooseUsSection />
                
                <ServicesSection />
                
                {/* FAQ Section */}
                <Faq />

                {/* Dark CTA Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-[#12110f] rounded-3xl overflow-hidden text-white">
                        <div className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] items-center">
                            <div className="relative p-10 md:p-14">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#a0815c]/20 via-transparent to-transparent pointer-events-none" />
                                <h3 className="text-3xl font-[500] mb-4 head">
                                    Join the Sumeera Family
                                </h3>
                                <p className="text-white/70 leading-relaxed max-w-2xl mb-6">
                                    Whether you're looking for premium beauty services or want to kickstart your career in the beauty industry, we're here for you. Experience excellence, expertise, and personalized care.
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm font-[500]">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#3c4c24] hover:bg-[#f5efe3] transition"
                                    >
                                        Book a Visit
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="/academy"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                                    >
                                        Explore Academy
                                    </a>
                                </div>
                            </div>
                            <div className="h-full bg-[url('/assets/images/new/CTA3.jpg')] bg-cover bg-center min-h-[260px]" />
                        </div>
                    </div>
                </div>
            </div>
            
        </Layout>
    );
};

export default About;
