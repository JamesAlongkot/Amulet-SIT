import Link from 'next/link';
import React from 'react';
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination
} from "swiper";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
function Category2() {
    const caragorySlider = {
        slidesPerView: "auto",
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        roundLengths: true,
        navigation: {
            nextEl: '.category-prev1',
            prevEl: '.category-next1',
        },

        breakpoints: {
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
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
            1400: {
                slidesPerView: 7
            },

        }
    }
    return (
        (<div className="category-section2 pt-120 pb-120" id="category">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-12">
                        <Swiper {...caragorySlider} className="swiper category2-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                        <img alt="image" src="assets/images/bg/accessories.png" className="category-img" />
                                        <div className="content">
                                            <img alt="image" src="assets/images/icons/cat-icon2.svg" />
                                            <h5><Link href="/live-auction">Accessories</Link></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                        <img alt="image" src="assets/images/bg/cars.png" className="category-img" />
                                        <div className="content">
                                            <img alt="image" src="assets/images/icons/car-icon.svg" />
                                            <h5><Link href="/live-auction">Cars</Link></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                                        <img alt="image" src="assets/images/bg/motobike.png" className="category-img" />
                                        <div className="content">
                                            <img alt="image" src="assets/images/icons/moto-bike.svg" />
                                            <h5><Link href="/live-auction">Motor Bike</Link></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                        <img alt="image" src="assets/images/bg/fashion.png" className="category-img" />
                                        <div className="content">
                                            <img alt="image" src="assets/images/icons/cat-icon4.svg" />
                                            <h5><Link href="/live-auction">Fashion</Link></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                        <img alt="image" src="assets/images/bg/virtual.png" className="category-img" />
                                        <div className="content">
                                            <img alt="image" src="assets/images/icons/cat-icon5.svg" />
                                            <h5><Link href="/live-auction">Virtual Worlds</Link></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                                        <img alt="image" src="assets/images/bg/music.png" className="category-img" />
                                        <div className="content">
                                            <img alt="image" src="assets/images/icons/cat-icon1.svg" />
                                            <h5><Link href="/live-auction">Music</Link></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">
                                        <img alt="image" src="assets/images/bg/cards.png" className="category-img" />
                                        <div className="content">
                                            <img alt="image" src="assets/images/icons/cat-icon3.svg" />
                                            <h5><Link href="/live-auction">Trading Cards</Link></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                        <img alt="image" src="assets/images/bg/fashion.png" className="category-img" />
                                        <div className="content">
                                            <img alt="image" src="assets/images/icons/cat-icon4.svg" />
                                            <h5><Link href="/live-auction">Fashion</Link></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="eg-card category-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">
                                        <img alt="image" src="assets/images/bg/cards.png" className="category-img" />
                                        <div className="content">
                                            <img alt="image" src="assets/images/icons/cat-icon3.svg" />
                                            <h5><Link href="/live-auction">Trading Cards</Link></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>)
    );
}

export default Category2