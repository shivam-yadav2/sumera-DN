import React from "react";
import { Award, Clock, Heart, Shield, Sparkles, Users, CheckCircle, Star } from "lucide-react";

const ServiceWhyChoose = () => {
    const features = [
        {
            icon: Award,
            title: "Expert Professionals",
            description: "Our certified experts bring years of experience and passion to deliver exceptional results every time."
        },
        {
            icon: Sparkles,
            title: "Premium Products",
            description: "We use only the finest, internationally acclaimed products that are gentle yet effective."
        },
        {
            icon: Heart,
            title: "Personalized Care",
            description: "Every service is customized to your unique needs, preferences, and beauty goals."
        },
        {
            icon: Shield,
            title: "Hygiene & Safety",
            description: "Maintaining the highest standards of cleanliness and safety for your peace of mind."
        },
        {
            icon: Clock,
            title: "Flexible Timing",
            description: "Convenient appointment slots that fit your busy schedule, including weekends."
        },
        {
            icon: Users,
            title: "Customer Satisfaction",
            description: "5000+ happy clients trust us for their beauty needs and transformations."
        }
    ];

    const benefits = [
        "Experienced and certified professionals",
        "State-of-the-art equipment and facilities",
        "Complimentary consultation for every service",
        "Customized treatment plans",
        "Relaxing and luxurious ambiance",
        "Competitive and transparent pricing"
    ];

    return (
        <section className="py-16 lg:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-3">
                        WHY CHOOSE US
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-[500] text-[#2f3720] mb-4 head">
                        Experience the Sumeera Difference
                    </h2>
                    <p className="text-[#7a705e] text-lg max-w-3xl mx-auto">
                        We don't just provide services—we create experiences that transform and inspire confidence.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group bg-white/90 backdrop-blur-sm rounded-3xl border border-[#e4ded2] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-[#3c4c24] to-[#2f3720] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-[600] text-[#2f3720] mb-3 head">
                                {feature.title}
                            </h3>
                            <p className="text-[#7a705e] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Dark Section - Additional Benefits */}
                <div className="relative overflow-hidden rounded-3xl bg-[#12110f] text-white px-8 py-14 md:px-12">
                    <div className="absolute inset-0 bg-[url('/assets/images/1.JPG')] opacity-10 bg-cover bg-center pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#a0815c]/20 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 grid md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-6">
                                <Star className="w-4 h-4 text-[#e7d3ba]" />
                                <span className="text-xs uppercase tracking-wider text-[#e7d3ba]">What You Get</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-[500] mb-6 head">
                                More Than Just a Service
                            </h3>
                            <p className="text-white/70 text-lg mb-8 leading-relaxed">
                                When you choose Sumeera, you're choosing excellence, care, and a commitment to bringing out your best self.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#e7d3ba] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="relative">
                                <div className="absolute inset-0 border-8 border-[#a0815c] rounded-3xl transform translate-x-4 translate-y-4 pointer-events-none"></div>
                                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 text-center">
                                    <div className="space-y-6">
                                        <div className="p-6 bg-white/10 rounded-2xl backdrop-blur">
                                            <div className="text-5xl font-[600] text-white mb-2 head">5000+</div>
                                            <div className="text-white/70 text-sm">Happy Clients</div>
                                        </div>
                                        <div className="p-6 bg-white/10 rounded-2xl backdrop-blur">
                                            <div className="text-5xl font-[600] text-white mb-2 head">12+</div>
                                            <div className="text-white/70 text-sm">Years Experience</div>
                                        </div>
                                        <div className="p-6 bg-white/10 rounded-2xl backdrop-blur">
                                            <div className="text-5xl font-[600] text-white mb-2 head">4.9</div>
                                            <div className="text-white/70 text-sm">Average Rating</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                
            </div>
        </section>
    );
};

export default ServiceWhyChoose;

