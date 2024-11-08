import Link from 'next/link';
import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useTranslation } from 'next-i18next';

function Banner1() {
  const { t } = useTranslation('banner');
    // const bennarSlider= {
    //     slidesPerView: "auto",
    //     speed: 2500,
    //     loop: true,
    //     spaceBetween: 10,
    //     centeredSlides: true,
    //     roundLengths: true,
    //     parallax: true,
    //     effect: 'fade',
    //     navigation: false,
    //     fadeEffect: {
    //       crossFade: true,
    //     },
    //     autoplay:{
    //         delay: 5000,
    //         disableOnInteraction: false,
    //       },
    //     pagination: {
    //       el: ".hero-one-pagination",
    //       clickable: true,
          
    //     }
    //   }
  return (
    (<div className="hero-area hero-style-one">
      <div className="hero-main-wrapper position-relative">
        <Swiper
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
          className="swiper banner1"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="slider-bg-1">
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-10 col-lg-10">
                      <div className="banner1-content">
                        <span>{t('welcome')}</span>
                        <h1>{t('home1.headline')}</h1>
                        <p>
                          {t('home1.subheadline')}
                        </p>
                        <Link href="/live-auction" className="eg-btn btn--primary btn--lg">{t('home1.buttonText')}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slider-bg-2">
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-10 col-lg-10">
                      <div className="banner1-content">
                        <span>{t('welcome')}</span>
                        <h2>{t('home2.headline')}</h2>
                        <p>
                          {t('home2.subheadline')}
                        </p>
                        <Link href="/live-auction" className="eg-btn btn--primary btn--lg">{t('home2.buttonText')}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="hero-one-pagination d-flex justify-content-center flex-column align-items-center gap-3" />
      </div>
    </div>)
  );
}

export default Banner1