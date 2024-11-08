import React from 'react'

function AuctionDetailsGallaryTab() {
  return (
    <div className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
        <ul className="nav small-image-list d-flex flex-md-column flex-row justify-content-center gap-4  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
          <li className="nav-item">
            <div id="details-img1" data-bs-toggle="pill" data-bs-target="#gallery-img1" aria-controls="gallery-img1">
              <img alt="image" src="assets/images/bg/prod-gallery1.png" className="img-fluid" />
            </div>
          </li>
          <li className="nav-item">
            <div id="details-img2" data-bs-toggle="pill" data-bs-target="#gallery-img2" aria-controls="gallery-img2">
              <img alt="image" src="assets/images/bg/prod-gallery2.png" className="img-fluid" />
            </div>
          </li>
          <li className="nav-item">
            <div id="details-img3" data-bs-toggle="pill" data-bs-target="#gallery-img3" aria-controls="gallery-img3">
              <img alt="image" src="assets/images/bg/prod-gallery3.png" className="img-fluid" />
            </div>
          </li>
        </ul>
        <div className="tab-content mb-4 d-flex justify-content-lg-start justify-content-center  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
          <div className="tab-pane big-image fade show active" id="gallery-img1">
            <div className="auction-gallery-timer d-flex align-items-center justify-content-center flex-wrap">
              <h3 id="countdown-timer-1">&nbsp;</h3>
            </div>
            <img alt="image" src="assets/images/bg/prod-gallery1.png" className="img-fluid" />
          </div>
          <div className="tab-pane big-image fade" id="gallery-img2">
            <div className="auction-gallery-timer d-flex align-items-center justify-content-center">
              <h3 id="countdown-timer-2">&nbsp;</h3>
            </div>
            <img alt="image" src="assets/images/bg/prod-gallery2.png" className="img-fluid" />
          </div>
          <div className="tab-pane big-image fade" id="gallery-img3">
            <div className="auction-gallery-timer d-flex align-items-center justify-content-center">
              <h3 id="countdown-timer-3">&nbsp;</h3>
            </div>
            <img alt="image" src="assets/images/bg/prod-gallery3.png" className="img-fluid" />
          </div>
        </div>
      </div>
  )
}

export default AuctionDetailsGallaryTab