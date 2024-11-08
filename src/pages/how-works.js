import React from "react";
import Breacrumb from "../components/common/Breacrumb";
import HowItWork from "../components/howItWork/HowItWork";
import WhyChooseUs from "../components/howItWork/WhyChooseUs";
import Layout from "../components/layout/Layout";

function HowWorksPage() {
  return (
    <Layout>
      <Breacrumb pageTitle="How It Works" pageName="How It Works" />
      <HowItWork />
      <WhyChooseUs />
    </Layout>
  );
}

export default HowWorksPage;
