import Layout from "@/Layouts/Layout";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { ArrowRight } from "lucide-react";
import Faq from "@/Components/customComponent/Faq";
import CourseSlider from "@/Components/customComponent/CourseSlider";

const services = [
    {
        image: "/assets/images/1.JPG",
        pretitle: "Lovely",
        title: "Haircuts",
        description:
            "Our make-up artists will make your appearance memorable and bright, and take care of your skin's",
    },
    {
        image: "/assets/images/2.JPG",
        pretitle: "Change",
        title: "Coloring",
        description:
            "Our make-up artists will make your appearance memorable and bright, and take care of your skin's",
        highlight: true,
    },
    {
        image: "/assets/images/3.JPG",
        pretitle: "Perfect",
        title: "Hairstyles",
        description:
            "Our make-up artists will make your appearance memorable and bright, and take care of your skin's",
    },
];

const AcademyPage = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = () => {
    console.log("Form submitted:", formData);
};
    return (
        <Layout>
            <BannerSection title="Academy Cources" />
            <CourseSlider />
            <div className="bg-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Services Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col h-full w-full justify-center items-center"
                            >
                                {service.highlight ? (
                                    // Center card with overlay
                                    <div className="relative w-full h-full group cursor-pointer ">
                                        <div className="relative overflow-hidden w-full h-full  h-80">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center text-white">
                                                <p
                                                    className="text-2xl italic mb-2"
                                                    style={{ color: "#c9a963" }}
                                                >
                                                    {service.pretitle}
                                                </p>
                                                <h2 className="text-5xl head font-bold mb-6 text-center">
                                                    {service.title}
                                                </h2>
                                                <p className="text-center text-gray-200 max-w-xs mb-8 leading-relaxed">
                                                    {service.description}
                                                </p>
                                                <button className="px-8 py-3 bg-black text-white font-semibold hover:bg-gray-900 transition-colors">
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="relative w-full h-full group cursor-pointer mb-6">
                                            <div className="relative overflow-hidden  h-48">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>
                                        <p
                                            className="text-xl italic text-gray-700 mb-2"
                                            style={{ color: "#5c7650" }}
                                        >
                                            {service.pretitle}
                                        </p>
                                        <h3
                                            className="text-4xl head font-bold text-center mb-4"
                                            style={{ color: "#5c7650" }}
                                        >
                                            {service.title}
                                        </h3>
                                        <p className="text-center text-gray-700 mb-6 leading-relaxed max-w-xs">
                                            {service.description}
                                        </p>
                                        <button className="px-8 py-3 bg-black text-white font-semibold hover:bg-gray-900 transition-colors">
                                            Read More
                                        </button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="relative  bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/2.JPG')" }}>
                {/* <img
                    src="/assets/images/2.JPG"
                    alt=""
                    className="w-full h-full object-cover object-center"
                /> */}
                {/* <div className="absolute inset-0 bg-black/50"></div> */}
                <div className=" max-w-7xl mx-auto py-20  w-full h-full grid grid-cols-6">
                    <div className="col-span-2"></div>
                    <div className="col-span-4">
                        <div className="space-y-8 rounded-2xl bg-gradient-to-br from-[#3c4c24]/30 via-orange-50 to-[#3c4c24]/80 shadow-2xl bg-white px-12 py-6">
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

                                <h2 className="text-4xl lg:text-5xl font-bold text-[#3c4c24] leading-tight head">
                                    Feel free to get in touch!
                                    <br />
                                    contact now
                                </h2>
                            </div>

                            {/* Contact Form */}
                            <div className="space-y-6">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none"
                                        />
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
                                    </div>
                                </div>

                                {/* Phone and Subject Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none"
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <Textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    onClick={handleSubmit}
                                    className="bg-black hover:bg-gray-800 text-white px-10 py-6 text-base font-medium transition-all duration-300 rounded-none"
                                >
                                    Send us a message
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Faq />
        </Layout>
    );
};

export default AcademyPage;
