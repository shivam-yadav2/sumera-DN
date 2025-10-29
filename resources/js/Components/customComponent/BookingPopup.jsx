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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                    type="button"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-[#3c4c24]">
                        Book an Appointment
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Fill in the details and we'll get back to you soon
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3c4c24] focus:border-transparent outline-none transition-all ${
                                errors.name
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c4c24] focus:border-transparent outline-none transition-all"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Mobile Number Field */}
                    <div>
                        <label
                            htmlFor="mobile"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3c4c24] focus:border-transparent outline-none transition-all ${
                                errors.mobile
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            placeholder="Enter your phone number"
                        />
                        {errors.mobile && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.mobile}
                            </p>
                        )}
                    </div>

                    {/* Service Field */}
                    <div>
                        <label
                            htmlFor="service"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Service <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3c4c24] focus:border-transparent outline-none transition-all ${
                                errors.service
                                    ? "border-red-500"
                                    : "border-gray-300"
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
                            <p className="text-red-500 text-sm mt-1">
                                {errors.service}
                            </p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c4c24] focus:border-transparent outline-none transition-all resize-none"
                            placeholder="Any special requests or questions?"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black hover:bg-[#3c4c24] text-white px-8 py-6 text-base font-medium transition-all duration-300 rounded-lg"
                        >
                            {isSubmitting ? "Submitting..." : "Book Now"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingPopup;

