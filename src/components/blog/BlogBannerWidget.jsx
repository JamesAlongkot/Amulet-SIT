import Link from 'next/link'
import React from 'react'

function BlogBannerWidget() {
    return (
        (<div className="sidebar-banner wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
            <div className="banner-content">
                <span>CARS</span>
                <h3>Toyota AIGID A Clasis Cars Sale</h3>
                <Link href="/auction-details" className="eg-btn btn--primary card--btn">Details</Link>
            </div>
        </div>)
    );
}

export default BlogBannerWidget