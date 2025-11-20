import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { usePage, Link } from "@inertiajs/react";
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
                    ? "bg-[#3c4c24] shadow-lg py-2 border-b border-[#2f3720]"
                    : "bg-[#3c4c24]/95 backdrop-blur-sm py-1"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="text-3xl font-[500] text-white head">
                                <img
                                    src="/assets/logo/white.png"
                                    alt=""
                                    className="w-20"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden text-[14px]  lg:flex items-center space-x-6">
                        <Link
                            href="/"
                            className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                        >
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors">
                                Services
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            {filteredServices && filteredServices.length > 0 ? (
                                <div className="absolute top-full left-0 mt-2 w-44 bg-[#2f3720] border border-[#a0815c]/30 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                                    {filteredServices.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/services/${service.slug_url}`}
                                            className="block px-3 py-1 text-white/90 font-[600] hover:bg-white/10 hover:text-[#e7d3ba] transition-colors"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-[#2f3720] border border-[#a0815c]/30 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                                    <span className="block px-6 py-3 text-white/60">
                                        No services available
                                    </span>
                                </div>
                            )}
                        </div>

                        <Link
                                href={
                                    makeupService
                                        ? `/services/${makeupService.slug_url}`
                                        : "/services/makeup"
                                }
                                className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                            >
                                Makeup 
                            </Link>

                        {/* Makeup Service - separate nav item (if available) */}
                        {/* <Link
                            href="/franchise"
                            className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                        >
                            Franchise
                        </Link> */}

                        <Link
                            href="/academy"
                            className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                        >
                            Academy
                        </Link>
                        {/* Gallery Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors">
                                Gallery
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-56 bg-[#2f3720] border border-[#a0815c]/30 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                                <Link
                                    href="/gallery/makeup"
                                    className="block px-3 py-1 font-[600] text-white/90 hover:bg-white/10 hover:text-[#e7d3ba] transition-colors"
                                >
                                    Makeup
                                </Link>
                                <Link
                                    href="/gallery/interior"
                                    className="block px-3 py-1 font-[600] text-white/90 hover:bg-white/10 hover:text-[#e7d3ba] transition-colors"
                                >
                                    Interior
                                </Link>
                                <Link
                                    href="/gallery/salon-services"
                                    className="block px-3 py-1 font-[600] text-white/90 hover:bg-white/10 hover:text-[#e7d3ba] transition-colors"
                                >
                                    Salon Services
                                </Link>
                            </div>
                        </div>
                        <Link
                            href="/offers"
                            className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                        >
                         Offers
                        </Link>
                        {/* <a
                            href="/blogs"
                            className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                        >
                            Blog
                        </a> */}

                        <Link
                            href="/contact"
                            className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Phone Number */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* <a
                            href="tel:+41435426591"
                            className="text-xl font-extrabold text-white head"
                            >
                            +41 43 542 65 91
                            </a> */}
                        <Button
                            onClick={openBookingPopup}
                            className="bg-[#fff] rounded-full hover:bg-[#fff] hover:text-[#2f3720] text-[#2f3720] px-8 py-6 text-base font-medium transition-all duration-300 shadow-md"
                        >
                            <Phone className="w-5 h-5" />
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
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
                    <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
                        <div className="flex flex-col space-y-4 mt-4">
                            <Link
                                href="/"
                                className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                            >
                                About
                            </Link>

                            {/* Services Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={() => toggleDropdown("services")}
                                    className="flex items-center justify-between w-full text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
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
                                        {filteredServices &&
                                        filteredServices.length > 0 ? (
                                            filteredServices.map((service) => (
                                                <Link
                                                    key={service.id}
                                                    href={`/services/${service.slug_url}`}
                                                    className="block text-white/80 hover:text-[#e7d3ba]"
                                                >
                                                    {service.title}
                                                </Link>
                                            ))
                                        ) : (
                                            <span className="block text-white/60">
                                                No services available
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Makeup (mobile) - separate link */}
                            <Link
                                href={
                                    makeupService
                                        ? `/services/${makeupService.slug_url}`
                                        : "/services/makeup"
                                }
                                className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                            >
                                Makeup Service
                            </Link>

                            <Link
                                href="/academy"
                                className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                            >
                                Academy
                            </Link>

                            {/* Gallery Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={() => toggleDropdown("gallery")}
                                    className="flex items-center justify-between w-full text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
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
                                        <Link
                                            href="/gallery/makeup"
                                            className="block text-white/80 hover:text-[#e7d3ba]"
                                        >
                                            Makeup Gallery
                                        </Link>
                                        <Link
                                            href="/gallery/interior"
                                            className="block text-white/80 hover:text-[#e7d3ba]"
                                        >
                                            Interior Gallery
                                        </Link>
                                        <Link
                                            href="/gallery/salon-services"
                                            className="block text-white/80 hover:text-[#e7d3ba]"
                                        >
                                            Salon Services Images
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/blogs"
                                className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                            >
                                Blog
                            </Link>

                            <Link
                                href="/contact"
                                className="text-white hover:text-[#e7d3ba] text-[16px] font-[600] transition-colors"
                            >
                                Contact
                            </Link>

                            <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                                <Button
                                    onClick={openBookingPopup}
                                    className="bg-[#a0815c] rounded-full hover:bg-[#e7d3ba] hover:text-[#2f3720] text-white px-8 py-6 text-base font-medium transition-all duration-300 shadow-md"
                                >
                                    <Phone className="w-5 h-5" />
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
