import React from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Import required Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import our custom CSS
import "../styles/hero.css";




export default function HeroSection({imgs , children}) {
  return (
    <div className="hero container">
      <div className="hero-content">
      {children}
      </div>

      <div className="image">
        <Swiper
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active",
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="hero-swiper"
        >
          {imgs.map((img) => {
            return (
              <SwiperSlide>
                <img
                  className="background-image"
                  src={`/imgs/${img}`}
                  alt="Farm animals"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation buttons (optional) */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}
