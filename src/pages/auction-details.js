import Link from "next/link";
import React from "react";
import AuctionDetailsGallaryTab from "../components/auctionDetails/AuctionDetailsGallaryTab";
import AuctionDetailsHistoryTab from "../components/auctionDetails/AuctionDetailsHistoryTab";
import AUctionDetailsrightSidebar from "../components/auctionDetails/AUctionDetailsrightSidebar";
import Breacrumb from "../components/common/Breacrumb";
import Layout from "../components/layout/Layout";

function AuctionDetailsPage() {
  return (
    (<Layout>
      <Breacrumb pageName="Auction Details" pageTitle="Auction Details" />
      <div className="auction-details-section pt-120 pb-120">
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
          <div className="row g-4 mb-50">
            <AuctionDetailsGallaryTab />
            <AUctionDetailsrightSidebar />
          </div>
          <div className="row d-flex justify-content-center g-4">
            <AuctionDetailsHistoryTab />
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div
                  className="sidebar-banner wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1s"
                >
                  <div className="banner-content">
                    <span>CARS</span>
                    <h3>Toyota AIGID A Clasis Cars Sale</h3>
                    <Link href="/auction-details" className="eg-btn btn--primary card--btn">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>)
  );
}

export default AuctionDetailsPage;
