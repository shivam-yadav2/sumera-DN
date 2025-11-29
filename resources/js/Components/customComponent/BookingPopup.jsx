import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { router } from "@inertiajs/react";
import { toast } from "sonner";

const BookingPopup = ({ isOpen, onClose, services = [] }) => {
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
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        router.post(
            "/api/booking",
            formData,
            {
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
                    toast.success("Booking request submitted successfully!", {
                        description: "We will contact you soon.",
                        duration: 5000,
                    });
                },
                onError: (errors) => {
                    setErrors(errors);
                    toast.error("Failed to submit booking request", {
                        description: "Please check the form and try again.",
                    });
                },
                onFinish: () => {
                    setIsSubmitting(false);
                },
            }
        );
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
            <div className="relative bg-gradient-to-br from-[#f8f6f2] via-white to-[#f5efe3] rounded-3xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-hidden border border-[#e4ded2]">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#a0815c]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#e7d3ba]/20 rounded-full blur-2xl"></div>
                
                {/* Scrollable Content */}
                <div className="relative overflow-y-auto max-h-[90vh]">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-10 text-[#7a705e] hover:text-[#2f3720] transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white shadow-md"
                        type="button"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Header */}
                    <div className="relative p-8 pb-6 border-b border-[#e4ded2]/50">
                        <div className="w-12 h-0.5 bg-[#a0815c] mb-4"></div>
                        <p className="uppercase tracking-[0.3em] text-[10px] text-[#a0815c] font-medium mb-2">
                            RESERVE YOUR SPOT
                        </p>
                        <h2 className="text-3xl font-[600] text-[#2f3720] head mb-2">
                            Book an Appointment
                        </h2>
                        <p className="text-[#7a705e] text-sm leading-relaxed">
                            Fill in the details and we'll get back to you soon to confirm your booking
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="relative p-8 space-y-5">
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-[500] text-[#2f3720] mb-2"
                            >
                                Name <span className="text-[#a0815c]">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border rounded-2xl focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none transition-all ${
                                    errors.name
                                        ? "border-red-500"
                                        : "border-[#e4ded2]"
                                }`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1.5 ml-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-[500] text-[#2f3720] mb-2"
                            >
                                Email <span className="text-[#7a705e] text-xs">(Optional)</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-[#e4ded2] rounded-2xl focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none transition-all"
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1.5 ml-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Mobile Number Field */}
                        <div>
                            <label
                                htmlFor="mobile"
                                className="block text-sm font-[500] text-[#2f3720] mb-2"
                            >
                                Phone Number <span className="text-[#a0815c]">*</span>
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border rounded-2xl focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none transition-all ${
                                    errors.mobile
                                        ? "border-red-500"
                                        : "border-[#e4ded2]"
                                }`}
                                placeholder="10-digit mobile number"
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-xs mt-1.5 ml-1">
                                    {errors.mobile}
                                </p>
                            )}
                        </div>

                        {/* Service Field */}
                        <div>
                            <label
                                htmlFor="service"
                                className="block text-sm font-[500] text-[#2f3720] mb-2"
                            >
                                Service <span className="text-[#a0815c]">*</span>
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`w-full px-4 py-1 bg-white/80 backdrop-blur-sm border rounded-2xl focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none transition-all ${
                                    errors.service
                                        ? "border-red-500"
                                        : "border-[#e4ded2]"
                                }`}
                            >
                                <option value="">Select a service</option>
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

                        {/* Message Field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-[500] text-[#2f3720] mb-2"
                            >
                                Message <span className="text-[#7a705e] text-xs">(Optional)</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-[#e4ded2] rounded-2xl focus:ring-2 focus:ring-[#a0815c] focus:border-[#a0815c] outline-none transition-all resize-none"
                                placeholder="Any special requests or questions?"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1.5 ml-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#354a2f]  hover:bg-[#2f3720] text-white px-8 py-4 text-base font-[500] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : "Book Appointment"}
                            </Button>
                            <p className="text-center text-xs text-[#7a705e] mt-4">
                                We'll contact you within 24 hours to confirm
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingPopup;

