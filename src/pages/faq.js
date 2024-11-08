import React from "react";
import Breacrumb from "../components/common/Breacrumb";
import FaqAcrodian from "../components/faq/FaqAcrodian";
import FaqForm from "../components/faq/FaqForm";
import Layout from "../components/layout/Layout";

function FaqPage() {
  return (
    <Layout>
      <Breacrumb pageTitle="Faq" pageName="Faq" />
      <div className="faq-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center gy-5">
            <FaqForm />
            <FaqAcrodian />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FaqPage;
