import React from "react";
import Breacrumb from "../components/common/Breacrumb";
import ContactInfo from "../components/contact/ContactInfo";
import Layout from "../components/layout/Layout";

function ContactPage() {
  return (
    <>
      <Layout>
        <Breacrumb pageName="Contact Us" pageTitle="Contact Us" />
        <ContactInfo />
      </Layout>
    </>
  );
}

export default ContactPage;
