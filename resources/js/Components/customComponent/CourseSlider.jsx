import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CourseSlider = () => {
  const courses = [
    {
      title: 'Professional Hair Styling',
      duration: '8 Weeks',
      level: 'Beginner',
      image: '/assets/images/1.JPG',
      price: '₹35,000',
      description: 'Master cutting, coloring, and styling techniques from industry experts.'
    },
    {
      title: 'Advanced Makeup Masterclass',
      duration: '6 Weeks',
      level: 'Advanced',
      image: '/assets/images/2.JPG',
      price: '₹75,000',
      description: 'Learn advanced makeup techniques for bridal, editorial, and special events.'
    },
    {
      title: 'Color Correction Specialist',
      duration: '4 Weeks',
      level: 'Intermediate',
      image: '/assets/images/3.JPG',
      price: '₹45,000',
      description: 'Master advanced color theory and correction for all hair types.'
    },
    {
      title: 'Bridal & Event Styling',
      duration: '5 Weeks',
      level: 'Advanced',
      image: '/assets/images/4.JPG',
      price: '₹55,000',
      description: 'Create stunning looks for weddings and special occasions.'
    },
    {
      title: 'Foundation to Basics',
      duration: '3 Weeks',
      level: 'Beginner',
      image: '/assets/images/3.JPG',
      price: '₹20,000',
      description: 'Learn the fundamentals of makeup artistry and skincare.'
    },
    {
      title: 'Special Effects Makeup',
      duration: '6 Weeks',
      level: 'Advanced',
      image: '/assets/images/2.JPG',
      price: '₹60,000',
      description: 'Master SFX techniques for film, theater, and fashion industries.'
    },
  ];

  return (
    <div className="bg-white py-20 px-4 md:px-8 ">
      <div className="container mx-auto overflow-hidden">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg italic mb-2" style={{ color: '#5c7650' }}>
            Explore Our Courses
          </p>
          <h2 className="text-5xl head font-bold mb-4" style={{ color: '#5c7650' }}>
            Academy Courses
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Choose from our comprehensive range of beauty education programs designed to transform your passion into a professional career.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            pagination={{
              clickable: true,  
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            style={{
              width: '100%',
              paddingBottom: '80px',
            }}
          >
            {courses.map((course, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width: '400px',
                  height: '600px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full w-full flex flex-col hover:shadow-3xl transition-shadow duration-300"
                  style={{
                    border: '1px solid #e5e7eb',
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute top-4 right-4 px-4 py-2 rounded-full text-white text-sm font-semibold"
                      style={{ backgroundColor: '#5c7650' }}
                    >
                      {course.level}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3
                        className="text-2xl font-bold head mb-2"
                        style={{ color: '#5c7650' }}
                      >
                        {course.title}
                      </h3>

                      <div className="flex gap-3 mb-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          ⏱ {course.duration}
                        </span>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {course.description}
                      </p>
                    </div>

                    {/* Footer Section */}
                    <div className="border-t pt-4" style={{ borderColor: '#5c7650' }}>
                      <p
                        className="text-2xl font-bold head mb-4"
                        style={{ color: '#5c7650' }}
                      >
                        {course.price}
                      </p>
                      <button
                        className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
                        style={{ backgroundColor: '#5c7650' }}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Styling */}
          <style>{`
            .mySwiper .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
              background: #d1d5db;
              opacity: 0.5;
              transition: all 0.3s ease;
            }

            .mySwiper .swiper-pagination-bullet-active {
              background: #5c7650;
              opacity: 1;
              width: 30px;
              border-radius: 10px;
            }

            .mySwiper .swiper-pagination {
              bottom: 10px;
            }

            .mySwiper {
              overflow: visible;
            }

            .swiper-slide {
              perspective: 1000px;
            }
          `}</style>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#f8f9f7' }}>
            <p className="text-4xl font-bold mb-2" style={{ color: '#5c7650' }}>
              50+
            </p>
            <p className="text-gray-700 font-semibold">Expert Instructors</p>
          </div>
          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#f8f9f7' }}>
            <p className="text-4xl font-bold mb-2" style={{ color: '#5c7650' }}>
              1000+
            </p>
            <p className="text-gray-700 font-semibold">Happy Graduates</p>
          </div>
          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#f8f9f7' }}>
            <p className="text-4xl font-bold mb-2" style={{ color: '#5c7650' }}>
              98%
            </p>
            <p className="text-gray-700 font-semibold">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;