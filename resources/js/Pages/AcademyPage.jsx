import Layout from "@/Layouts/Layout";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { ArrowRight } from "lucide-react";
import Faq from "@/Components/customComponent/Faq";
import CourseSlider from "@/Components/customComponent/CourseSlider";
import AcademyWhyChoose from "@/Components/customComponent/AcademyWhyChoose";
import AcademyFacilities from "@/Components/customComponent/AcademyFacilities";
import AcademyTestimonials from "@/Components/customComponent/AcademyTestimonials";
import SalonContact from "@/Components/customComponent/ContactSection";
import { Link } from "@inertiajs/react";
const services = [
    {
        image: "/assets/images/1.JPG",
        pretitle: "Lovely",
        title: "Haircuts",
        description:
            "Our make-up artists will make your appearance memorable and bright, and take care of your skin's",
    },
    {
        image: "/assets/images/new/hair.jpg",
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

const AcademyPage = ({ courses = [] }) => {
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
            <div className="bg-gradient-to-b from-[#f5efe3] via-[#f8f6f2] to-[#ffffff]">
                <BannerSection 
                    title="Academy Courses"
                    subtitle="Transform Your Passion Into Profession"
                    description="Join India's leading beauty academy and learn from certified professionals. Industry-recognized courses, hands-on training, and lifetime support."
                    label="SUMEERA ACADEMY"
                />
                <CourseSlider courses={courses} />
            <AcademyWhyChoose />
            {/* <AcademyFacilities /> */}
            <AcademyTestimonials />
            {/* <div className="bg-white lg:py-20 py-10 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                   
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col h-full w-full justify-center items-center"
                            >
                                {service.highlight ? (
                                    
                                    <div className="relative w-full h-full group cursor-pointer ">
                                        <div className="relative overflow-hidden w-full h-full">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-center object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center text-white">
                                                <p
                                                    className="text-2xl italic mb-2"
                                                    style={{ color: "#c9a963" }}
                                                >
                                                    {service.pretitle}
                                                </p>
                                                <h2 className="text-5xl head font-[500] mb-6 text-center">
                                                    {service.title}
                                                </h2>
                                                <p className="text-center text-gray-200 max-w-xs mb-8 leading-relaxed">
                                                    {service.description}
                                                </p>
                                                <button className="px-8 py-3 bg-black text-white font-[500] hover:bg-gray-900 transition-colors">
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
                                            className="text-4xl head font-[500] text-center mb-4"
                                            style={{ color: "#5c7650" }}
                                        >
                                            {service.title}
                                        </h3>
                                        <p className="text-center text-gray-700 mb-6 leading-relaxed max-w-xs">
                                            {service.description}
                                        </p>
                                        <button className="px-8 py-3 bg-black text-white font-[500] hover:bg-gray-900 transition-colors">
                                            Read More
                                        </button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            <Faq />
            <SalonContact />
            </div>
        </Layout>
    );
};

export default AcademyPage;
