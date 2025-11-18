import React from "react";

const AcademyWhyChoose = () => {
    const reasons = [
        {
            icon: "🎓",
            title: "Certified Training",
            description:
                "All our courses are internationally recognized and provide industry-standard certifications upon completion.",
        },
        {
            icon: "👥",
            title: "Expert Instructors",
            description:
                "Learn from award-winning professionals with years of real-world experience in the beauty industry.",
        },
        {
            icon: "💼",
            title: "Job Placement Support",
            description:
                "We assist our graduates with job placements and career guidance in top salons and studios.",
        },
        {
            icon: "🛠️",
            title: "Hands-On Practice",
            description:
                "Gain practical experience with our extensive hands-on training sessions using professional equipment.",
        },
        {
            icon: "📚",
            title: "Comprehensive Curriculum",
            description:
                "Our courses cover everything from basics to advanced techniques, ensuring well-rounded expertise.",
        },
        {
            icon: "🌟",
            title: "Small Class Sizes",
            description:
                "Personalized attention with limited students per batch ensures quality learning for everyone.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 lg:py-20 py-10 px-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 right-20 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Large background text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden opacity-5">
                    <h1 className="text-[8rem] lg:text-[12rem] font-[500] text-[#3c4c24] select-none whitespace-nowrap head">
                        Excellence
                    </h1>
                </div>

                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <p className="text-lg italic text-[#3c4c24] head">
                            Our Commitment
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

                    <h2 className="text-4xl lg:text-6xl font-[500] text-[#3c4c24] mb-6 head">
                        Why Choose Our Academy
                    </h2>

                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        We provide world-class beauty education that combines
                        theoretical knowledge with practical skills, preparing you
                        for a successful career in the beauty industry.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                        >
                            {/* Icon Circle */}
                            <div className="w-20 h-20 bg-gradient-to-br from-[#3c4c24] to-[#5c7650] rounded-full flex items-center justify-center mb-6 mx-auto text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {reason.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-[500] text-[#3c4c24] mb-4 text-center head">
                                {reason.title}
                            </h3>

                            <p className="text-gray-600 text-center leading-relaxed">
                                {reason.description}
                            </p>

                            {/* Decorative line */}
                            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Image Section */}
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div className="space-y-6 col-span-3">
                        <h3 className="text-3xl lg:text-4xl font-[500] text-[#3c4c24] head">
                            Start Your Journey to Success
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Join thousands of successful graduates who have
                            transformed their passion for beauty into thriving
                            careers. Our comprehensive training programs are
                            designed to give you the competitive edge you need in
                            today's beauty industry.
                        </p>
                        <button className="bg-[#3c4c24] text-white px-10 py-4 text-lg font-[500] rounded-lg hover:bg-[#2c3c14] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                            Enroll Today
                        </button>
                    </div>

                    <div className=" col-span-2 grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <img
                                src="/assets/images/new/27.webp"
                                alt="Academy training"
                                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                            />
                        </div>
                        <div>
                            <img
                                src="/assets/images/new/37.webp"
                                alt="Student learning"
                                className="w-full h-48 object-cover rounded-2xl shadow-xl"
                            />
                        </div>
                        <div>
                            <img
                                src="/assets/images/new/46.webp"
                                alt="Practical training"
                                className="w-full h-48 object-cover rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademyWhyChoose;

