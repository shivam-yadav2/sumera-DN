import React, { useState } from "react";
import {
    X,
    ChevronLeft,
    ChevronRight,
    Play,
    Volume2,
    VolumeX,
} from "lucide-react";
import Layout from "@/Layouts/Layout";
import { BannerSection } from "@/Components/customComponent/BannerSection";

const SalonVideoGallery = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isMuted, setIsMuted] = useState(true);

    // Sample gallery videos - replace with your actual video URLs
    const galleryVideos = [
        {
            id: 1,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800",
            category: "makeup",
            alt: "Bridal Makeup Transformation",
            duration: "3:45",
        },
        {
            id: 2,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/elefant_dream.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
            category: "hair",
            alt: "Hair Styling Tutorial",
            duration: "5:30",
        },
        {
            id: 3,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/forrest_gump.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
            category: "makeup",
            alt: "Professional Makeup Artist",
            duration: "4:15",
        },
        {
            id: 4,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/sintel.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800",
            category: "bridal",
            alt: "Bridal Makeover Process",
            duration: "6:20",
        },
        {
            id: 5,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/tears_of_steel.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
            category: "hair",
            alt: "Hair Coloring Techniques",
            duration: "4:50",
        },
        {
            id: 6,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
            category: "makeup",
            alt: "Eye Makeup Masterclass",
            duration: "3:30",
        },
        {
            id: 7,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/elefant_dream.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800",
            category: "bridal",
            alt: "Wedding Day Preparation",
            duration: "7:15",
        },
        {
            id: 8,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/forrest_gump.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800",
            category: "hair",
            alt: "Hair Treatment Process",
            duration: "5:00",
        },
        {
            id: 9,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/sintel.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
            category: "makeup",
            alt: "Lipstick Application Guide",
            duration: "2:45",
        },
        {
            id: 10,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/tears_of_steel.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
            category: "bridal",
            alt: "Wedding Makeup Tutorial",
            duration: "6:40",
        },
        {
            id: 11,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
            category: "hair",
            alt: "Salon Experience Tour",
            duration: "4:20",
        },
        {
            id: 12,
            url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/elefant_dream.mp4",
            thumbnail:
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
            category: "makeup",
            alt: "Glamour Makeup Steps",
            duration: "5:15",
        },
    ];

    const categories = [
        { id: "all", name: "All Videos" },
        { id: "bridal", name: "Bridal" },
        { id: "makeup", name: "Makeup" },
        { id: "hair", name: "Hair Styling" },
    ];

    const filteredVideos =
        selectedCategory === "all"
            ? galleryVideos
            : galleryVideos.filter((vid) => vid.category === selectedCategory);

    const openLightbox = (video) => {
        setSelectedVideo(video);
        setIsMuted(true);
    };

    const closeLightbox = () => {
        setSelectedVideo(null);
    };

    const navigateVideo = (direction) => {
        const currentIndex = filteredVideos.findIndex(
            (vid) => vid.id === selectedVideo.id
        );
        let newIndex;

        if (direction === "next") {
            newIndex = (currentIndex + 1) % filteredVideos.length;
        } else {
            newIndex =
                (currentIndex - 1 + filteredVideos.length) %
                filteredVideos.length;
        }

        setSelectedVideo(filteredVideos[newIndex]);
    };

    return (
        <Layout>
            <BannerSection title="Video Gallery" />
            <div
                className="min-h-screen py-16 px-4"
                style={{ backgroundColor: "#f8f9f7" }}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p
                            className="text-lg italic mb-2"
                            style={{ color: "#5c7650" }}
                        >
                            Watch Our Work
                        </p>
                        <h1
                            className="text-5xl md:text-6xl font-bold mb-4"
                            style={{ color: "#5c7650" }}
                        >
                            Video Gallery
                        </h1>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Explore our stunning collection of transformations
                            and creative artistry in motion
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                    selectedCategory === category.id
                                        ? "text-white shadow-lg"
                                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                                }`}
                                style={{
                                    backgroundColor:
                                        selectedCategory === category.id
                                            ? "#5c7650"
                                            : undefined,
                                }}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVideos.map((video, index) => (
                            <div
                                key={video.id}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                                onClick={() => openLightbox(video)}
                            >
                                {/* Thumbnail */}
                                <div className="relative overflow-hidden bg-gray-800 aspect-video">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="font-semibold text-lg mb-2">
                                                {video.alt}
                                            </h3>
                                            <p className="text-sm text-gray-300">
                                                Duration: {video.duration}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/50 transition-all duration-300 transform group-hover:scale-110">
                                            <Play
                                                size={32}
                                                className="text-white fill-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Duration Badge */}
                                    <div
                                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold backdrop-blur-sm"
                                        style={{
                                            backgroundColor:
                                                "rgba(92, 118, 80, 0.8)",
                                        }}
                                    >
                                        {video.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Video Lightbox */}
                    {selectedVideo && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
                            <button
                                onClick={closeLightbox}
                                className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity z-50"
                            >
                                <X size={36} />
                            </button>

                            <button
                                onClick={() => navigateVideo("prev")}
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
                            >
                                <ChevronLeft size={32} />
                            </button>

                            <button
                                onClick={() => navigateVideo("next")}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
                            >
                                <ChevronRight size={32} />
                            </button>

                            <div className="w-full max-w-4xl">
                                <div className="relative bg-black rounded-lg overflow-hidden mb-4">
                                    <video
                                        src={selectedVideo.url}
                                        controls
                                        autoPlay
                                        muted={isMuted}
                                        className="w-full h-auto max-h-[80vh] object-contain"
                                    />

                                    {/* Mute Button */}
                                    <button
                                        onClick={() => setIsMuted(!isMuted)}
                                        className="absolute bottom-6 right-6 text-white hover:opacity-70 transition-opacity bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
                                    >
                                        {isMuted ? (
                                            <VolumeX size={24} />
                                        ) : (
                                            <Volume2 size={24} />
                                        )}
                                    </button>
                                </div>

                                <div className="text-white">
                                    <h2 className="text-2xl font-bold mb-2">
                                        {selectedVideo.alt}
                                    </h2>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-300">
                                            Duration: {selectedVideo.duration}
                                        </p>
                                        <span className="text-sm text-gray-400">
                                            {filteredVideos.findIndex(
                                                (v) => v.id === selectedVideo.id
                                            ) + 1}{" "}
                                            of {filteredVideos.length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <style jsx>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    div {
                        animation: fadeInUp 0.6s ease-out forwards;
                        opacity: 0;
                    }
                `}</style>
            </div>
        </Layout>
    );
};

export default SalonVideoGallery;
