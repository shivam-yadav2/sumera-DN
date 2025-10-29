import React from "react";
import { Head, usePage } from "@inertiajs/react";
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
    const { gallery = [] } = usePage().props;
    
    return (
        <Layout>
            <Head title="Home Sumeera Salon" />
            <Hero />
            <AboutSection />
            <ServicesSection />
            {/* <AcademyCoursesSection /> */}
            {/* <OffersDealsSection /> */}
            <SalonAppointment/>
            {/* <SalonPricing/> */}
            <SalonContact />
            <SalonGallery gallery={gallery} />
            {/* <WhyChooseUsSection /> */}
        </Layout>
    );
};

export default Home;
