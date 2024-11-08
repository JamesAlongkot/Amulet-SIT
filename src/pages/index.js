import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Banner1 from "../components/banner/Banner1";
import Home1Blog from "../components/blog/Home1Blog";
import Category from "../components/category/Category";
import CounterUp from "../components/common/CounterUp";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Preloader from "../components/common/Preloader";
import Topbar from "../components/common/Topbar";
import LiveAution1 from "../components/LiveAution/LiveAution1";
import SponsorHome1 from "../components/soponsor/Sponsor";
import Testimonial1 from "../components/testimonial/Testimonial1";
import UpCommingLiveAuction1 from "../components/upCommingLiveAuction/UpCommingLiveAuction1";
import StoreCollection from "../components/store/StoreCollection";
import Banner2 from "../components/banner/Banner2";
import SmallBanner from "../components/banner/SmallBanner";
import SubCategory from "../components/category/SubCategory";

export async function getServerSideProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'topbar', 'common', 'banner'])),
      // Will be passed to the page component as props
    },
  };
}

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {!loading ? (
        <Preloader classText="preloader" />
      ) : (
        <>
          <Head>
            <title>Amulet Market</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="assets/images/bg/sm-logo.png" />
          </Head>
          <Topbar /> {/* updated for translations */}
          <Header logo={"header-logo"} /> {/* updated for translations */}
          {/* <Banner1 /> todo: change content */}
          <SmallBanner />
          <SubCategory />
          <Category /> {/* todo: add links to pages */}
          <LiveAution1 /> {/* todo: change content */}
          <UpCommingLiveAuction1 /> {/* todo: change content */}
          {/* todo: add amulet collection */}
          {/* <Testimonial1 /> */}
          {/* <SponsorHome1 classText="style-1" /> */}
          <StoreCollection />
          <Home1Blog />
          {/* <CounterUp /> */}
          <Footer />
        </>
      )}
    </>
  );
}
export default Home;
