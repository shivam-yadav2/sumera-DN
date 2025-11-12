import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { ArrowRight } from "lucide-react";
import { Head, usePage, router } from "@inertiajs/react";
import { toast } from "sonner";
import Layout from "../Layouts/Layout";
import Hero from "../Components/customComponent/Hero";
import { AboutSection } from "../Components/customComponent/AboutSection";
import { ServicesSection } from "../Components/customComponent/ServicesSection";
import SalonGallery from "../Components/customComponent/GalleryPreviewSection";
import { WhyChooseUsSection } from "../Components/customComponent/WhyChooseUsSection";
import SalonContact from "../Components/customComponent/ContactSection";
import SalonAppointment from "../Components/customComponent/SalonAppointment";
import SalonPricing from "../Components/customComponent/SalonPricing";
import AcademyCoursesSection from "../Components/customComponent/AcademyCoursesSection";
import OffersDealsSection from "../Components/customComponent/OffersDealsSection";

const Home = () => {
    const { gallery = [], services = [] } = usePage().props;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
            newErrors.mobile = "Please enter a valid 10-digit phone number";
        }

        if (!formData.service) {
            newErrors.service = "Service is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        router.post("/api/booking", formData, {
            onSuccess: () => {
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    service: "",
                    message: "",
                });
                setErrors({});
                // Show success toast
                toast.success("Message sent successfully!", {
                    description:
                        "Thank you for contacting us! We will get back to you soon.",
                    duration: 5000,
                });
            },
            onError: (errors) => {
                setErrors(errors);
                toast.error("Failed to send message", {
                    description: "Please check the form and try again.",
                });
            },
            onFinish: () => {
                setIsSubmitting(false);
            },
        });
    };
    return (
        <Layout>
            <Head title="Sumeera Salon And Academy - Premium Beauty Destination in Lucknow" />
            <Hero />
            {/* <AboutSection /> */}
            <div className=" bg-[#3c4c24] py-10 px-4 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100 rounded-full opacity-40 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Main Content Card with Shadow */}
                    <div className="bg-white rounded-lg shadow-2xl p-6 lg:p-16 relative overflow-visible">
                        {/* Large background text "Welcome" */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                            <h1 className="text-[10rem] lg:text-[14rem] font-bold text-gray-200 opacity-15 select-none whitespace-nowrap">
                                Welcome
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center relative z-10">
                            {/* Left Content */}
                            <div className="space-y-6">
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#3c4c24] leading-tight head">
                                    Where Beauty Meets Perfection – The Sumeera
                                    Salon And Academy Story
                                </h2>

                                <p className="text-gray-600 leading-relaxed text-base">
                                    At Sumeera Salon And Academy in Lucknow, we
                                    believe that beauty begins with care and
                                    confidence. Our passion lies in enhancing
                                    your natural charm through expert hair
                                    styling, makeup artistry, nail care,
                                    skincare, and body treatments. With a focus
                                    on personalized attention and
                                    premium-quality services, we ensure every
                                    client enjoys a truly satisfying and
                                    rejuvenating salon experience.
                                    <br />
                                </p>

                                <Button
                                    onClick={() => router.visit("/about")}
                                    className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium"
                                >
                                    Read More ...
                                </Button>

                                {/* Signature */}
                                {/* <div className=" flex items-center justify-center pointer-events-none overflow-hidden">
                                    <h1 className="text-[4rem] lg:text-[8rem] head font-semibold text-[#3c4c24] opacity-15 select-none tracking-wider">
                                        Welcome
                                    </h1>
                                </div> */}
                            </div>

                            {/* Right Image Collage */}
                            <div className="relative ">
                                {/* Top Left - Small horizontal image */}

                                <div className="relative px-12 xl:px-20">
                                    <div className="relative">
                                        {/* Purple border frame */}
                                        <div className="absolute inset-0 border-[12px] border-[#3c4c24]  pointer-events-none transform -translate-x-8 translate-y-8"></div>

                                        {/* Image */}
                                        <div className="relative aspect-square bg-white shadow-2xl overflow-hidden">
                                            <img
                                                loading="lazy"
                                                src="/assets/images/new/homeAbout.jpg"
                                                alt="Salon service"
                                                className=" object-cover object-top"
                                            />
                                        </div>
                                    </div>

                                    {/* Bottom Right - Tall vertical image */}
                                    {/* <div className="absolute bottom-12 right-0 w-80 border-[10px] border-[#D4B5A0] bg-white shadow-xl overflow-hidden z-10">
                                    <img
                                        src="/assets/images/new/9.webp"
                                        alt="Beauty treatment"
                                        className="w-full h-full object-cover"
                                    />
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServicesSection />
            <OffersDealsSection />
            <SalonAppointment />
            {/* <AcademyCoursesSection /> */}

            {/* <SalonPricing/> */}
            <SalonGallery gallery={gallery} />
            {/* Partners Section */}
            <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-9 lg:py-12 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-[#3c4c24] mb-4 head">
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
                                    animation: "marquee 30s linear infinite",
                                }}
                            >
                                {/* First Set of Logos */}
                                {Array.from(
                                    { length: 22 },
                                    (_, i) => i + 1
                                ).map((num) => (
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
                                {Array.from(
                                    { length: 16 },
                                    (_, i) => i + 1
                                ).map((num) => (
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
            <SalonContact />
            {/* <WhyChooseUsSection /> */}
        </Layout>
    );
};

export default Home;
