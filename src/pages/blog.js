import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breacrumb";
import Layout from "../components/layout/Layout";
import blogData from "../data/blog/blog.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function BlogPage() {
  return (
    (<Layout>
      <Breadcrumb pageName="Blog" pageTitle="Blog" />
      <div className="blog-section pt-120 pb-120">
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
          <div className="row d-flex justify-content-center g-4 mb-60">
            {blogData.slice(0, 6).map((data) => {
              const {
                id,
                date,
                image,
                authorName,
                commentNumber,
                description,
                autohrImage,
              } = data;
              return (
                (<div key={id} className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
                  <div
                    className="single-blog-style1 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="blog-img">
                      <a href="#" className="blog-date">
                        <i className="bi bi-calendar-check" />
                        {date}
                      </a>
                      {/* <img alt="image" src={image} /> */}
                      <LazyLoadImage alt="image" src={image} effect="blur" />
                    </div>
                    <div className="blog-content">
                      <h5>
                        <Link href="/blog-details">
                          {description}
                        </Link>
                      </h5>
                      <div className="blog-meta">
                        <div className="author">
                          {/* <LazyLoadImage
                   alt="image"
                   src={image}
                   effect="blur"
                   /> */}
                          <img alt="image" src={autohrImage} />
                          <Link href="/blog-details" className="author-name">
                            {authorName}
                          </Link>
                        </div>
                        <div className="comment">
                          <img
                            alt="image"
                            src="assets/images/icons/comment-icon.svg"
                          />
                          <Link href="#" className="comment">
                            {commentNumber}Comments
                          </Link>
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

export default BlogPage;
