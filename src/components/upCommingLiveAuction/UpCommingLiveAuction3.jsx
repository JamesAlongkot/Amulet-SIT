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
function UpCommingLiveAuction3() {
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
      nextEl: '.coming-prev3',
      prevEl: '.coming-next3',
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
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>Up Comming Auction</h2>
              <p className="mb-0">Explore on the worlds best &amp; largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth.</p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <Swiper {...upCommingSlider} className="swiper upcoming-slider3 swiper-fix">
            <div className="swiper-wrapper">
              {
                upCommingLiveAuctionData.map((data) => {
                  const { id, home1AuthorImg, home1AuthorName, home1Image, home1Title, price } = data;
                  return (
                    (<SwiperSlide key={id} className="swiper-slide">
                      <div className="eg-card auction-card3 style-2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
                        <div className="auction-timer">
                          <span className="timer-title">Time Remaining</span>
                          <div className="countdown" id="timer7">
                            <h4>{<Counter formate="counter3" />}</h4>
                          </div>
                        </div>
                        <div className="auction-img">
                          <img alt="image" src={home1Image} />
                          <div className="author-area">
                            <div className="author-emo">
                              <img alt="image" src="assets/images/icons/smile-emo.svg" />
                            </div>
                            <div className="author-name">
                              <span>by @{home1AuthorName}</span>
                            </div>
                          </div>
                        </div>
                        <div className="auction-content">
                          <h4><Link href="/auction-details">{home1Title}</Link></h4>
                          <p>Bidding Price : <span>${price}</span></p>
                          <div className="auction-card-bttm">
                            <Link href="/auction-details" className="eg-btn btn--primary3 btn--sm">Place a Bid</Link>
                            <div className="share-area">
                              <ul className="social-icons d-flex">
                                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li>
                                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                              </ul>
                              <div>
                                <a href="#" className="share-btn"><i className="bx bxs-share-alt" /></a>
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
            <Link href="/live-auction" className="eg-btn btn--primary3-outline btn--md">View ALL</Link>
            <div className="swiper-pagination style-3 d-lg-block d-none" />
            <div className="slider-arrows coming-arrow style-3 d-flex gap-3">
              <div className="coming-prev3 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"><i className="bi bi-arrow-left" /></div>
              <div className="coming-next3 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-arrow-right" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

export default UpCommingLiveAuction3