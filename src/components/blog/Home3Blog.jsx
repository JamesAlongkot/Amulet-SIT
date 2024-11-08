import Link from 'next/link';
import React from 'react';
import reectNewsData from "../../data/blog/blog.json";
function Home3Blog() {
    return (
        (<div className="recent-news-section pt-120 pb-120">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        <div className="section-title4">
                            <h2>Our Recent News</h2>
                            <p className="mb-0">Explore on the worlds best &amp; largest Bidding marketplace with our beautiful Bidding
                                products. We want to be a part of your smile, success and future growth.</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center g-4">
                    {
                        reectNewsData.slice(0, 3).map((data) => {
                            const { id, date, image, title, authorName, autohrImage, commentNumber, description } = data;
                            return (
                                (<div key={id} className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
                                    <div className="single-blog-style3 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                        <div className="blog-img">
                                            <Link href="#" className="blog-date"><i className="bi bi-calendar-check" />{date}</Link>
                                            <img alt="image" src={image} />
                                        </div>
                                        <div className="blog-content">
                                            <h5><Link href="blog-details" legacyBehavior>{title}
                                            </Link></h5>
                                            <div className="blog-meta">
                                                <div className="author">
                                                    <img alt="image" src={autohrImage} />
                                                    <Link href="/blog-details" className="author-name">{authorName}</Link>
                                                </div>
                                                <div className="comment">
                                                    <img alt="image" src="assets/images/icons/comment-icon.svg" />
                                                    <Link href="#" className="comment">{commentNumber}Comments</Link>
                                                </div>
                                            </div>
                                            <p className="para">{description}</p>
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

export default Home3Blog