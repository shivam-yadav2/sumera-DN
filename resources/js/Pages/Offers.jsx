// resources/js/Pages/Offers.jsx

import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { toast } from "sonner";

export default function Offers() {
    const { offers, services } = usePage().props;

    const [showModal, setShowModal] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        offer_id: "",
    });

    const openModal = (offer) => {
        setSelectedOffer(offer);

        // Auto fill
        setForm((prev) => ({
            ...prev,
            service: offer.title,
            offer_id: offer.id,
        }));

        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedOffer(null);
        setForm({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
            offer_id: "",
        });
    };

    // Form submit with toast
    const submitForm = (e) => {
        e.preventDefault();

        router.post("/api/booking", form, {
            onStart: () => {
                toast.loading("Submitting booking...");
            },

            onSuccess: () => {
                toast.dismiss();
                toast.success("Your booking has been submitted!");
                closeModal();
            },

            onError: (errors) => {
                toast.dismiss();
                const firstError = Object.values(errors)[0];
                toast.error(firstError || "Submission failed!");
            },
        });
    };

    return (
        <Layout>
            <div className="bg-gradient-to-br from-[#3c4c24]/10 via-pink-50 to-[#3c4c24]/20 mt-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 mt-8">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-[500] text-[#3c4c24] head mb-4">
                            Deals & Offers
                        </h2>
                        
                    </div>

                    {/* Offer Cards */}
                    <div className="pb-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {offers.map((offer) => (
                                <div
                                    key={offer.id}
                                    className="bg-white shadow rounded-lg overflow-hidden"
                                >
                                    <img
                                        src={offer.image}
                                        alt={offer.title}
                                        className="w-full object-cover"
                                    />

                                    <div className="flex-grow flex flex-col bg-white">
                                        <button
                                            onClick={() => openModal(offer)}
                                            className="w-full py-3 bg-gradient-to-r from-[#3c4c24] to-[#2d3820] text-white font-[500] hover:from-[#2d3820] hover:to-[#1a2415] transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg mt-auto"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white max-w-3xl w-full rounded-xl shadow-xl flex overflow-hidden relative">

                                {/* Close */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center font-[500]"
                                >
                                    ✕
                                </button>

                                {/* Left Image */}
                                <div className="w-1/2 hidden md:block">
                                    <img
                                        src={selectedOffer?.image}
                                        className="w-full h-full object-cover"
                                        alt=""
                                    />
                                </div>

                                {/* Form */}
                                <div className="w-full md:w-1/2 p-6">
                                    <h2 className="text-2xl font-[500] text-[#3c4c24] mb-4">
                                        Get In Touch!
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        Fill out the form and we'll get back to you soon
                                    </p>

                                    <form className="space-y-3" onSubmit={submitForm}>
                                        <div className="grid grid-cols-2 gap-3">
                                            <input
                                                type="text"
                                                placeholder="Name *"
                                                required
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm({ ...form, name: e.target.value })
                                                }
                                                className="border rounded-lg p-2 w-full"
                                            />

                                            <input
                                                type="email"
                                                placeholder="Email"
                                                value={form.email}
                                                onChange={(e) =>
                                                    setForm({ ...form, email: e.target.value })
                                                }
                                                className="border rounded-lg p-2 w-full"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <input
                                                type="text"
                                                placeholder="Phone Number *"
                                                required
                                                value={form.phone}
                                                onChange={(e) =>
                                                    setForm({ ...form, phone: e.target.value })
                                                }
                                                className="border rounded-lg p-2 w-full"
                                            />

                                            <select
                                                required
                                                value={form.service}
                                                onChange={(e) =>
                                                    setForm({ ...form, service: e.target.value })
                                                }
                                                className="border rounded-lg p-2 w-full"
                                            >
                                                <option value="">Select Service *</option>

                                                {services.map((service) => (
                                                    <option
                                                        key={service.id}
                                                        value={service.title}
                                                    >
                                                        {service.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <textarea
                                            placeholder="Message"
                                            value={form.message}
                                            onChange={(e) =>
                                                setForm({ ...form, message: e.target.value })
                                            }
                                            className="border rounded-lg p-3 w-full h-28"
                                        ></textarea>

                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-[#3c4c24] text-white rounded-lg font-[500] hover:bg-[#2d3820] transition"
                                        >
                                            Send Message →
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
