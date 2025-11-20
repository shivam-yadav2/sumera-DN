import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/Layouts/Layout";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { router, usePage } from "@inertiajs/react";
import { toast } from "sonner";

export default function ContactPage() {
    const { services = [] } = usePage().props;
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
            <div className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff]">
                <BannerSection 
                    title="Get In Touch"
                    subtitle="We'd Love to Hear From You"
                    description="Have questions about our services or academy? Want to book an appointment or discuss your beauty needs? Our team is here to help you every step of the way."
                    label="CONTACT US"
                />

                {/* Main Content */}
                <div className="container mx-auto px-4 lg:py-12 py-10">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-3">
                                GET IN TOUCH
                            </p>
                            <h2 className="text-3xl font-[500] text-[#2f3720] mb-8">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e4ded2] hover:shadow-md transition-shadow">
                                    <div className="bg-[#3c4c24] p-3 rounded-full">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-[500] text-[#2f3720] mb-1">
                                            Phone
                                        </h3>
                                        <p className="text-[#7a705e]">
                                            +91 7355417843
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e4ded2] hover:shadow-md transition-shadow">
                                    <div className="bg-[#3c4c24] p-3 rounded-full">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-[500] text-[#2f3720] mb-1">
                                            Email
                                        </h3>
                                        <p className="text-[#7a705e]">
                                            infosumeerasalon@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e4ded2] hover:shadow-md transition-shadow">
                                    <div className="bg-[#3c4c24] p-3 rounded-full">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-[500] text-[#2f3720] mb-1">
                                            Address
                                        </h3>
                                        <p className="text-[#7a705e]">
                                            Shop N-1,Sector-C,Mahanagar
                                        </p>
                                        <p className="text-[#7a705e]">
                                            Lucknow, Uttar Pradesh 226006
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-3">
                                SEND US A MESSAGE
                            </p>
                            <h2 className="text-3xl font-[500] text-[#2f3720] mb-8">
                                We'd Love to Hear From You
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`h-12 ${
                                            errors.name ? "border-red-500" : ""
                                        }`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="h-12"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Phone Number *"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className={`h-12 ${
                                            errors.mobile
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                    />
                                    {errors.mobile && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.mobile}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-[#3c4c24] focus:border-transparent ${
                                            errors.service
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } ${
                                            !formData.service
                                                ? "text-gray-500"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        <option value="">
                                            Select Service *
                                        </option>
                                        {services.map((service) => (
                                            <option
                                                key={service.id}
                                                value={service.title}
                                            >
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.service && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.service}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="min-h-32 resize-none"
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-[#3c4c24] hover:bg-[#2f3720] text-white rounded-full shadow-md transition-all duration-300"
                                >
                                    {isSubmitting
                                        ? "Submitting..."
                                        : "Submit Now"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dark CTA Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-[#12110f] rounded-3xl overflow-hidden text-white">
                        <div className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] items-center">
                            <div className="relative p-10 md:p-14">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#a0815c]/20 via-transparent to-transparent pointer-events-none" />
                                <h3 className="text-3xl font-[500] mb-4 head">
                                    Visit Our Salon in Lucknow
                                </h3>
                                <p className="text-white/70 leading-relaxed max-w-2xl mb-6">
                                    Experience our premium beauty services in person. Our expert team is ready to transform your look and boost your confidence. Book your appointment today!
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm font-[500]">
                                    <a
                                        href="https://www.google.com/maps/place/Sumeera+makeover+and+salon/@26.8785218,80.9522524,17z/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#3c4c24] hover:bg-[#f5efe3] transition"
                                    >
                                        <MapPin className="h-4 w-4" />
                                        Get Directions
                                    </a>
                                    <a
                                        href="tel:7355417843"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                                    >
                                        <Phone className="h-4 w-4" />
                                        Call Now
                                    </a>
                                </div>
                            </div>
                            <div className="h-full bg-[url('/assets/images/new/47.webp')] bg-cover bg-center min-h-[260px]" />
                        </div>
                    </div>
                </div>

                <div className="h-[50vh] w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.78655432164!2d80.95225237612095!3d26.8785217615577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957a2322b6657%3A0xc0b6064cb1de699b!2sSumeera%20makeover%20and%20salon!5e0!3m2!1sen!2sin!4v1761290724496!5m2!1sen!2sin"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </Layout>
    );
}
