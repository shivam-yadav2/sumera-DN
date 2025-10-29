import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
            }
        );
    };

    return (
        <Layout>
            <BannerSection title="Contact Us" />
            <div className=" bg-white">
                {/* Main Content */}
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Get In Touch
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#3c4c24] p-3 rounded">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            Phone
                                        </h3>
                                        <p className="text-gray-600">
                                            +41 43 542 65 91
                                        </p>
                                        <p className="text-gray-600">
                                            +291 0987 654 123
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#3c4c24] p-3 rounded">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            Email
                                        </h3>
                                        <p className="text-gray-600">
                                            thewebmax@gmail.com
                                        </p>
                                        <p className="text-gray-600">
                                            thewebmaxhelp@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#3c4c24] p-3 rounded">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            Address
                                        </h3>
                                        <p className="text-gray-600">
                                            1963-1385 Sunset Blvd
                                        </p>
                                        <p className="text-gray-600">
                                            Los Angeles, CA 90026, USA
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#3c4c24] p-3 rounded">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            Opening Hours
                                        </h3>
                                        <p className="text-gray-600">
                                            Mon-Friday: 9 am - 6 pm
                                        </p>
                                        <p className="text-gray-600">
                                            Saturday: 9 am - 4 pm
                                        </p>
                                        <p className="text-gray-600">
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Send Message
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
                                            errors.name ? 'border-red-500' : ''
                                        }`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                                            errors.mobile ? 'border-red-500' : ''
                                        }`}
                                    />
                                    {errors.mobile && (
                                        <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                                    )}
                                </div>

                                <div>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-[#3c4c24] focus:border-transparent ${
                                            errors.service ? 'border-red-500' : 'border-gray-300'
                                        } ${!formData.service ? 'text-gray-500' : 'text-gray-900'}`}
                                    >
                                        <option value="">Select Service *</option>
                                        {services.map((service) => (
                                            <option key={service.id} value={service.title}>
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.service && (
                                        <p className="text-red-500 text-sm mt-1">{errors.service}</p>
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
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-[#3c4c24] hover:bg-[#005840] text-white"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Now"}
                                </Button>
                            </div>
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
