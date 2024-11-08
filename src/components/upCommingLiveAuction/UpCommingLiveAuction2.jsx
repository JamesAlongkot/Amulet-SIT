import React from 'react';
import upCommingLiveAuctionData from "../../data/upCommingAuction/upCommingAuction.json";
// import Swiper core and required modules
import Link from 'next/link';
import SwiperCore, {
    Autoplay,
    Navigation
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from '../common/Counter';
SwiperCore.use([Navigation, Autoplay]);
function UpCommingLiveAuction2() {
    const upCommingSlider = {
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
            nextEl: '.coming-prev2',
            prevEl: '.coming-next2',
        },

        breakpoints: {
            280: {
                slidesPerView: 1,
                pagination: false
            },
            480: {
                slidesPerView: 1,
                pagination: false
            },
            768: {
                slidesPerView: 2,
                pagination: false
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
        (<div className="upcoming-seciton pt-120 pb-120">
            <img alt="image" src="assets/images/bg/section-bg2.png" className="img-fluid section-bg2" />
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center mb-60">
                    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        <div className="section-title2 text-lg-start text-center">
                            <h2>Up Comming Auction</h2>
                            <p className="mb-0">Explore on the world&apos;s best &amp; largest Bidding marketplace with our beautiful Bidding
                                products. We want to be a part of your smile, success and future growth.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 d-lg-block d-none">
                        <div className="slider-bottom d-flex justify-content-end align-items-center">
                            <div className="slider-arrows coming-arrow d-flex gap-3">
                                <div className="coming-prev2 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"><i className="bi bi-arrow-left" /></div>
                                <div className="coming-next2 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> <i className="bi bi-arrow-right" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Swiper {...upCommingSlider} className="swiper upcoming-slider2">
                        <div className="swiper-wrapper">
                            {
                                upCommingLiveAuctionData.map((data) => {
                                    const { id, home1AuthorImg, home1AuthorName, home1category, home1Image, home1Title, price } = data;
                                    return (
                                        (<SwiperSlide key={id} className="swiper-slide">
                                            <div className="eg-card c-feature-card2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                                <div className="auction-img">
                                                    <img alt="image" src={home1Image} />
                                                    <div className="auction-timer2 gap-2" id="timer7">
                                                        <Counter formate="counter2" />

                                                    </div>
                                                    <div className="author-area3">
                                                        <div className="author-emo">
                                                            <img alt="image" src={home1AuthorImg} />
                                                        </div>
                                                        <div className="author-name">
                                                            <span>by @{home1AuthorName}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="c-feature-content">
                                                    <div className="c-feature-category">{home1category}</div>
                                                    <Link href="/auction-details">
                                                         <h4>{home1Title}</h4>
                                                    </Link>
                                                    <p>Bidding Price : <span>${price}</span></p>
                                                    <div className="auction-card-bttm">
                                                        <Link href="/auction-details" className="eg-btn btn--primary2 btn--sm">View Details</Link>
                                                        <div className="share-area">
                                                            <ul className="social-icons d-flex">
                                                                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                                                <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                                                                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li>
                                                                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                                                            </ul>
                                                            <div>
                                                                <Link href="#" className="share-btn"><i className="bx bxs-share-alt" /></Link>
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
                </div>
            </div>
        </div>)
    );
}

export default UpCommingLiveAuction2