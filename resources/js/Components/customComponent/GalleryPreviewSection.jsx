import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const SalonGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Sample gallery images - replace with your actual images
    const galleryImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800",
            category: "makeup",
            alt: "Bridal Makeup",
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
            category: "hair",
            alt: "Hair Styling",
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
            category: "makeup",
            alt: "Makeup Artist",
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800",
            category: "bridal",
            alt: "Bridal Look",
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
            category: "hair",
            alt: "Hair Color",
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
            category: "makeup",
            alt: "Eye Makeup",
        },
        {
            id: 7,
            url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800",
            category: "bridal",
            alt: "Bride Portrait",
        },
        {
            id: 8,
            url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800",
            category: "hair",
            alt: "Hair Treatment",
        },
        {
            id: 9,
            url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
            category: "makeup",
            alt: "Lipstick Application",
        },
        {
            id: 10,
            url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
            category: "bridal",
            alt: "Wedding Makeup",
        },
        {
            id: 11,
            url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
            category: "hair",
            alt: "Salon Interior",
        },
        {
            id: 12,
            url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
            category: "makeup",
            alt: "Glamour Makeup",
        },
    ];

    const categories = [
        { id: "all", name: "All Work" },
        { id: "bridal", name: "Bridal" },
        { id: "makeup", name: "Makeup" },
        { id: "hair", name: "Hair Styling" },
    ];

    const filteredImages =
        selectedCategory === "all"
            ? galleryImages
            : galleryImages.filter((img) => img.category === selectedCategory);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        const currentIndex = filteredImages.findIndex(
            (img) => img.id === selectedImage.id
        );
        let newIndex;

        if (direction === "next") {
            newIndex = (currentIndex + 1) % filteredImages.length;
        } else {
            newIndex =
                (currentIndex - 1 + filteredImages.length) %
                filteredImages.length;
        }

        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <div className="min-h-screen bg-[#3c4c24] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl head font-bold text-white mb-4">
                        Our Gallery
                    </h1>
                    <p className="text-gray-100 text-lg max-w-2xl mx-auto">
                        Explore our stunning collection of transformations and
                        creative artistry
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
                                    ? "bg-gradient-to-r from-[#3c4c24] to-[#0c1f1a] text-white shadow-lg"
                                    : "bg-white text-[#3c4c24] hover:bg-gray-50 shadow-md"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                            onClick={() => openLightbox(image)}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2">
                                        {image.alt}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-pink-200">
                                        <ZoomIn size={16} />
                                        <span>Click to view</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white hover:text-pink-400 transition-colors z-50"
                        >
                            <X size={36} />
                        </button>

                        <button
                            onClick={() => navigateImage("prev")}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-pink-400 transition-colors z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={() => navigateImage("next")}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-pink-400 transition-colors z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
                        >
                            <ChevronRight size={32} />
                        </button>

                        <div className="max-w-6xl max-h-[90vh] mx-4">
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />
                            <p className="text-white text-center mt-4 text-xl font-medium">
                                {selectedImage.alt}
                            </p>
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

                .columns-1 > div,
                .columns-2 > div,
                .columns-3 > div {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default SalonGallery;
