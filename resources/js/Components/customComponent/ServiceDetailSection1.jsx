import React from "react";
import { Button } from "@/components/ui/button";

const ServiceDetailSection1 = () => {
    return (
        <div className=" bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-purple-100 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Large background text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
                    <h1 className="text-[8rem] lg:text-[12rem] font-bold text-gray-200 opacity-10 select-none whitespace-nowrap head">
                        Services
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <div className="flex items-center gap-3">
                            <p className="text-lg italic text-gray-700 head">
                                Premium Quality
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
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-[#3c4c24] leading-tight head">
                            Experience the Art of Professional Hair Care
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-base">
                            Our expert stylists combine years of experience with
                            the latest techniques to deliver exceptional results.
                            We use only premium, cruelty-free products that
                            nourish and protect your hair while creating stunning
                            styles.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-[#3c4c24]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#3c4c24] mb-1">
                                        Expert Consultation
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Personalized recommendations tailored to
                                        your hair type, lifestyle, and style
                                        preferences.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-[#3c4c24]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#3c4c24] mb-1">
                                        Premium Products
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        We exclusively use high-quality,
                                        professional-grade products for optimal
                                        results.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-[#3c4c24]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#3c4c24] mb-1">
                                        Relaxing Experience
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Enjoy a spa-like atmosphere designed for
                                        your comfort and relaxation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium mt-6">
                            Book Your Appointment
                        </Button>
                    </div>

                    {/* Right Image Grid */}
                    <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2">
                        <div className="relative w-full h-full">
                            {/* Main large image */}
                            <div className="absolute top-0 left-0 w-full lg:w-[70%] h-[70%] border-[10px] border-white bg-white shadow-2xl overflow-hidden z-10">
                                <img
                                    src="/assets/images/new/44.webp"
                                    alt="Hair styling service"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Small top right image */}
                            <div className="absolute top-12 right-0 w-[45%] h-[40%] border-[8px] border-white bg-white shadow-2xl overflow-hidden z-20">
                                <img
                                    src="/assets/images/new/29.webp"
                                    alt="Salon service"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Bottom left image */}
                            <div className="absolute bottom-0 left-8 w-[50%] h-[40%] border-[8px] border-white bg-white shadow-2xl overflow-hidden z-30">
                                <img
                                    src="/assets/images/new/31.webp"
                                    alt="Hair treatment"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Bottom right image */}
                            <div className="absolute bottom-12 right-0 w-[45%] h-[40%] border-[8px] border-white bg-white shadow-2xl overflow-hidden z-20">
                                <img
                                    src="/assets/images/new/45.webp"
                                    alt="Beauty treatment"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailSection1;

