import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        (<footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <Link href="/"><img alt="image" src="assets/images/bg/footer-logo.png" /></Link>
                                <p>Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore.</p>
                                <form>
                                    <div className="input-with-btn d-flex jusify-content-start align-items-strech">
                                        <input type="text" placeholder="Enter your email" />
                                        <button type="submit"><img alt="image" src="assets/images/icons/send-icon.svg" /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                            <div className="footer-item">
                                <h5>Navigation</h5>
                                <ul className="footer-list">
                                    <li><Link href="/live-auction">All Product</Link></li>
                                    <li><Link href="/how-works">How It Works</Link></li>
                                    <li><Link href="/login">My Account</Link></li>
                                    <li><Link href="/about">About Company</Link></li>
                                    <li><Link href="/blog">Our News Feed</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                            <div className="footer-item">
                                <h5>Help &amp; FAQs</h5>
                                <ul className="footer-list">
                                    <li><Link href="/product">Help Center</Link></li>
                                    <li><Link href="/faq">Customer FAQs</Link></li>
                                    <li><Link href="/login">Terms and Conditions</Link></li>
                                    <li><Link href="/about">Security Information</Link></li>
                                    <li><Link href="/blog">Merchant Add Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h5>Latest Feed</h5>
                                <ul className="recent-feed-list">
                                    <li className="single-feed">
                                        <div className="feed-img">
                                            <Link href="/blog-details"><img alt="image" src="assets/images/blog/recent-feed1.png" /></Link>
                                        </div>
                                        <div className="feed-content">
                                            <span>January 31, 2022</span>
                                            <h6><Link href="/blog-details">Grant Distributions Conti nu to Incr Ease.</Link>
                                            </h6>
                                        </div>
                                    </li>
                                    <li className="single-feed">
                                        <div className="feed-img">
                                            <Link href="/blog-details"><img alt="image" src="assets/images/blog/recent-feed2.png" /></Link>
                                        </div>
                                        <div className="feed-content">
                                            <span>February 21, 2022</span>
                                            <h6><Link href="/blog-details">Seminar for Children to Learn About.</Link></h6>
                                        </div>
                                    </li>
                                    <li className="single-feed">
                                        <div className="feed-img">
                                            <Link href="/blog-details"><img alt="image" src="assets/images/blog/recent-feed3.png" /></Link>
                                        </div>
                                        <div className="feed-content">
                                            <span>March 22, 2022</span>
                                            <h6><Link href="/blog-details">Education and teacher for all African
                                                Children.</Link></h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row d-flex align-items-center g-4">
                        <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                            <p>Copyright 2022 <a href="#">Bid Out</a> | Design By <a href="https://www.egenslab.com/" className="egns-lab">Egens Lab</a></p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center flex-sm-nowrap flex-wrap">
                            <p className="d-sm-flex d-none">We Accepts:</p>
                            <ul className="footer-logo-list">
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay1.png" /></a></li>
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay2.png" /></a></li>
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay3.png" /></a></li>
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay4.png" /></a></li>
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay5.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
    );
}

export default Footer