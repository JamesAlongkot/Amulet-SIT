import Link from 'next/link';
import React from 'react';
import liveAuctionData from "../../data/liveAution/liveAution.json";
import Counter from '../common/Counter';
function LiveAuctiin2() {

    return (
        (<div className="live-auction pb-120">
            <img alt="image" src="assets/images/bg/section-bg2.png" className="img-fluid section-bg2" />
            <div className="container position-relative">
                <img alt="image" src="assets/images/bg/dotted2.png" className="dotted3" />
                <div className="row d-flex justify-content-center align-items-center mb-60 g-4">
                    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        <div className="section-title2 text-lg-start text-center">
                            <h2>Live Auction</h2>
                            <p className="mb-0">Explore on the world&apos;s best &amp; largest Bidding marketplace with our beautiful Bidding
                                products. We want to be a part of your smile, success and future growth.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 col-xl-6 text-lg-end text-center">
                        <Link href="/live-auction" className="eg-btn btn--primary2 btn--md">View All</Link>
                    </div>
                </div>
                <div className="row gy-4 d-flex justify-content-center">
                    {
                        liveAuctionData.map((data) => {

                            const { id, home1Image, authorImage, authorName, price, home1title } = data;
                            return (
                                (<div key={id} className="col-lg-4 col-md-6 col-sm-10 ">
                                    <div data-wow-duration="1.5s" data-wow-delay="0.2s" className="eg-card auction-card2 wow fadeInDown">
                                        <div className="auction-img">
                                            <img alt="image" src={home1Image} />
                                            <div className="auction-timer">
                                                <div className="countdown" id="timer1">
                                                    <h5><Counter formate="counter1" /></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="auction-content">
                                            <h4><Link href="/auction-details">{home1title}</Link></h4>
                                            <div className="author-price-area">
                                                <div className="author">
                                                    <img alt="image" src={authorImage} /><span className="name">{authorName}</span>
                                                </div>
                                                <p>${price}</p>
                                            </div>
                                            <div className="auction-card-bttm">
                                                <Link href="/auction-details" className="eg-btn btn--primary2 btn--sm">Place a Bid</Link>
                                                <div className="share-area">
                                                    <i className="bi bi-heart" />
                                                    <i className="bi bi-three-dots-vertical" />
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

export default LiveAuctiin2