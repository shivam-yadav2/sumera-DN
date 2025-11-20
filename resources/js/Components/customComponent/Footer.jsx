import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
} from "lucide-react";
import { usePage } from "@inertiajs/react";
import { usePopup } from "../../contexts/PopupContext";

const Footer = () => {
    const { openBookingPopup } = usePopup();

    const { services = [] } = usePage().props;
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add subscription logic here
        if (email) {
            setEmail("");
            // You can add toast notification here
        }
    };

    return (
        <footer className="bg-[#12110f] text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
                    {/* About Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-6">
                            <a
                                href="/"
                                className="flex items-center justify-center"
                            >
                                <img
                                    src="/assets/logo/white.png"
                                    alt="Logo"
                                    className="h-24 w-auto "
                                />
                            </a>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Your trusted beauty destination offering premium
                            salon services, professional beauty treatments, and
                            expert training through our academy. Experience
                            excellence in beauty and wellness.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href="https://www.facebook.com/sumeerasalonandacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="https://www.instagram.com/sumeera_salon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-[500] text-white head mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/"
                                    className="text-white/70 hover:text-[#a0815c] transition-colors text-sm block"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-white/70 hover:text-[#a0815c] transition-colors text-sm block"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/academy"
                                    className="text-white/70 hover:text-[#a0815c] transition-colors text-sm block"
                                >
                                    Academy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/gallery/photos"
                                    className="text-white/70 hover:text-[#a0815c] transition-colors text-sm block"
                                >
                                    Photo Gallery
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="/gallery/videos"
                                    className="text-white/70 hover:text-[#a0815c] transition-colors text-sm block"
                                >
                                    Video Gallery
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="/contact"
                                    className="text-white/70 hover:text-[#a0815c] transition-colors text-sm block"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs"
                                    className="text-white/70 hover:text-[#a0815c] transition-colors text-sm block"
                                >
                                    Blogs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-[500] text-white head mb-6">
                            Our Services
                        </h3>
                        {services && services.length > 0 ? (
                            <ul className="space-y-3">
                                {services.slice(0, 6).map((service) => (
                                    <li key={service.id}>
                                        <a
                                            href={`/services/${service.slug_url}`}
                                            className="text-white/70 hover:text-[#a0815c] transition-colors text-sm block"
                                        >
                                            {service.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-white/60 text-sm">
                                Services coming soon
                            </p>
                        )}
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-[500] text-white head mb-6">
                            Contact Information
                        </h3>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#a0815c] flex-shrink-0 mt-1" />
                                <span className="text-white/70 text-sm leading-relaxed">
                                    Shop N-1, near Channilal Circle, Sector-C,
                                    Mahanagar, Lucknow, Uttar Pradesh 226006
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#a0815c] flex-shrink-0" />
                                <a
                                    href="tel:7355417843"
                                    className="text-white/70 hover:text-[#a0815c] transition-colors text-sm"
                                >
                                    73554 17843
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#a0815c] flex-shrink-0" />
                                <a
                                    href="mailto:contact123@gmail.com"
                                    className="text-white/70 hover:text-[#a0815c] transition-colors text-sm"
                                >
                                    contact123@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Newsletter Subscription */}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/70 text-sm text-center md:text-left">
                            Copyright © {new Date().getFullYear()} All Rights
                            Reserved
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="text-white/70 hover:text-[#a0815c] text-sm transition-colors"
                            >
                                Contact Us
                            </a>
                            <span className="text-white/30 hidden md:inline">
                                |
                            </span>
                            <a
                                href="#"
                                className="text-white/70 hover:text-[#a0815c] text-sm transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <span className="text-white/30 hidden md:inline">
                                |
                            </span>
                            <a
                                href="#"
                                className="text-white/70 hover:text-[#a0815c] text-sm transition-colors"
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-[#f8f6f2] shadow-lg md:hidden z-50 border-t border-[#e4ded2]">
                <div className="flex items-center justify-between px-6 py-3">
                    {/* Chat (WhatsApp) */}
                    <a
                        href="https://wa.me/917355417843"
                        target="_blank"
                        className="flex flex-col items-center text-green-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 32 32"
                            fill="currentColor"
                        >
                            <path d="M16.002 3C9.38 3 4 8.37 4 15a11.9 11.9 0 0 0 1.63 5.98L4 29l8.27-2.16A12.1 12.1 0 0 0 16 27c6.62 0 12-5.37 12-12S22.62 3 16.002 3zm6.41 16.15c-.27.77-1.6 1.51-2.2 1.61-.56.1-1.27.14-2.06-.13-.47-.15-1.07-.34-1.84-.67-3.23-1.4-5.33-4.67-5.5-4.89-.16-.22-1.31-1.75-1.31-3.34 0-1.58.83-2.36 1.12-2.68.29-.32.64-.4.85-.4.22 0 .42.01.6.01.19 0 .45-.07.71.54.27.63.92 2.22 1 2.38.08.16.13.35.02.57-.11.22-.17.36-.34.56-.17.2-.36.44-.52.59-.17.15-.34.32-.15.63.19.31.84 1.38 1.8 2.24 1.24 1.11 2.28 1.46 2.6 1.62.33.16.52.14.72-.08.2-.22.83-.97 1.06-1.3.22-.33.45-.28.76-.17.31.1 1.97.93 2.31 1.09.34.17.56.25.64.39.08.14.08.81-.19 1.58z" />
                        </svg>
                        <span className="text-xs text-[#2f3720] mt-1">
                            WhatsApp
                        </span>
                    </a>

                    {/* Book Now */}
                    <a
                        href="#"
                        className="flex flex-col items-center text-[#3c4c24]"
                        onClick={openBookingPopup}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 3a2 2 0 012-2h10a2 2 0 012 2v18l-7-4-7 4V3z"
                            />
                        </svg>
                        <span className="text-xs text-[#2f3720] mt-1">
                            Book Now
                        </span>
                    </a>

                    {/* Email Icon */}
                    <a
                        href="https://www.instagram.com/sumeera_salon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-red-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                        >
                            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                        </svg>

                        <span className="text-xs text-[#2f3720] mt-1">
                            Instagram
                        </span>
                    </a>

                    {/* Call Us */}
                    <a
                        href="tel:7355417843"
                        className="flex flex-col items-center text-[#0a66c2]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h1.28a2 2 0 011.94 1.515l.62 2.485a2 2 0 01-.58 1.955l-1.07 1.07a16 16 0 007.07 7.07l1.07-1.07a2 2 0 011.955-.58l2.485.62A2 2 0 0121 17.72V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"
                            />
                        </svg>
                        <span className="text-xs text-[#2f3720] mt-1">
                            Call Us
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
