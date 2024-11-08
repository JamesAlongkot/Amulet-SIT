import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useTranslation } from 'next-i18next';

function SmallBanner() {
  const { t } = useTranslation('banner');
  return (
    (<div className='small-banner'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide className="">
          <img src="assets/images/bg/banner-event1.jpg" alt="slider" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src="assets/images/bg/banner-event2.gif" alt="slider" />
        </SwiperSlide>
      </Swiper>
      <div className="hero-one-pagination d-flex justify-content-center flex-column align-items-center gap-3" />
    </div>)
  );
}

export default SmallBanner