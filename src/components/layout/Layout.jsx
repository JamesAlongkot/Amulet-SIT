import Head from "next/head";
import React from "react";
import CounterUp from "../common/CounterUp";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Topbar from "../common/Topbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bidout - Multivendor Bid and Auction Next Js Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/bg/sm-logo.png" />
      </Head>
      <Topbar />
      <Header logo="header-logo" />
      {children}
      <CounterUp />
      <Footer />
    </>
  );
}

export default Layout;
