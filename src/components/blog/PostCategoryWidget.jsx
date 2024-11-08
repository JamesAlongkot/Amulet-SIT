import Link from 'next/link'
import React from 'react'

function PostCategoryWidget() {
  return (
    (<div className="blog-widget-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
      <div className="top-blog">
        <div className="sidebar-widget-title">
          <h4>Post Categories</h4>
          <span />
        </div>
        <div className="blog-widget-body">
          <ul className="category-list">
            <li><Link href="#"><span>New Technology</span><span>01</span></Link></li>
            <li><Link href="#"><span>Network Setup</span><span>12</span></Link></li>
            <li><Link href="#"><span>Audi Car Bidding</span><span>33</span></Link></li>
            <li><Link href="#"><span>Entertainment</span><span>54</span></Link></li>
            <li><Link href="#"><span>New Technology</span><span>24</span></Link></li>
          </ul>
        </div>
      </div>
    </div>)
  );
}

export default PostCategoryWidget