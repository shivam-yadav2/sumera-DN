import React from "react";
import { Head } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
import  Hero  from "../Components/customComponent/Hero";
import { AboutSection } from "../Components/customComponent/AboutSection";
import { ServicesSection } from "../Components/customComponent/ServicesSection";
import  SalonGallery  from "../Components/customComponent/GalleryPreviewSection";
import { WhyChooseUsSection } from "../Components/customComponent/WhyChooseUsSection";
import  SalonContact  from "../Components/customComponent/ContactSection";
import  SalonAppointment  from "../Components/customComponent/SalonAppointment";
import  SalonPricing  from "../Components/customComponent/SalonPricing";

const Home = () => {
    return (
        <Layout>
            <Head title="Home Sumeera Salon" />
            <Hero />
            <AboutSection />
            <ServicesSection />
            <SalonAppointment/>
            <SalonPricing/>
            <SalonGallery />
            {/* <WhyChooseUsSection /> */}
            <SalonContact />
        </Layout>
    );
};

export default Home;
