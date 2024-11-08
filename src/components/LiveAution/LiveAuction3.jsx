import Link from 'next/link';
import React from 'react';
import liveAuctionData from "../../data/liveAution/liveAution.json";
import Counter from '../common/Counter';
function LiveAuction3() {
  return (
    (<div className="live-auction pb-120">
      <img alt="image" src="assets/images/bg/section-bg.png" className="img-fluid section-bg" />
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title4">
              <h2>Live Auction</h2>
              <p className="mb-0">Explore on the worlds best &amp; largest Bidding marketplace with our beautiful Bidding
                products. We want to be a part of your smile, success and future growth.</p>
            </div>
          </div>
        </div>
        <div className="row gy-4 d-flex justify-content-center">
            {
    liveAuctionData.map((data)=>{
        const { id,home1Image,home1title, home1Price,authorImage,authorName} = data;
        return (
          (<div key={id} className="col-lg-4 col-md-6 col-sm-10 ">
            <div className="eg-card auction-card3 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="auction-timer">
                <span className="timer-title">Time Remaining</span>
                <div className="countdown" id="timer1">
                  <h4><Counter formate="counter3"/></h4>
                </div>
              </div>
              <div className="auction-img">
                <img alt="image" src={home1Image} />
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
                <h4><Link href="/auction-details">{home1title}</Link></h4>
                <p>Bidding Price : <span>${home1Price}</span></p>
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
          </div>)
        );
    })
            }
         
        </div>
      </div>
    </div>)
  );
}

export default LiveAuction3