import React from "react";

const AcademyTestimonials = () => {
    const testimonials = [
        {
            name: "Priya Sharma",
            course: "Advanced Makeup Masterclass",
            image: "/assets/images/new/16.webp",
            text: "The training I received here completely transformed my career. The instructors are incredibly knowledgeable and supportive. I now run my own successful makeup studio!",
            rating: 5,
        },
        {
            name: "Anjali Patel",
            course: "Professional Hair Styling",
            image: "/assets/images/new/22.webp",
            text: "Best decision I ever made! The hands-on practice and industry connections helped me land my dream job at a top salon. Highly recommend to anyone serious about beauty.",
            rating: 5,
        },
        {
            name: "Sneha Reddy",
            course: "Bridal & Event Styling",
            image: "/assets/images/new/34.webp",
            text: "The curriculum is comprehensive and up-to-date with the latest trends. I learned techniques I never knew existed. The placement support was excellent too!",
            rating: 5,
        },
    ];

    const successStories = [
        {
            number: "95%",
            title: "Placement Rate",
            description: "Of our graduates secure jobs within 3 months",
        },
        {
            number: "500+",
            title: "Industry Partners",
            description: "Top salons and studios hiring our graduates",
        },
        {
            number: "5000+",
            title: "Alumni Network",
            description: "Successful professionals across the country",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <p className="text-lg italic text-[#3c4c24] head">
                            Student Success
                        </p>
                        <svg
                            width="50"
                            height="30"
                            viewBox="0 0 50 30"
                            className="text-pink-400"
                        >
                            <path
                                d="M 5 15 Q 15 5, 25 15 T 45 15"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                            />
                            <polygon
                                points="45,15 40,12 40,18"
                                fill="currentColor"
                            />
                        </svg>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold text-[#3c4c24] mb-6 head">
                        What Our Students Say
                    </h2>

                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Hear from our successful graduates who have built amazing
                        careers in the beauty industry after training with us.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                        >
                            {/* Image Section */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-yellow-400 fill-current"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        )
                                    )}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-600 italic leading-relaxed mb-4">
                                    "{testimonial.text}"
                                </p>

                                {/* Student Info */}
                                <div className="border-t pt-4">
                                    <h4 className="font-bold text-[#3c4c24] text-lg">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.course}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Success Stats */}
                <div className="bg-[#3c4c24] rounded-3xl p-12 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>

                    <div className="relative z-10">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center head">
                            Success by Numbers
                        </h3>
                        <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
                            Our track record speaks for itself. Join a community
                            of successful beauty professionals.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {successStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="text-5xl lg:text-6xl font-bold text-white mb-2 head">
                                        {story.number}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-2">
                                        {story.title}
                                    </h4>
                                    <p className="text-white/70 text-sm">
                                        {story.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="mt-20">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#3c4c24] mb-8 text-center head">
                        Student Achievements
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img
                                src="/assets/images/new/17.webp"
                                alt="Student work"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img
                                src="/assets/images/new/23.webp"
                                alt="Student work"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img
                                src="/assets/images/new/31.webp"
                                alt="Student work"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img
                                src="/assets/images/new/45.webp"
                                alt="Student work"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-[#3c4c24] text-lg mb-6 font-semibold">
                        Ready to start your success story?
                    </p>
                    <button className="bg-[#3c4c24] text-white px-10 py-4 text-lg font-semibold rounded-lg hover:bg-[#2c3c14] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                        Join Our Academy Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AcademyTestimonials;

