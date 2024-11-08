import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import BlogBannerWidget from "../components/blog/BlogBannerWidget";
import BlogComment from "../components/blog/BlogComment";
import CommentForm from "../components/blog/CommentForm";
import PostCategoryWidget from "../components/blog/PostCategoryWidget";
import RecentPostWidget from "../components/blog/RecentPostWidget";
import SearchWidget from "../components/blog/SearchWidget";
import SocialLinksWIdget from "../components/blog/SocialLinksWIdget";
import Breacrumb from "../components/common/Breacrumb";
import Layout from "../components/layout/Layout";

function BlogDetailsPage() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Layout>
      <Breacrumb pageName="Blog Details" pageTitle="Blog Details" />
      <div className="blog-details-section pt-120 pb-120">
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
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="blog-details-single">
                <div className="blog-content">
                  <p className="para">
                    Gochujang ugh viral, butcher pabst put a bird on it
                    meditation austin craft beer banh. Distillery ramps af, goch
                    ujang hell of VHS kitsch austin. Vegan air plant trust fund,
                    poke sartorial ennui next lev el photo booth coloring book
                    etsy green juice meditation austin craft beer.
                  </p>
                  <blockquote>
                    <img
                      alt="image"
                      src="assets/images/icons/quote-fill-green.svg"
                      className="quote-icon"
                    />
                    <p className="para">
                      “If the delivery provider maintains all the standards then
                      it is safe to have get products delivered to you. It is
                      hard to maintain but still safer to get your products
                      ordered If you’ve been following the crypto space”
                    </p>
                    <h5>-- Leslie Alexander</h5>
                  </blockquote>
                  <h4 className="sub-title">
                    How can have anything you ant in life if you ?
                  </h4>
                  <p className="para">
                    If you’ve been following the crypto space, you’ve likely
                    heard of Non-Fungible Tokens (Biddings), more popularly
                    referred to as ‘Crypto Collectibles.’ The world of Biddings
                    is growing rapidly. It seems there is no slowing down of
                    these assets as they continue to go up in price. This growth
                    comes with the opportunity for people to start new
                    businesses to create and capture value. The market is open
                    for players in every kind of field. Are you a collector.
                  </p>
                  <div className="blog-video-area">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <img
                          alt="image"
                          src="assets/images/blog/blogd1.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="video-wrapper position-relative">
                          <div className="video-play">
                            <div
                              onClick={() => setOpen(true)}
                              style={{ cursor: "pointer" }}
                              className="popup-youtube video-icon"
                            >
                              <i className="bx bx-play" />
                            </div>
                          </div>
                          <img
                            alt="image"
                            src="assets/images/blog/blogd2.png"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <React.Fragment>
                      <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={isOpen}
                        videoId="SMKPKGW083c"
                        onClose={() => setOpen(false)}
                      />
                    </React.Fragment>
                  </div>
                  <p className="para">
                    Gochujang ugh viral, butcher pabst put a bird on it
                    meditation austin craft beer banh. Distillery ramps af, goch
                    ujang hell of VHS kitsch austin. Vegan air plant trust fund,
                    poke sartorial ennui next lev el photo booth coloring book
                    etsy green juice meditation austin craft beer.
                  </p>
                </div>
                <div className="blog-tag">
                  <div className="row g-3">
                    <div className="col-md-6 d-flex justify-content-md-start justify-content-center align-items-center">
                      <h6>Post Tag:</h6>
                      <ul className="tag-list">
                        <li>
                          <a href="#">Network Setup</a>
                        </li>
                        <li>
                          <a href="#">Cars</a>
                        </li>
                        <li>
                          <a href="#">Technology</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-md-end justify-content-center align-items-center">
                      <ul className="share-social gap-3">
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
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">
                            <i className="bx bxl-pinterest-alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-author gap-4 flex-md-nowrap flex-wrap">
                  <div className="author-image">
                    <img
                      alt="image"
                      src="assets/images/blog/blog-author.png"
                      className="img-fluid"
                    />
                  </div>
                  <div className="author-detials text-md-start text-center">
                    <h5>-- Leslie Alexander</h5>
                    <p className="para">
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting unchanged. It was popularised
                      in the sheets containing lorem ipsum is simply free text.
                    </p>
                  </div>
                </div>
                <BlogComment />
                <CommentForm />
              </div>
            </div>
            <div className="col-lg-4">
              {/* blog-sidebar */}
              <div className="blog-sidebar">
                <SearchWidget />
                <RecentPostWidget />
                <PostCategoryWidget />
                <SocialLinksWIdget />
                <BlogBannerWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetailsPage;
