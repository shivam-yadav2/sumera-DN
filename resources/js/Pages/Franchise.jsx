import React from 'react';
import Layout from '@/Layouts/Layout';
import { BannerSection } from '@/Components/customComponent/BannerSection';
import {
    Building2,
    Sparkles,
    Users,
    Globe,
    MapPin,
    Clock,
    CheckCircle2,
} from 'lucide-react';

const franchiseHighlights = [
    {
        title: 'Trusted Brand Legacy',
        description:
            'Sumeera Salon has been synonymous with premium beauty care and transformative experiences, earning the trust of thousands of loyal clients.',
        icon: Sparkles,
    },
    {
        title: 'Comprehensive Franchise Support',
        description:
            'From location setup and operations to marketing and staff training, our team guides you through every milestone of your franchise journey.',
        icon: Users,
    },
    {
        title: 'High-Growth Industry',
        description:
            'Tap into the booming beauty and wellness market with proven business processes, curated service menus, and premium retail tie-ups.',
        icon: Globe,
    },
];

const supportBenefits = [
    {
        title: 'Turnkey Launch Playbook',
        description:
            'From interior aesthetics to staff hiring, we handhold your team through detailed SOPs and on-ground support.',
        icon: CheckCircle2,
    },
    {
        title: 'Location Intelligence',
        description:
            'Leverage our market research insights to choose high-potential catchments aligned with the Sumeera brand.',
        icon: MapPin,
    },
    {
        title: 'Expedited Go-Live',
        description:
            'Launch in 90 days with a proven timeline covering civil work, brand compliance, inventory, and marketing ramp-up.',
        icon: Clock,
    },
];

