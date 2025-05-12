import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { title: "Manage Your Society", image: "https://source.unsplash.com/600x300/?apartment" },
  { title: "Track Complaints Easily", image: "https://source.unsplash.com/600x300/?community" },
  { title: "Stay Connected", image: "https://source.unsplash.com/600x300/?neighborhood" },
];

const Discover = () => {
  return (
    <div className="w-full md:w-[700px] mx-auto py-8 px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-2xl shadow-lg"
        spaceBetween={20}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] overflow-hidden rounded-2xl">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-3xl font-semibold">{slide.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Discover;
