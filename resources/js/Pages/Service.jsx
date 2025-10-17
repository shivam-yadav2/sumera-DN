import React from "react";
import Layout from "@/Layouts/Layout";
import { BannerSection } from "@/Components/customComponent/BannerSection";
import { ServicesSection } from "@/Components/customComponent/ServicesSection";
import SalonPricing from "@/Components/customComponent/SalonPricing";
import SalonContact from "@/Components/customComponent/ContactSection";
const Service = () => {
    return (
        <Layout>
            <BannerSection title="Services" />
            <section className="max-w-4xl mx-auto py-20 md:py-32">
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
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <img src="/assets/images/1.JPG" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/2.JPG" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/1.JPG" alt="" />
                        </div>
                        <div>
                            <img src="/assets/images/2.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <SalonPricing />

            {/* <ServicesSection /> */}

            <SalonContact />

        </Layout>
    );
};

export default Service;