const Franchise = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Placeholder submission handler. Integrate with backend or external service as needed.
    };

    return (
        <Layout>
            <BannerSection title="Sumeera Salon Franchise" />

            <section className="relative bg-gradient-to-br from-rose-50 via-white to-purple-100 py-24 px-4 overflow-hidden">
                <div className="absolute inset-y-0 right-[-20%] w-[60%] bg-gradient-to-t from-[#d1c4e9] via-transparent to-transparent blur-3xl opacity-60 pointer-events-none" />
                <div className="absolute -left-1/3 top-[-20%] w-[55%] aspect-square bg-gradient-to-br from-[#fde1e9] via-[#fff5f8] to-transparent blur-3xl opacity-60 pointer-events-none" />

                <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-[#3c4c24] text-xs md:text-sm font-[500] tracking-[0.2em] uppercase shadow-lg">
                        <Building2 className="w-4 h-4 text-[#3c4c24]" />
                        Franchise Opportunities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[500] text-[#3c4c24] head">
                        Build A Beautiful Business With Us
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Partner with Sumeera Salon to launch a premium beauty destination in your
                        city. Our franchise program blends expert artistry, curated treatments, and
                        robust business support so you can deliver memorable client experiences and
                        grow sustainably.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 mt-16 relative z-10">
                    {franchiseHighlights.map(({ title, description, icon: Icon }) => (
                        <div
                            key={title}
                            className="group bg-white/90 border border-white/60 shadow-xl rounded-3xl p-8 space-y-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3c4c24] to-[#0c1f1a] text-white shadow-lg">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-[500] text-[#3c4c24] head">
                                {title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto mt-16 grid gap-6 md:grid-cols-3 text-left relative z-10">
                    {[
                        { label: 'Cities Served', value: '12+' },
                        { label: 'Clients Styled', value: '35,000+' },
                        { label: 'Academy Graduates', value: '1,500+' },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-white/80 border border-white/60 rounded-2xl px-6 py-8 shadow-lg">
                            <p className="text-3xl font-[500] text-[#3c4c24] head">{stat.value}</p>
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mt-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative bg-[#0c1f1a] py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_45%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/patterns/texture-light.png')] bg-cover bg-center pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className=" items-start">
                        {/* <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 space-y-8 backdrop-blur-lg shadow-2xl">
                            <div className="space-y-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs uppercase tracking-[0.4em]">
                                    Why Partner
                                </span>
                                <h3 className="text-3xl font-[500] text-white head leading-tight">
                                    The Sumeera Advantage
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Gain more than a logo. Access an entire ecosystem designed to keep
                                    your franchise thriving—premium product curation, academy-backed
                                    training, and hyperlocal campaigns to drive footfall.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {supportBenefits.map(({ title, description, icon: Icon }) => (
                                    <div key={title} className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-white font-[500] head">
                                                {title}
                                            </h4>
                                            <p className="text-white/60 text-sm leading-relaxed">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-2xl bg-white/10 border border-white/10 p-6 space-y-4">
                                <h5 className="text-white font-[500] head">
                                    Ready To Explore?
                                </h5>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Submit the enquiry form and our franchise manager will schedule a
                                    discovery call within 3 business days to walk you through the model,
                                    commercials, and onboarding process.
                                </p>
                            </div>
                        </div> */}

                        <form
                            onSubmit={handleSubmit}
                            className="relative bg-white rounded-[36px] shadow-2xl border border-white/60 p-6 md:p-10 space-y-10 overflow-hidden"
                            encType="multipart/form-data"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f3ede2] opacity-90 pointer-events-none" />

                            <div className="relative space-y-3">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3c4c24]/10 text-[#3c4c24] text-xs font-[500] tracking-[0.3em] uppercase">
                                    Apply Now
                                </span>
                                <h2 className="text-3xl md:text-4xl font-[500] text-[#3c4c24] head">
                                    Franchise Enquiry Form
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Fill out the form below and our franchise development team will reach
                                    out with detailed information, investment requirements, and next steps.
                                </p>
                            </div>

                            <div className="relative space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-sm font-[500] text-[#3c4c24]">
                                            Your Name *
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="contactNumber" className="text-sm font-[500] text-[#3c4c24]">
                                            Contact Number *
                                        </label>
                                        <input
                                            id="contactNumber"
                                            name="contactNumber"
                                            type="tel"
                                            required
                                            placeholder="Enter your contact number"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="permanentAddress" className="text-sm font-[500] text-[#3c4c24]">
                                            Permanent Address *
                                        </label>
                                        <textarea
                                            id="permanentAddress"
                                            name="permanentAddress"
                                            required
                                            placeholder="Include street, city, and state details"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 min-h-[100px] focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="officeAddress" className="text-sm font-[500] text-[#3c4c24]">
                                            Office Address
                                        </label>
                                        <textarea
                                            id="officeAddress"
                                            name="officeAddress"
                                            placeholder="If different from permanent address"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 min-h-[100px] focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-[500] text-[#3c4c24]">
                                            Your Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="profession" className="text-sm font-[500] text-[#3c4c24]">
                                            Profession *
                                        </label>
                                        <input
                                            id="profession"
                                            name="profession"
                                            type="text"
                                            required
                                            placeholder="Describe your current profession"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <span className="text-sm font-[500] text-[#3c4c24]">
                                        Any Knowledge of Beauty Industry?
                                    </span>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 text-sm text-gray-700">
                                            <input
                                                type="radio"
                                                name="beautyKnowledge"
                                                value="yes"
                                                className="h-4 w-4 text-[#3c4c24] focus:ring-[#3c4c24]"
                                                required
                                            />
                                            Yes
                                        </label>
                                        <label className="flex items-center gap-2 text-sm text-gray-700">
                                            <input
                                                type="radio"
                                                name="beautyKnowledge"
                                                value="no"
                                                className="h-4 w-4 text-[#3c4c24] focus:ring-[#3c4c24]"
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="inspiration" className="text-sm font-[500] text-[#3c4c24]">
                                    What Inspired You to Take Sumeera Salon And Academy Awadh Franchise?

                                    </label>
                                    <textarea
                                        id="inspiration"
                                        name="inspiration"
                                        placeholder="Share your motivation or expectations"
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 min-h-[120px] focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="city" className="text-sm font-[500] text-[#3c4c24]">
                                            City *
                                        </label>
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            required
                                            placeholder="City for proposed franchise"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="state" className="text-sm font-[500] text-[#3c4c24]">
                                            State *
                                        </label>
                                        <input
                                            id="state"
                                            name="state"
                                            type="text"
                                            required
                                            placeholder="State"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="pinCode" className="text-sm font-[500] text-[#3c4c24]">
                                            Pin Code *
                                        </label>
                                        <input
                                            id="pinCode"
                                            name="pinCode"
                                            type="text"
                                            required
                                            placeholder="Pin code"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 focus:border-[#3c4c24] focus:outline-none focus:ring-2 focus:ring-[#3c4c24]/20"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="aadhaarCard" className="text-sm font-[500] text-[#3c4c24]">
                                            Upload Aadhar Card (PDF, max 200kb) *
                                        </label>
                                        <input
                                            id="aadhaarCard"
                                            name="aadhaarCard"
                                            type="file"
                                            accept=".pdf"
                                            required
                                            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#3c4c24] file:px-5 file:py-2 file:text-sm file:font-[500] file:text-white hover:file:bg-[#2a3814]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="panCard" className="text-sm font-[500] text-[#3c4c24]">
                                            Upload PAN Card (PDF, max 200kb) *
                                        </label>
                                        <input
                                            id="panCard"
                                            name="panCard"
                                            type="file"
                                            accept=".pdf"
                                            required
                                            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#3c4c24] file:px-5 file:py-2 file:text-sm file:font-[500] file:text-white hover:file:bg-[#2a3814]"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="px-10 py-3 rounded-full bg-[#3c4c24] text-white font-[500] shadow-lg hover:bg-[#2a3814] transition-all duration-300"
                                    >
                                        Submit Interest
                                    </button>
                                </div>
                                <p className="text-xs text-center text-gray-500">
                                    * Please note: We will contact you within 3-5 business days after reviewing
                                    your submission. Ensure that uploaded files meet the size and format criteria.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Franchise;
