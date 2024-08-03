import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade } from "swiper/modules";

const ImageSlider = () => {
  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div>
      <Swiper
        ref={swiperRef}
        modules={[EffectFade]}
        effect="fade"
        spaceBetween={30}
        slidesPerView={1}
        allowTouchMove={false}
        navigation={false}
        pagination={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x400/ff7f7f/333333?text=Slide+1"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x400/7f7fff/333333?text=Slide+2"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x400/7fff7f/333333?text=Slide+3"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
      <div className="buttons">
        <button onClick={() => goToSlide(0)}>Go to Slide 1</button>
        <button onClick={() => goToSlide(1)}>Go to Slide 2</button>
        <button onClick={() => goToSlide(2)}>Go to Slide 3</button>
      </div>
    </div>
  );
};

export default ImageSlider;
