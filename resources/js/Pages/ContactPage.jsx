import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/Layouts/Layout";
import { BannerSection } from "@/Components/customComponent/BannerSection";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        alert("Thank you for contacting us!");
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="h-12"
                                    />
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
                                </div>

                                <div>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="h-12"
                                    />
                                </div>

                                <div>
                                    <Input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="h-12"
                                    />
                                </div>

                                <div>
                                    <Textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="min-h-32 resize-none"
                                    />
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    className="w-full h-12 bg-[#3c4c24] hover:bg-[#005840] text-white"
                                >
                                    Submit Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
