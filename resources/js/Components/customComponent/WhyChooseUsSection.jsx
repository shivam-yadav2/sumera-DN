// components/WhyChooseUsSection.tsx
import React from "react";
import { Award, Star, Users, Heart, Sparkles, TrendingUp } from "lucide-react";

export function WhyChooseUsSection() {
    const features = [
        {
            icon: Award,
            title: "Expert Team",
            description: "Led by Shikha Chauhan, renowned for bridal and fashion makeup with international training and certifications."
        },
        {
            icon: Sparkles,
            title: "Premium Services",
            description: "Wide range of unisex services including hair, body, nails, skincare, and specialized bridal packages."
        },
        {
            icon: Star,
            title: "Professional Academy",
            description: "State-of-the-art training facility offering comprehensive courses with industry-recognized certifications."
        },
        {
            icon: Heart,
            title: "Quality Products",
            description: "Using only high-quality, branded products and latest techniques for the best results."
        },
        {
            icon: Users,
            title: "Personalized Care",
            description: "Individual attention and customized solutions tailored to your unique beauty needs."
        },
        {
            icon: TrendingUp,
            title: "Modern Ambiance",
            description: "Conveniently located in Lucknow with a luxurious, relaxing atmosphere designed for your comfort."
        }
    ];

    return (
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-3">
              OUR EXCELLENCE
            </p>
            <h2 className="text-4xl lg:text-5xl font-[500] text-[#2f3720] mb-4 head">
              Why Choose Sumeera?
            </h2>
            <p className="text-[#7a705e] text-lg max-w-3xl mx-auto">
              Experience the perfect blend of expertise, artistry, and personalized care that sets us apart.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl border border-[#e4ded2] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-[#3c4c24] to-[#2f3720] rounded-2xl">
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

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl border border-[#e4ded2] p-8 shadow-lg">
              <p className="text-[#7a705e] text-lg mb-4">
                Ready to experience the Sumeera difference?
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#3c4c24] hover:bg-[#2f3720] text-white rounded-full font-medium transition-all duration-300 shadow-md"
              >
                Book Your Appointment
                <Award className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }