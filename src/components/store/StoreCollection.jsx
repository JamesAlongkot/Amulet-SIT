import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import store from "../../data/store/store.json";
// import Swiper core and required modules
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import Counter from '../common/Counter';
import { useTranslation } from 'next-i18next';
import { formatCurrency } from '../../utils/dateAndCurrencyUtils';
function StoreCollection() {
  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.language;
  const currencyType = i18n.language === 'th' ? 'THB' : i18n.language === 'zh' ? 'CNY' : 'USD';
  const upcomingSlider = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: '.coming-prev1',
      prevEl: '.coming-next1',
    },

    breakpoints: {
      280: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },

    }
  }

  return (
    (<div className="upcoming-seciton pb-120">
      <img alt="image" src="assets/images/bg/section-bg.png" className="img-fluid section-bg" />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>{t('amuletStore')}</h2>
              <p className="mb-0">
                {/* todo: change content */}
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <Swiper
            slidesPerView={"auto"}
            speed={1000}
            spaceBetween={24}
            loop={true}
            roundLengths={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: 'true',
            }}
            navigation={{
              nextEl: '.coming-prev1',
              prevEl: '.coming-next1',
            }}
            breakpoints={{
              280: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              },
        
            }}
            modules={[Autoplay, Navigation]}
            className="swiper upcoming-slider">
            <div className="swiper-wrapper">
              {
                store.map((data) => {
                    const { 
                    id,
                    image,
                    name: {
                      en: nameEn,
                      th: nameTh,
                      zh: nameZh
                    },
                    price: {
                      usd: priceUsd,
                      thb: priceThb,
                      cny: priceCny
                    },
                    category: {
                      en: categoryEn,
                      th: categoryTh,
                      zh: categoryZh
                    },
                    store: {
                      name: storeName,
                      image: storeImage
                    }
                     } = data;

                    const formattedPrice = formatCurrency(
                      currentLanguage === 'en' ? priceUsd : currentLanguage === 'th' ? priceThb : priceCny,
                      currentLanguage,
                      currencyType
                    );
                  return (
                    (<SwiperSlide key={id} className="swiper-slide d-flex">
                      <div className="eg-card c-feature-card1 wow animate fadeInDown flex-fill" data-wow-duration="1.5s" data-wow-delay="0.2s">
                        <div className="auction-img store-col">
                          <img alt="image" src={image} />
                          {/* <div className="auction-timer2 gap-lg-3 gap-md-2 gap-1" id="timer7">
                            <Counter formate="counter2" />
                          </div> */}
                          <div className="author-area2">
                            <div className="author-name">
                              <span>by @{storeName}</span>
                            </div>
                            <div className="author-emo">
                              <img alt="image" src={storeImage} />
                            </div>
                          </div>
                        </div>
                        <div className="c-feature-content">
                          <div className="c-feature-category">{
                            currentLanguage === "en" ? categoryEn : currentLanguage === "th" ? categoryTh : categoryZh
                          }</div>
                          <Link href="/auction-details">
                            <h4>{
                              currentLanguage === "en" ? nameEn : currentLanguage === "th" ? nameTh : nameZh
                            }</h4>
                          </Link>
                          <p>{t('price')} : <span>
                            {formattedPrice}
                            </span></p>
                          <div className="auction-card-bttm">
                            <Link href="/auction-details" className="eg-btn btn--primary btn--sm">{t('viewDetail')}</Link>
                            <div className="share-area">
                              <ul className="social-icons d-flex">
                                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li>
                                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                              </ul>
                              <div>
                                <div className="share-btn"><i className="bx bxs-share-alt" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>)
                  );
                })
              }


            </div>
          </Swiper>
          <div className="slider-bottom d-flex justify-content-between align-items-center">
            <Link href="/live-auction" className="eg-btn btn--primary btn--md">{t('viewAll')}</Link>
            <div className="swiper-pagination style-3 d-lg-block d-none" />
            <div className="slider-arrows coming-arrow d-flex gap-3">
              <div className="coming-prev1 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"><i className="bi bi-arrow-left" /></div>
              <div className="coming-next1 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-arrow-right" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

export default StoreCollection