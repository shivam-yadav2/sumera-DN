import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { router, usePage } from "@inertiajs/react";
import { toast } from "sonner";

const ContactPopup = ({ isOpen, onClose }) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();

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
                onClose();
                // Show success toast
                toast.success("Message sent successfully!", {
                    description: "Thank you for contacting us! We will get back to you soon.",
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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
            <div className="relative bg-gradient-to-br from-[#f8f6f2] via-white to-[#f5efe3] rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden border border-[#e4ded2]">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#a0815c]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e7d3ba]/20 rounded-full blur-2xl"></div>
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-10 text-[#7a705e] hover:text-[#2f3720] transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white shadow-md"
                    type="button"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Two Column Layout */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 h-full min-h-[500px]">
                    {/* Left Side - Image */}
                    <div className="hidden lg:block relative overflow-hidden rounded-l-3xl">
                        <img
                            src="/assets/images/new/43.webp"
                            alt="Contact Us"
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#12110f]/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Right Side - Compact Form */}
                    <div className="relative p-8 lg:p-10 overflow-y-auto flex flex-col justify-center">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="w-12 h-0.5 bg-[#a0815c] mb-4"></div>
                            <p className="uppercase tracking-[0.3em] text-[10px] text-[#a0815c] font-medium mb-2">
                                CONTACT US
                            </p>
                            <h2 className="text-3xl font-[600] text-[#2f3720] head mb-2">
                                Get In Touch!
                            </h2>
                            <p className="text-sm text-[#7a705e] leading-relaxed">
                                Fill out the form and we'll get back to you soon
                            </p>
                        </div>

                        {/* Compact Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border rounded-2xl text-[#2f3720] placeholder:text-[#7a705e]/60 focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none transition-all text-sm ${
                                            errors.name ? 'border-red-500' : 'border-[#e4ded2]'
                                        }`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email (Optional)"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-[#e4ded2] rounded-2xl text-[#2f3720] placeholder:text-[#7a705e]/60 focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none transition-all text-sm"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Phone and Service Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Phone Number *"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border rounded-2xl text-[#2f3720] placeholder:text-[#7a705e]/60 focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none transition-all text-sm ${
                                            errors.mobile ? 'border-red-500' : 'border-[#e4ded2]'
                                        }`}
                                    />
                                    {errors.mobile && (
                                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                                            {errors.mobile}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 bg-white/80 backdrop-blur-sm border rounded-2xl focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none transition-all text-sm ${
                                            errors.service ? 'border-red-500' : 'border-[#e4ded2]'
                                        } ${!formData.service ? 'text-[#7a705e]/60' : 'text-[#2f3720]'}`}
                                    >
                                        <option value="">Select Service *</option>
                                        {services.map((service) => (
                                            <option key={service.id} value={service.title}>
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.service && (
                                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                                            {errors.service}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Message Field */}
                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Your Message (Optional)"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-[#e4ded2] rounded-2xl text-[#2f3720] placeholder:text-[#7a705e]/60 focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none resize-none transition-all text-sm"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-xs mt-1.5 ml-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#3c4c24] hover:bg-[#2f3720] text-white px-6 py-4 text-base font-[500] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin">⏳</span> Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                                <p className="text-center text-xs text-[#7a705e] mt-4">
                                    We'll respond within 24 hours
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;

