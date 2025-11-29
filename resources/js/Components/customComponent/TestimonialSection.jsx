import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { usePage } from '@inertiajs/react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Verma',
    role: 'Makeup Client',
    image: '/assets/images/testimonials/1.jpg',
    text: 'Absolutely loved my makeover! The team was professional and the results were stunning. Highly recommended!'
  },
  {
    id: 2,
    name: 'Anjali Singh',
    role: 'Hair Client',
    image: '/assets/images/testimonials/2.jpg',
    text: 'Great ambience and very skilled staff. My hair looks and feels incredible after the treatment.'
  },
  {
    id: 3,
    name: 'Rohit Kumar',
    role: 'Spa Client',
    image: '/assets/images/testimonials/3.jpg',
    text: 'A truly relaxing experience. The spa therapists were attentive and the service was top notch.'
  },
  {
    id: 4,
    name: 'Sneha Patel',
    role: 'Nail Client',
    image: '/assets/images/testimonials/4.jpg',
    text: 'Loved the attention to detail. My nails look perfect and the polish lasted long.'
  }
]

const TestimonialSection = () => {
    const { services = [] } = usePage().props;
        const [swiperInstance, setSwiperInstance] = React.useState(null);
         const servicesWithImages = services.filter(service => service.image);
    const displayServices = servicesWithImages.length > 0 ? servicesWithImages : fallbackServices;

    console.log(displayServices)
  return (
    <section className="py-16 bg-[#fafaf6]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-[600] text-[#3c4c24] mb-2 head">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Real reviews from our valued customers — experience the Sumeera difference.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {displayServices.map((t) => (
            <SwiperSlide key={t.id}>
              <div style={{
                    backgroundImage:"url(/assets/images/new/pattern.webp)"
                }} className="p-6 lg:p-8 bg-[#e6f8ca7c] rounded-2xl shadow-lg relative overflow-hidden">
                <div className=" relative flex justify-center -mt-12 mb-4">
                  <div className="absolute  w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center mt-2" >
                  <h3 className="text-xl font-[600] text-[#3c4c24]">{t.title}</h3>
                  {/* <p className="text-sm text-gray-500 mb-4">{t.role}</p> */}
                  <p className="text-gray-600 text-base">{t.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialSection
