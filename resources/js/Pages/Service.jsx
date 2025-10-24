import React from "react";
import Layout from "@/Layouts/Layout";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { ServicesSection } from "@/Components/customComponent/ServicesSection";
import SalonPricing from "@/Components/customComponent/SalonPricing";
import SalonContact from "@/Components/customComponent/ContactSection";
import ServiceDetailSection1 from "@/Components/customComponent/ServiceDetailSection1";
import ServiceDetailSection2 from "@/Components/customComponent/ServiceDetailSection2";
const Service = () => {
    return (
        <Layout>
            <BannerSection title="Services" />
            <ServiceDetailSection1 />

            <section className="max-w-7xl mx-auto py-20 md:py-32">
                <div className="px-4">
                    <div className="flex flex-col gap-6 mb-12 items-start justify-between">
                        <h2 className="text-4xl lg:text-6xl text-[#3c4c24] font-bold head">
                            Hair cut with Blow dry
                        </h2>
                        <p className="text-lg p-m text-gray-600   text-start">
                            Maximus accumsan nunc, sit amet tempor lectus
                            facilisis eu. Cras vel elit felis. Vestibulum
                            convallis ipsum id aliquam varius. Etiam nec laoreet
                            turpis. Aenean nisi libero, tempor non sem vitae,
                            hendrerit egestas ex. Nam magna odio, placerat ac
                            risus tristique, viverra tinc idunt nibh. Donec
                            vitae leo efficitur, bibendum nibh ac, pretium urna.
                            Vestibulum nunc augue, scelerisque ac vulputate sed,
                            fermentum non nisi.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div>
                            <img src="/assets/images/new/49.webp" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/new/45.webp" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/new/37.webp" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/new/51.webp" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/new/41.webp" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/new/33.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <ServiceDetailSection2 />

            <SalonPricing />

            {/* <ServicesSection /> */}

            <SalonContact />
        </Layout>
    );
};

export default Service;
