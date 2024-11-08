import Link from 'next/link';
import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useTranslation } from 'next-i18next';

import categoryData from '../../data/category/category.json';

function Category({classTest}) {
  // console.log('categoryData', categoryData);
  const { i18n } = useTranslation('common');
  const currentLanguage = i18n.language;
  return (
    (<div className="category-section pt-5 pb-80">
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <Swiper
            // speed={1000}
            spaceBetween={30}
            loop={true}
            // autoplay={true}
            navigation={{
              nextEl: '.category-prev1',
              prevEl: '.category-next1',
            }}
            breakpoints={{
              280: {
                slidesPerView: 2
              },
              440: {
                slidesPerView: 2
              },
              576: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3,
                autoplay: true,
                speed: 1000,
              },
              992: {
                slidesPerView: 4
              },
              1200: {
                slidesPerView: 5
              },
              1400: {
                slidesPerView: 6
              },
        
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper category1-slider"
          >
            <div className="swiper-wrapper">
              {/* <SwiperSlide className="swiper-slide">
                <div className={`eg-card category-card1 wow animate fadeInDown ${classTest}`} data-wow-duration="1500ms" data-wow-delay="200ms">
                  <div className="cat-icon">
                    
                  </div>
                  <Link href="/live-auction">
                    <h5>{t('category.popularAmulets')}</h5>
                  </Link>
                </div>
              </SwiperSlide> */}
              {categoryData.map((category, index) => {
                const {
                  image,
                  name: {
                    en: nameEn,
                    th: nameTh,
                    zh: nameZh
                  }
                } = category;
                return (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className={`eg-card category-card1 wow animate fadeInDown ${classTest}`} data-wow-duration="1500ms" data-wow-delay={`${200 * (index + 1)}ms`}>
                    <div className="cat-icon">
                      <img src={image} alt={nameEn} />
                    </div>
                    <Link href="/live-auction">
                      <h5>
                        {currentLanguage === 'en' ? nameEn : currentLanguage === 'th' ? nameTh : nameZh}
                      </h5>
                    </Link>
                  </div>
                </SwiperSlide>
              )})}
            </div>
          </Swiper>
        </div>
        <div className="slider-arrows text-center d-lg-flex d-none  justify-content-end">
          <div className="category-prev1 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> <i className="bx bx-chevron-left" /> </div>
          <div className="category-next1 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> <i className="bx bx-chevron-right" /></div>
        </div>
      </div>
    </div>)
  );
}

export default Category