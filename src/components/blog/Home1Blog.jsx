import Link from "next/link";
import React from "react";
import blogData from "../../data/blog/home1blog.json";
import { useTranslation } from "next-i18next";
function Home1Blog() {
  const { t } = useTranslation("common");
  return (
    <div className="recent-news-section pb-120">
      <img
        alt="image"
        src="assets/images/bg/section-bg.png"
        className="img-fluid section-bg"
      />
      <img
        alt="image"
        src="assets/images/icons/dot-circle.svg"
        className="dot-circle"
      />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>{t('recentTopics')}</h2>
              <p className="mb-0">{/* todo: add content */}</p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center g-4">
          {blogData.map((data) => {
            const {
              id,
              title,
              authorImage,
              authorName,
              date,
              image,
              commentNumber,
            } = data;
            return (
              <div key={id} className="col-md-6 col-sm-10">
                <div
                  className="single-blog-style1 wow animate fadeInDown"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <div className="blog-img">
                    <Link href="#" className="blog-date">
                      <i className="bi bi-calendar-check" />
                      {date}
                    </Link>
                    <img alt="image" src={image} />
                  </div>
                  <div className="blog-content">
                    <h5>
                      <Link href="/blog-details">{title}</Link>
                    </h5>
                    <div className="blog-meta">
                      <div className="author">
                        <img alt="image" src={authorImage} />
                        <Link href="/blog" className="author-name">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home1Blog;
