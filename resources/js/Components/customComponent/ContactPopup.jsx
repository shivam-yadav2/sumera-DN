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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative bg-gradient-to-br from-[#3c4c24]/30 via-orange-50 to-[#3c4c24]/80 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 text-gray-700 hover:text-gray-900 transition-colors bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
                    type="button"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[400px]">
                    {/* Left Side - Image */}
                    <div className="hidden lg:block aspect-square relative overflow-hidden rounded-l-2xl">
                        <img
                            src="/assets/images/new/43.webp"
                            alt="Contact Us"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Right Side - Compact Form */}
                    <div className="p-5 lg:p-6 overflow-y-auto flex flex-col justify-center">
                        {/* Header */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-[500] text-[#3c4c24] head mb-2">
                                Get In Touch!
                            </h2>
                            <p className="text-sm text-gray-600">
                                Fill out the form and we'll get back to you soon
                            </p>
                        </div>

                        {/* Compact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white border-0 shadow-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#3c4c24] rounded-lg transition-all text-sm ${
                                            errors.name ? 'ring-2 ring-red-500' : ''
                                        }`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border-0 shadow-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#3c4c24] rounded-lg transition-all text-sm"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">
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
                                        className={`w-full px-4 py-3 bg-white border-0 shadow-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#3c4c24] rounded-lg transition-all text-sm ${
                                            errors.mobile ? 'ring-2 ring-red-500' : ''
                                        }`}
                                    />
                                    {errors.mobile && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.mobile}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white border-0 shadow-sm text-gray-700 focus:ring-2 focus:ring-[#3c4c24] rounded-lg transition-all text-sm ${
                                            errors.service ? 'ring-2 ring-red-500' : ''
                                        } ${!formData.service ? 'text-gray-400' : 'text-gray-700'}`}
                                    >
                                        <option value="">Select Service *</option>
                                        {services.map((service) => (
                                            <option key={service.id} value={service.title}>
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.service && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.service}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Message Field */}
                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-white border-0 shadow-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#3c4c24] rounded-lg resize-none transition-all text-sm"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#3c4c24] hover:bg-[#2d3a1b] text-white px-6 py-3 text-sm font-[500] transition-all duration-300 rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;

