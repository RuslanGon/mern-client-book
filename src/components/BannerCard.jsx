import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import css from './BannerCard.module.css';  
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={css.mySwiper} 
      >
        <SwiperSlide className={css.mySwiperSlide}></SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}></SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}></SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}></SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}></SwiperSlide>
        <SwiperSlide className={css.mySwiperSlide}></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default BannerCard;
