import Link from 'next/link'
import React from 'react'

function Banner3() {
  return (
    (<div className="hero-area hero-style-three">
      <Link href="/join-merchant" className="join-merchant">Join Merchant</Link>
      <img alt="image" src="assets/images/bg/home3-banner.png" className="home3-banner img-fluid" />
      <img alt="image" src="assets/images/bg/home3-ellipse.png" className="img-fluid banner-ellips" />
      <div className="container-lg container-fluid">
        <div className="row d-flex justify-content-start align-items-end">
          <div className="col-xl-7 col-lg-7 px-0">
            <div className="banner3-content">
              <span className="wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.5s">Welcome To Auction House</span>
              <h1 className="wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">Build, Sell &amp; Collect Digital items.</h1>
              <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">Nulla facilisi. Maecenas ac tellus ut ligula interdum convallis. Nullam
                dapibus on erat in dolor posuere, none hendrerit lectus ornare.
                Suspendisse sit amet turpina sagittis, ultrices dui et, aliquam urna.
              </p>
              <Link
                href="/live-auction"
                className="eg-btn btn--primary3 btn--lg wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.8s">Start Exploring</Link>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

export default Banner3