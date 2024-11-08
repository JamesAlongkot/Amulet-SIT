import Link from "next/link";
import React from "react";
import Breacrumb from "../components/common/Breacrumb";
import Counter from "../components/common/Counter";
import Layout from "../components/layout/Layout";
import LiveAuctionData from "../data/liveAution/liveAution.json";

function liveAuctionPage() {
  return (
    (<Layout>
      <Breacrumb pageName="Live Auction" pageTitle="Live Auction" />
      <div className="live-auction-section pt-120 pb-120">
        <img
          alt="image"
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-top"
        />
        <img
          alt="image"
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-bottom"
        />
        <div className="container">
          <div className="row gy-4 mb-60 d-flex justify-content-center">
            {LiveAuctionData.map((data) => {
              const {
                id,
                home1Image,
                home1title,
                authorImage,
                authorName,
                price,
              } = data;
              return (
                (<div key={id} className="col-lg-4 col-md-6 col-sm-10 ">
                  <div
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                    className="eg-card auction-card1 wow fadeInDown"
                  >
                    <div className="auction-img">
                      <img alt="image" src={home1Image} />
                      <div className="auction-timer">
                        <div className="countdown" id="timer1">
                          <h4>
                            <Counter formate="counter1" />
                          </h4>
                        </div>
                      </div>
                      <div className="author-area">
                        <div className="author-emo">
                          <img alt="image" src={authorImage} />
                        </div>
                        <div className="author-name">
                          <span>by @{authorName}</span>
                        </div>
                      </div>
                    </div>
                    <div className="auction-content">
                      <h4>
                        <Link href="/auction-details">
                          {home1title}
                        </Link>
                      </h4>
                      <p>
                        Bidding Price : <span>${price}</span>
                      </p>
                      <div className="auction-card-bttm">
                        <Link href="/auction-details" className="eg-btn btn--primary btn--sm">

                          {" "}Place a Bid
                                                    
                        </Link>
                        <div className="share-area">
                          <ul className="social-icons d-flex">
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com/">
                                <i className="bx bxl-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                          </ul>
                          <div>
                            <a href="#" className="share-btn">
                              <i className="bx bxs-share-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
              );
            })}
          </div>
          <div className="row">
            <nav className="pagination-wrap">
              <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                <li className="page-item">
                  <a className="page-link" href="#" tabIndex={-1}>
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>)
  );
}

export default liveAuctionPage;
