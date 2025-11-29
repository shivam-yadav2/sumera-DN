import React, { useState } from "react";
import { Navbar } from "../Components/customComponent/Navbar";
import { Footer } from "../Components/customComponent/Footer";
import { Toaster } from "sonner";
import { PopupProvider, usePopup } from "../contexts/PopupContext";
import ContactPopup from "../Components/customComponent/ContactPopup";
import {
    Plus,
    X,
    Phone,
    MessageCircle,
    Instagram,
    Facebook,
} from "lucide-react";

const SocialMediaWidget = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const socialLinks = [
        {
            name: "Call",
            icon: Phone,
            href: "tel:7355417843",
            color: "bg-[#354a2f] hover:bg-[#2a3b25]",
            delay: "delay-[50ms]",
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/sumeera_salon/",
            color: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90",
            delay: "delay-[100ms]",
        },
        {
            name: "Facebook",
            icon: Facebook,
            href: "https://www.facebook.com/sumeerasalonandacademy",
            color: "bg-[#1877f2] hover:bg-[#0c63d4]",
            delay: "delay-[150ms]",
        },
    ];

    return (
        <div className="fixed right-2 lg:right-6 bottom-12 lg:bottom-6 z-50 flex flex-col items-center gap-3">
            {/* Social Icons */}
            <div
                className={`flex flex-col gap-3 transition-all duration-300 ${
                    isExpanded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
                {socialLinks.map((link, index) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative w-12 h-12 rounded-full ${
                            link.color
                        } text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                            isExpanded
                                ? `animate-in slide-in-from-right ${link.delay}`
                                : ""
                        }`}
                        title={link.name}
                    >
                        <link.icon className="w-5 h-5" />
                        <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {link.name}
                        </span>
                    </a>
                ))}
            </div>

            {/* WhatsApp Button - Always Visible */}
            <a
                href="https://wa.me/917355417843"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative lg:w-14 lg:h-14 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="WhatsApp"
            >
                 <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            viewBox="0 0 32 32"
                            fill="currentColor"
                        >
                            <path d="M16.002 3C9.38 3 4 8.37 4 15a11.9 11.9 0 0 0 1.63 5.98L4 29l8.27-2.16A12.1 12.1 0 0 0 16 27c6.62 0 12-5.37 12-12S22.62 3 16.002 3zm6.41 16.15c-.27.77-1.6 1.51-2.2 1.61-.56.1-1.27.14-2.06-.13-.47-.15-1.07-.34-1.84-.67-3.23-1.4-5.33-4.67-5.5-4.89-.16-.22-1.31-1.75-1.31-3.34 0-1.58.83-2.36 1.12-2.68.29-.32.64-.4.85-.4.22 0 .42.01.6.01.19 0 .45-.07.71.54.27.63.92 2.22 1 2.38.08.16.13.35.02.57-.11.22-.17.36-.34.56-.17.2-.36.44-.52.59-.17.15-.34.32-.15.63.19.31.84 1.38 1.8 2.24 1.24 1.11 2.28 1.46 2.6 1.62.33.16.52.14.72-.08.2-.22.83-.97 1.06-1.3.22-.33.45-.28.76-.17.31.1 1.97.93 2.31 1.09.34.17.56.25.64.39.08.14.08.81-.19 1.58z" />
                        </svg>
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    WhatsApp
                </span>
            </a>

            {/* Toggle Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`lg:w-14 lg:h-14 w-12 h-12 rounded-full bg-[#354a2f] hover:bg-[#2a3b25] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    isExpanded ? "rotate-45" : "rotate-0"
                }`}
                aria-label={
                    isExpanded ? "Close social menu" : "Open social menu"
                }
            >
                {isExpanded ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Plus className="w-6 h-6" />
                )}
            </button>
        </div>
    );
};

const LayoutContent = ({ children }) => {
    const { isBookingPopupOpen, closeBookingPopup } = usePopup();

    return (
        <div>
            <Toaster position="top-right" richColors />
            <Navbar />
            {children}
            <Footer />
            <ContactPopup
                isOpen={isBookingPopupOpen}
                onClose={closeBookingPopup}
            />
            <SocialMediaWidget />
        </div>
    );
};

const Layout = ({ children }) => {
    return (
        <PopupProvider>
            <LayoutContent>{children}</LayoutContent>
        </PopupProvider>
    );
};

export default Layout;
