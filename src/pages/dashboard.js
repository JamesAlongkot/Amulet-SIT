import React from "react";
import Breacrumb from "../components/common/Breacrumb";
import ContentTab from "../components/dasboard/ContentTab";
import DeshbordMenu from "../components/dasboard/DashbordMenu";
import OrderTab from "../components/dasboard/OrderTab";
import ProfileTab from "../components/dasboard/ProfileTab";
import PurchaseTab from "../components/dasboard/PurchaseTab";
import Layout from "../components/layout/Layout";

function DashboardPage() {
  return (
    <Layout>
      <Breacrumb pageTitle="Dashboard" pageName="Dashboard" />
      <div className="dashboard-section pt-120 pb-120">
        <img
          alt="images"
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-top"
        />
        <img
          alt="images"
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-bottom"
        />
        <div className="container">
          <div className="row g-4">
            <DeshbordMenu />
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <ContentTab />
                <ProfileTab />
                <OrderTab />
                <PurchaseTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
