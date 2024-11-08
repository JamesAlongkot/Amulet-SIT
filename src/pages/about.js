import React from "react";
import About from "../components/about/About";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Breacrumb from "../components/common/Breacrumb";
import Layout from "../components/layout/Layout";
import Testimonial1 from "../components/testimonial/Testimonial1";

function AboutPage() {
  return (
    <Layout>
      <Breacrumb pageName="About Us" pageTitle="About Us" />
      <About />
      <WhyChooseUs />
      <Testimonial1 />
    </Layout>
  );
}

export default AboutPage;
