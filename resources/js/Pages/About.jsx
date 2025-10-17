import Layout from "@/Layouts/Layout";
import React from "react";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { AboutSection } from "@/Components/customComponent/AboutSection";
import { ServicesSection } from "@/Components/customComponent/ServicesSection";
import Faq from "@/Components/customComponent/Faq";

const About = () => {
    return (
        <Layout>
            <BannerSection title="About Us" />
            <AboutSection />
            <ServicesSection />

            <section className="bg-[#3c4c24] text-white text-center py-20 px-4 relative">
                <div
                    className="absolute inset-0  bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('/assets/images/1.JPG')" }}
                ></div>
                <div className="relative z-10 space-y-5">
                    <p className="text-xl head">Lucknow since 2012</p>
                    <h1 className="text-5xl font-bold my-4 head">
                        About Our Story
                    </h1>
                    <p className="max-w-xl mx-auto mb-6 text-lg font-semibold">
                        Praesent id odio quis massa aliquet dictum ut eget erat.
                        Aliquam erat volutpat. Pellentesque sit amet congue
                        tellus.
                    </p>
                    <button className="bg-black text-white py-3 px-6 text-xl head">
                        Make An Appointment
                    </button>
                </div>
            </section>
            <Faq />
            
        </Layout>
    );
};

export default About;
