import React from 'react'

function About() {
  return (
    <div className="about-section pt-120 pb-120">
  <img src="assets/images/bg/section-bg.png" className="img-fluid section-bg-top" alt="section-bg" />
  <div className="container">
    <div className="row d-flex justify-content-center g-4">
      <div className="col-lg-6 col-md-10">
        <div className="about-img-area">
          <div className="total-tag">
            <img src="assets/images/bg/total-tag.png" alt="" />
            <h6>Total Raised</h6>
            <h5>$45,390.00</h5>
          </div>
          <img src="assets/images/bg/about-img.png" className="img-fluid about-img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s" alt="about-img" />
          <img src="assets/images/bg/about-linear.png" className="img-fluid about-linear" alt="" />
          <img src="assets/images/bg/about-vector.png" className="img-fluid about-vector" alt="" />
        </div>
      </div>
      <div className="col-lg-6 col-md-10">
        <div className="about-content wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
          <span>Who we are!</span>
          <h2>We Work for Your Incredible Success</h2>
          <p className="para">Auction sites present consumers with a thrilling, competitive way to buy the goods and services they need most.</p>
          <p className="para">But getting your own auction site up and running has always required learning complex coding languages, or hiring an expensive design firm for thousands of dollars and months of work.</p>
          <ul className="about-list">
            <li><a href="#">Have enough food for life.</a></li>
            <li><a href="#">Poor children can return to school.</a></li>
            <li><a href="#">Fuga magni veritatis ad temporibus atque adipisci nisi rerum...</a></li>
          </ul>
          <a href="#choose-us" className="eg-btn btn--primary btn--md">More About</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About