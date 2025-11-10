import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { usePage } from "@inertiajs/react";
import { usePopup } from "../../contexts/PopupContext";

const Navbar = () => {
    const { services = [] } = usePage().props;
    const { openBookingPopup } = usePopup();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    // Find a makeup service (if present) and filter it out from the services list
    const makeupService = services.find((s) => /makeup/i.test(s.title));
    const filteredServices = services.filter((s) => !/makeup/i.test(s.title));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white shadow-lg py-2"
                    : "bg-white/95 backdrop-blur-sm py-1"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <div className="text-3xl font-bold text-[#3c4c24] head">
                                <img
                                    src="/assets/logo/black.png"
                                    alt=""
                                    className="w-20"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden text-[14px]  lg:flex items-center space-x-8">
                        <a
                            href="/"
                            className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                        >
                            Home
                        </a>
    
                        <a
                            href="/about"
                            className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                        >
                            About
                        </a>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors">
                                Services
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            {filteredServices && filteredServices.length > 0 ? (
                                <div className="absolute top-full left-0 mt-2 w-44 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                                    {filteredServices.map((service) => (
                                        <a
                                            key={service.id}
                                            href={`/services/${service.slug_url}`}
                                            className="block px-3 py-1 text-gray-900 font-[600] hover:bg-[#3c4c24]/10 hover:text-[#3c4c24] transition-colors"
                                        >
                                            {service.title}
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                                    <a
                                        href="#"
                                        className="block px-6 py-3 text-gray-500"
                                    >
                                        No services available
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Makeup Service - separate nav item (if available) */}
                        <a
                            href={makeupService ? `/services/${makeupService.slug_url}` : '/services/makeup'}
                            className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                        >
                            Makeup Service
                        </a>

                        <a
                            href="/academy"
                            className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                        >
                            Academy
                        </a>

                        {/* Gallery Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors">
                                Gallery
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                                <a
                                    href="/gallery/makeup"
                                    className="block px-3 py-1 font-[600] text-gray-900 hover:bg-[#3c4c24]/10 hover:text-[#3c4c24] transition-colors"
                                >
                                    Makeup Gallery
                                </a>
                                <a
                                    href="/gallery/interior"
                                    className="block px-3 py-1 font-[600] text-gray-900 hover:bg-[#3c4c24]/10 hover:text-[#3c4c24] transition-colors"
                                >
                                    Interior Gallery
                                </a>
                                <a
                                    href="/gallery/salon-services"
                                    className="block px-3 py-1 font-[600] text-gray-900 hover:bg-[#3c4c24]/10 hover:text-[#3c4c24] transition-colors"
                                >
                                    Salon Services Images
                                </a>
                            </div>
                        </div>

                        <a
                            href="/contact"
                            className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Phone Number */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* <a
                            href="tel:+41435426591"
                            className="text-xl font-extrabold text-[#3c4c24] head"
                            >
                            +41 43 542 65 91
                            </a> */}
                        <Button 
                            onClick={openBookingPopup}
                            className="bg-black rounded-none hover:bg-[#3c4c24] text-white px-8 py-6 text-base font-medium transition-all duration-300"
                        >
                            <Phone className="w-5 h-5 text-[#fff]" />
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4 mt-4">
                            <a
                                href="/"
                                className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                            >
                                About
                            </a>

                            {/* Services Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={() => toggleDropdown("services")}
                                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                                >
                                    Services
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${
                                            openDropdown === "services"
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>
                                {openDropdown === "services" && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {filteredServices && filteredServices.length > 0 ? (
                                            filteredServices.map((service) => (
                                                <a
                                                    key={service.id}
                                                    href={`/services/${service.slug_url}`}
                                                    className="block text-gray-600 hover:text-[#3c4c24]"
                                                >
                                                    {service.title}
                                                </a>
                                            ))
                                        ) : (
                                            <span className="block text-gray-500">
                                                No services available
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Makeup (mobile) - separate link */}
                            <a
                                href={makeupService ? `/services/${makeupService.slug_url}` : '/services/makeup'}
                                className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                            >
                                Makeup Service
                            </a>

                            <a
                                href="/academy"
                                className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                            >
                                Academy
                            </a>

                            {/* Gallery Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={() => toggleDropdown("gallery")}
                                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                                >
                                    Gallery
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${
                                            openDropdown === "gallery"
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>
                                {openDropdown === "gallery" && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        <a
                                            href="/gallery/makeup"
                                            className="block text-gray-600 hover:text-[#3c4c24]"
                                        >
                                            Makeup Gallery
                                        </a>
                                        <a
                                            href="/gallery/interior"
                                            className="block text-gray-600 hover:text-[#3c4c24]"
                                        >
                                            Interior Gallery
                                        </a>
                                        <a
                                            href="/gallery/salon-services"
                                            className="block text-gray-600 hover:text-[#3c4c24]"
                                        >
                                            Salon Services Images
                                        </a>
                                    </div>
                                )}
                            </div>

                            <a
                                href="/contact"
                                className="text-gray-700 hover:text-[#3c4c24]  text-[16px] font-[600] transition-colors"
                            >
                                Contact
                            </a>

                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                <Button 
                                    onClick={openBookingPopup}
                                    className="bg-black rounded-none hover:bg-[#3c4c24] text-white px-8 py-6 text-base font-medium transition-all duration-300"
                                >
                                    <Phone className="w-5 h-5 text-[#fff]" />
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export { Navbar };
