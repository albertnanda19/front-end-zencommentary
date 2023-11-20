import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "../carousel-style.css";

import { EffectCards } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-full w-full bg-blue-600 bg-[url('/images/nadita.jpeg')] bg-cover"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-blue-600 bg-[url('/images/dina.jpg')] bg-cover"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-blue-600 bg-[url('/images/yumico.jpg')] bg-cover"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-blue-600 bg-[url('/images/xavier.JPG')] bg-cover"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-blue-600 bg-[url('/images/albert.jpg')] bg-cover"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
