import Head from "next/head";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Banner2 from "../components/banner/Banner2";
import Home2Blog from "../components/blog/Home2Blog";
import Category2 from "../components/category/Category2";
import CounterUp from "../components/common/CounterUp";
import Header from "../components/common/Header";
import Preloader from "../components/common/Preloader";
import Footer2 from "../components/footer/Footer2";
import LiveAuctiin2 from "../components/LiveAution/LiveAuctiin2";
import Sponsor from "../components/soponsor/Sponsor";
import Testimonial2 from "../components/testimonial/Testimonial2";
import UpCommingLiveAuction2 from "../components/upCommingLiveAuction/UpCommingLiveAuction2";

function Home2() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(false);
    }
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {!loading ? (
        <Preloader classText="preloader style-2" />
      ) : (
        <>
          <Head>
            <title>Bidout - Multivendor Bid and Auction Next Js Template</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="assets/images/bg/sm-logo2.png" />
          </Head>
          <Header logo="header-logo2" />
          <Banner2 />
          <Category2 />
          <LiveAuctiin2 />
          <Testimonial2 />
          <UpCommingLiveAuction2 />
          <Sponsor classText="style-2" />
          <Home2Blog />
          <CounterUp />
          <Footer2 />
        </>
      )}
    </>
  );
}

export default Home2;
