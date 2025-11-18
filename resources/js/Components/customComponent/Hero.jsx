import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePage } from "@inertiajs/react";

const Hero = () => {
    const { sliders = [] } = usePage().props;
    console.log(sliders);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fallback slides in case there are no sliders in database
    const defaultSlides = [
        {
            subtitle: "Premium Beauty",
            title: "Sumeera Salon And Academy",
            description:
                "Your dream of sleek, healthy looking hair that looks picture perfect, ready to rock on any occasion? Visit Sumeera Salon And Academy in Lucknow!",
            image: "/assets/images/1.JPG",
        },
        {
            subtitle: "Luxury Experience",
            title: "Sumeera Salon And Academy",
            description:
                "Experience the ultimate in hair care and styling with our professional team of experts. Located in the heart of Lucknow.",
            image: "/assets/images/2.JPG",
        },
        {
            subtitle: "Expert Artistry",
            title: "Sumeera Salon And Academy",
            description:
                "Transform your look with our cutting-edge techniques and premium products at Sumeera Salon And Academy, your trusted beauty destination in Lucknow.",
            image: "/assets/images/3.JPG",
        },
    ];
    
    // Use sliders from backend if available, otherwise use default slides
    const slides = sliders.length > 0 ? sliders : defaultSlides;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[400px] lg:h-[90vh] mt-[80px] lg:mt-[70px] overflow-hidden">
            {/* Decorative flower elements */}
            {/* <div className="absolute top-20 left-10 w-48 h-48 opacity-20 pointer-events-none z-10">
                <svg viewBox="0 0 200 200" className="text-[#3c4c24]">
                    <circle cx="100" cy="100" r="30" fill="currentColor" />
                    <circle
                        cx="70"
                        cy="70"
                        r="25"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="130"
                        cy="70"
                        r="25"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="70"
                        cy="130"
                        r="25"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="130"
                        cy="130"
                        r="25"
                        fill="currentColor"
                        opacity="0.8"
                    />
                </svg>
            </div>

            <div className="absolute bottom-20 left-20 w-64 h-64 opacity-15 pointer-events-none z-10">
                <svg viewBox="0 0 200 200" className="text-[#3c4c24]">
                    <circle cx="100" cy="100" r="40" fill="currentColor" />
                    <circle
                        cx="60"
                        cy="60"
                        r="30"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="140"
                        cy="60"
                        r="30"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="60"
                        cy="140"
                        r="30"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="140"
                        cy="140"
                        r="30"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="100"
                        cy="40"
                        r="25"
                        fill="currentColor"
                        opacity="0.7"
                    />
                </svg>
            </div>

            <div className="absolute top-10 right-20 w-56 h-56 opacity-20 pointer-events-none z-10">
                <svg viewBox="0 0 200 200" className="text-[#3c4c24]">
                    <circle cx="100" cy="100" r="35" fill="currentColor" />
                    <circle
                        cx="65"
                        cy="65"
                        r="28"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="135"
                        cy="65"
                        r="28"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="65"
                        cy="135"
                        r="28"
                        fill="currentColor"
                        opacity="0.8"
                    />
                    <circle
                        cx="135"
                        cy="135"
                        r="28"
                        fill="currentColor"
                        opacity="0.8"
                    />
                </svg>
            </div> */}

            {/* Left Social Media Bar */}
            

            {/* Right Appointment Button */}
            {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30">
                <button className="bg-black text-white px-3 lg:px-4 py-4 lg:py-8 text-sm font-medium tracking-widest hover:bg-[#3c4c24] transition-all duration-300 rounded-l-lg shadow-lg writing-mode-vertical">
                    MAKE AN APPOINTMENT
                </button>
            </div> */}

            {/* Slider Content */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 flex justify-center items-center ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.alt_text || slide.title || "Slider Image"}
                                className="w-full h-full object-cover hidden lg:block"
                            />
                            <img
                                src={slide.mobile_image}
                                alt={slide.alt_text || slide.title || "Slider Image"}
                                className="w-full aspect-square h-full object-cover block lg:hidden"
                            />
                            {/* Gradient Overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-50/95 via-pink-50/70 to-transparent"></div> */}
                        </div>

                        {/* Content */}
                        {/* <div className="relative h-full flex items-center justify-center px-8 lg:px-20 max-w-3xl">
                            <div className="space-y-6 z-20 flex flex-col justify-center items-center">
                                <p className="text-xl italic text-gray-700 head">
                                    {slide.subtitle}
                                </p>
                                <h1 className="text-5xl lg:text-7xl font-[500] text-[#3c4c24] leading-tight head">
                                    {slide.title}
                                </h1>
                                <p className="text-lg text-gray-700 text-center max-w-xl">
                                    {slide.description}
                                </p>
                                <Button className="bg-black hover:bg-[#3c4c24] text-white px-8 py-6 text-base font-medium transition-all duration-300">
                                    BOOK NOW
                                </Button>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {/* <button
                onClick={prevSlide}
                className="absolute lg:block hidden left-20 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm p-4 rounded-lg hover:bg-white transition-all shadow-lg"
            >
                <ChevronLeft className="w-8 h-8 text-gray-700" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute lg:block hidden right-20 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm p-4 rounded-lg hover:bg-white transition-all shadow-lg"
            >
                <ChevronRight className="w-8 h-8 text-gray-700" />
            </button> */}

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? "bg-[#3c4c24] w-8"
                                : "bg-gray-400 hover:bg-gray-600"
                        }`}
                    />
                ))}
            </div>

            <style>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
        </div>
    );
};

export default Hero;
