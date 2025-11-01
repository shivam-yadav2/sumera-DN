import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { ArrowRight } from "lucide-react";
import { Head, usePage, router } from "@inertiajs/react";
import { toast } from "sonner";
import Layout from "../Layouts/Layout";
import  Hero  from "../Components/customComponent/Hero";
import { AboutSection } from "../Components/customComponent/AboutSection";
import { ServicesSection } from "../Components/customComponent/ServicesSection";
import  SalonGallery  from "../Components/customComponent/GalleryPreviewSection";
import { WhyChooseUsSection } from "../Components/customComponent/WhyChooseUsSection";
import  SalonContact  from "../Components/customComponent/ContactSection";
import  SalonAppointment  from "../Components/customComponent/SalonAppointment";
import  SalonPricing  from "../Components/customComponent/SalonPricing";
import AcademyCoursesSection from "../Components/customComponent/AcademyCoursesSection";
import OffersDealsSection from "../Components/customComponent/OffersDealsSection";

const Home = () => {
    const { gallery = [], services = [] } = usePage().props;
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
            <Head title="Sumeera Salon - Premium Beauty Destination in Lucknow" />
            <Hero />
            <AboutSection />
            <ServicesSection />
            {/* <AcademyCoursesSection /> */}
            <SalonAppointment/>
            <OffersDealsSection />
            
            {/* <SalonPricing/> */}
            <SalonGallery gallery={gallery} />
            <SalonContact />
            {/* <WhyChooseUsSection /> */}
        </Layout>
    );
};

export default Home;
