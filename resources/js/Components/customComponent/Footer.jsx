import React, { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { usePage } from "@inertiajs/react";

const Footer = () => {
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
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
                    {/* About Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-6">
                            <a href="/" className="flex items-center justify-center">
                                <img
                                    src="/assets/logo/white.png"
                                    alt="Logo"
                                    className="h-24 w-auto "
                                />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted beauty destination offering premium salon services, 
                            professional beauty treatments, and expert training through our 
                            academy. Experience excellence in beauty and wellness.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href="https://www.facebook.com/darpanbypooja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-[#3c4c24] rounded-full flex items-center justify-center transition-all duration-300 group"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a
                                href="https://www.instagram.com/darpan_by_pooja/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-[#3c4c24] rounded-full flex items-center justify-center transition-all duration-300 group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-[#3c4c24] rounded-full flex items-center justify-center transition-all duration-300 group"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white head mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm block"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm block"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/academy"
                                    className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm block"
                                >
                                    Academy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/gallery/photos"
                                    className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm block"
                                >
                                    Photo Gallery
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="/gallery/videos"
                                    className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm block"
                                >
                                    Video Gallery
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm block"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/franchise"
                                    className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm block"
                                >
                                    Sumeera Salon Franchise
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white head mb-6">
                            Our Services
                        </h3>
                        {services && services.length > 0 ? (
                            <ul className="space-y-3">
                                {services.slice(0, 6).map((service) => (
                                    <li key={service.id}>
                                        <a
                                            href={`/services/${service.slug_url}`}
                                            className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm block"
                                        >
                                            {service.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-sm">Services coming soon</p>
                        )}
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white head mb-6">
                            Contact Information
                        </h3>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#3c4c24] flex-shrink-0 mt-1" />
                                <span className="text-gray-400 text-sm leading-relaxed">
                                    Shop N-1, near Channilal Circle, Sector-C,
                                    Mahanagar, Lucknow, Uttar Pradesh 226006
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#3c4c24] flex-shrink-0" />
                                <a
                                    href="tel:7355417843"
                                    className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm"
                                >
                                    73554 17843
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#3c4c24] flex-shrink-0" />
                                <a
                                    href="mailto:contact123@gmail.com"
                                    className="text-gray-400 hover:text-[#3c4c24] transition-colors text-sm"
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
            <div className="border-t border-black">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            Copyright © {new Date().getFullYear()} All Rights Reserved
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="text-gray-400 hover:text-[#3c4c24] text-sm transition-colors"
                            >
                                Contact Us
                            </a>
                            <span className="text-gray-600 hidden md:inline">|</span>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#3c4c24] text-sm transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <span className="text-gray-600 hidden md:inline">|</span>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#3c4c24] text-sm transition-colors"
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
