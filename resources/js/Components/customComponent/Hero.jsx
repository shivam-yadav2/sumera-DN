import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            subtitle: "Vivid Colors",
            title: "THE NEW STYLE",
            description:
                "You dream about sleek, healthy looking hair that looks picture perfect, ready to rock on any occasion?",
            image: "/assets/images/1.JPG",
        },
        {
            subtitle: "Perfect Beauty",
            title: "LUXURY SALON",
            description:
                "Experience the ultimate in hair care and styling with our professional team of experts.",
            image: "/assets/images/2.JPG",
        },
        {
            subtitle: "Modern Style",
            title: "HAIR ARTISTRY",
            description:
                "Transform your look with our cutting-edge techniques and premium products.",
            image: "/assets/images/3.JPG",
        },
    ];

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
        <div className="relative h-screen overflow-hidden">
            {/* Decorative flower elements */}
            {/* <div className="absolute top-20 left-10 w-48 h-48 opacity-20 pointer-events-none z-10">
                <svg viewBox="0 0 200 200" className="text-[#006A4E]">
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
                <svg viewBox="0 0 200 200" className="text-[#006A4E]">
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
                <svg viewBox="0 0 200 200" className="text-[#006A4E]">
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
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <a
                    href="#"
                    className="text-gray-700 hover:text-[#006A4E] transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </a>
                <a
                    href="#"
                    className="text-gray-700 hover:text-[#006A4E] transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                </a>
                <a
                    href="#"
                    className="text-gray-700 hover:text-[#006A4E] transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                </a>
                <a
                    href="#"
                    className="text-gray-700 hover:text-[#006A4E] transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                    </svg>
                </a>
                <a
                    href="#"
                    className="text-gray-700 hover:text-[#006A4E] transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                    </svg>
                </a>
            </div>

            {/* Right Appointment Button */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30">
                <button className="bg-black text-white px-4 py-8 text-sm font-medium tracking-widest hover:bg-[#006A4E] transition-all duration-300 rounded-l-lg shadow-lg writing-mode-vertical">
                    MAKE AN APPOINTMENT
                </button>
            </div>

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
                                alt={slide.title}
                                className="w-full h-full object-cover"
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
                                <h1 className="text-5xl lg:text-7xl font-bold text-[#006A4E] leading-tight head">
                                    {slide.title}
                                </h1>
                                <p className="text-lg text-gray-700 text-center max-w-xl">
                                    {slide.description}
                                </p>
                                <Button className="bg-black hover:bg-[#006A4E] text-white px-8 py-6 text-base font-medium transition-all duration-300">
                                    BOOK NOW
                                </Button>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-20 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm p-4 rounded-lg hover:bg-white transition-all shadow-lg"
            >
                <ChevronLeft className="w-8 h-8 text-gray-700" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-20 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm p-4 rounded-lg hover:bg-white transition-all shadow-lg"
            >
                <ChevronRight className="w-8 h-8 text-gray-700" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? "bg-[#006A4E] w-8"
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
