import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import css from './BannerCard.module.css';  
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={css.mySwiper} 
      >
        <SwiperSlide className={css.mySwiperSlide}>Slide 1</SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}>Slide 2</SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}>Slide 3</SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}>Slide 4</SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}>Slide 5</SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}>Slide 6</SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}>Slide 7</SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}>Slide 8</SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
