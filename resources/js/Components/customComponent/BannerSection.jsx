// components/BannerSection.tsx
import { Link } from "@inertiajs/react";
import { ArrowRight, Phone } from "lucide-react";

export function BannerSection({ 
    title, 
    subtitle = null, 
    description = null, 
    showCTA = true, 
    label = "SUMEERA SALON & ACADEMY",
    backgroundImage = "/assets/images/banner.jpg"
}) {
    return (
        <div className="">
            <div className="container mx-auto px-4 mt-5 pt-16 pb-5">
                <div className="relative overflow-hidden rounded-3xl bg-[#12110f] text-white px-8 py-10 lg:py-14 md:px-12">
                    {/* Background Image Overlay */}
                    <div 
                        className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" 
                        style={{ backgroundImage: `url('${backgroundImage}')` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#a0815c]/20 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        {/* Label */}
                        <p className="uppercase tracking-[0.4em] text-xs text-[#e7d3ba] mb-4">
                            {label}
                        </p>
                        
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[500] leading-tight mb-5 head">
                            {title}
                        </h1>
                        
                        {/* Subtitle */}
                        {subtitle && (
                            <p className="text-xl md:text-2xl text-white/90 mb-4 font-[400]">
                                {subtitle}
                            </p>
                        )}
                        
                        {/* Description - Support HTML content */}
                        {description && (
                            <div 
                                className="text-white/70 lg:block hidden text-base md:text-lg max-w-3xl mx-auto mb-6"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        )}
                        
                        {/* Breadcrumb Navigation */}
                        <nav className="text-xs lg:text-sm text-white/70 ">
                            <Link href="/" className="hover:text-[#e7d3ba] transition-colors">
                                Home
                            </Link>
                            <span className="mx-2">›</span>
                            <span className="text-white">{title}</span>
                        </nav>
                        
                        {/* CTA Buttons */}
                        {/* {showCTA && (
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#3c4c24] font-[500] hover:bg-[#f5efe3] transition shadow-md"
                                >
                                    Book Appointment
                                    <Phone className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                                >
                                    Explore Services
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
}
