import React from "react";
import { Award, Star, Trophy, Sparkles } from "lucide-react";

const AchievementsSection = () => {
    // Sample achievement images - replace with actual images
    const achievements = [
        {
            id: 11,
            image: "/assets/images/new/ach7.jpg",
            title: "Celebrity Collaboration",
            category: "Celebrity Event",
        },
        
        {
            id: 11,
            image: "/assets/images/new/ach6.webp",
            title: "Celebrity Collaboration",
            category: "Celebrity Event",
        },
        {
            id: 1,
            image: "/assets/images/new/ach1.webp",
            title: "Celebrity Collaboration",
            category: "Celebrity Event",
        },
        {
            id: 11,
            image: "/assets/images/new/ach8.jpg",
            title: "Celebrity Collaboration",
            category: "Celebrity Event",
        },
        {
            id: 2,
            image: "/assets/images/new/ach2.webp",
            title: "Beauty Excellence Award",
            category: "Award Ceremony",
        },
       
        // {
        //     id: 3,
        //     image: "/assets/images/new/ach3.webp",
        //     title: "Fashion Week Styling",
        //     category: "Celebrity Event",
        // },
        // {
        //     id: 4,
        //     image: "/assets/images/new/ach4.webp",
        //     title: "Best Salon Recognition",
        //     category: "Award Ceremony",
        // },
        {
            id: 5,
            image: "/assets/images/new/ach5.webp",
            title: "Celebrity Makeup Artist",
            category: "Celebrity Event",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-[#ffffff] via-[#f8f6f2] to-[#f5efe3] py-10 lg:py-16 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-[#e7d3ba]/20 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#a0815c]/15 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#e7d3ba]/5 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16 relative">
                    {/* <p className="uppercase tracking-[0.4em] text-xs text-[#a0815c] mb-4 font-medium">
                        OUR JOURNEY
                    </p> */}
                    <h2 className="text-4xl lg:text-6xl font-[500] text-[#2f3720] relative z-10 head mb-4">
                    Our Achievements
                    </h2>
                    
                </div>

               

                {/* Achievements Gallery - Masonry Layout */}
                <div className="masonry-container">
                    <style>{`
                        .masonry-container {
                            column-count: 2;
                            column-gap: 0.5rem;
                        }
                             
                        @media (min-width: 768px) {
                            .masonry-container {
                                column-count: 2;
                                column-gap: 1rem;
                            }
                        }
                        
                        @media (min-width: 1024px) {
                            .masonry-container {
                                column-count: 4;
                                column-gap: 1rem;
                            }
                        }
                        
                        .masonry-item {
                            break-inside: avoid;
                            margin-bottom: 1.5rem;
                        }
                        
                        @media (min-width: 768px) {
                            .masonry-item {
                                margin-bottom: 2rem;
                            }
                        }
                    `}</style>

                    {achievements.map((achievement, index) => (
                        <div key={achievement.id} className="masonry-item">
                            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* Image Container - Auto Height */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        onError={(e) => {
                                            e.target.src =
                                                "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop";
                                        }}
                                    />
                                    {/* Gradient Overlay */}
                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-[#12110f]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div> */}

                                    {/* Award Icon Badge */}
                                    {/* <div className="absolute top-4 right-4 bg-[#a0815c] p-2.5 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Trophy className="w-5 h-5 text-white" />
                                    </div> */}
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    {/* <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        
                                        <span className="inline-block px-3 py-1 bg-[#a0815c] text-white text-xs font-medium rounded-full mb-3">
                                            {achievement.category}
                                        </span>

                                        
                                        <h3 className="text-xl font-[600] text-white head leading-tight">
                                            {achievement.title}
                                        </h3>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                
            </div>
        </div>
    );
};

export { AchievementsSection };
