import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { router, usePage } from "@inertiajs/react";
import { toast } from "sonner";

const SalonContact = () => {
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
        <div className=" bg-gradient-to-br from-[#3c4c24]/30 via-orange-50 to-[#3c4c24]/80  px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200 rounded-full opacity-25 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10 mb-5">
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-16 items-center">
                    {/* Left Side - Contact Form */}

                    {/* Right Side - Image with Border */}
                    <div className="relative p-12 xl:p-20">
                        <div className="relative">
                            {/* Purple border frame */}
                            <div className="absolute inset-0 border-[12px] border-[#3c4c24]  pointer-events-none transform -translate-x-8 translate-y-8"></div>

                            {/* Image */}
                            <div className="relative aspect-square bg-white shadow-2xl overflow-hidden">
                                <img
                                    loading="lazy"
                                    src="/assets/images/new/47.webp"
                                    alt="Salon service"
                                    className=" object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {/* Header */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <p className="text-lg italic text-gray-700 poppins-regular-italic">
                                    Have Questions?
                                </p>
                                <svg
                                    width="50"
                                    height="30"
                                    viewBox="0 0 50 30"
                                    className="text-[#3c4c24]"
                                >
                                    <path
                                        d="M 5 15 Q 15 5, 25 15 T 45 15"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                    />
                                    <polygon
                                        points="45,15 40,12 40,18"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-[500] text-[#3c4c24] leading-tight head">
                                Feel free to get in touch!
                                <br />
                                contact now
                            </h2>
                        </div>

                        {/* Contact Form */}
                        <div className="space-y-5">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none ${
                                            errors.name
                                                ? "ring-2 ring-red-500"
                                                : ""
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
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Phone and Service Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Phone Number *"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className={`w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none ${
                                            errors.mobile
                                                ? "ring-2 ring-red-500"
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
                                        className={`w-full px-6 h-full bg-white border-0 shadow-md text-gray-700 focus:ring-2 focus:ring-purple-300 rounded-none ${
                                            errors.service
                                                ? "ring-2 ring-red-500"
                                                : ""
                                        } ${
                                            !formData.service
                                                ? "text-gray-500"
                                                : "text-gray-700"
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
                            </div>

                            {/* Message Field */}
                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none resize-none"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="bg-black hover:bg-gray-800 text-white px-10 py-6 text-base font-medium transition-all duration-300 rounded-none"
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : "Send us a message"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalonContact;
