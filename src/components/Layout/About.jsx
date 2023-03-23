import React from 'react';
import style from './About.module.css';
import './About.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination } from 'swiper';

const About = React.memo(() => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={100}
      slidesPerView={1.5}
      // loop
      centeredSlides
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img loading="lazy" src="./public/1_slide.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="./public/2_slide.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="./public/3_slide.jpg" />
      </SwiperSlide>
    </Swiper>
  );
});

export default About;
