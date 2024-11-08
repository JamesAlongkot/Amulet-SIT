import Link from "next/link";
import React, { useState } from "react";
import Breacrumb from "../components/common/Breacrumb";
import Layout from "../components/layout/Layout";

function SignupPage() {
  const [openEye, setOpenEye] = useState();
  const handleEyeIcon = () => {
    if (openEye === false || openEye === 0) {
      setOpenEye(1);
    } else {
      setOpenEye(false);
    }
  };
  return (
    (<Layout>
      <Breacrumb pageName="Sign Up" pageTitle="Sign Up" />
      <div className="signup-section pt-120 pb-120">
        <img
          alt="image"
          src="assets/images/bg/section-bg.png"
          className="section-bg-top"
        />
        <img
          alt="image"
          src="assets/images/bg/section-bg.png"
          className="section-bg-bottom"
        />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div
                className="form-wrapper wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <div className="form-title">
                  <h3>Sign Up</h3>
                  <p>
                    Do you already have an account?{" "}
                    <Link href="/login">
                      Log in here
                    </Link>
                  </p>
                </div>
                <form className="w-100">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Frist Name *</label>
                        <input type="email" placeholder="Frist Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Last Name *</label>
                        <input type="email" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label>Enter Your Email *</label>
                        <input type="email" placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label>Password *</label>
                        <input
                          type={openEye === 1 ? "text" : "password"}
                          name="password"
                          id="password"
                          placeholder="Create A Password"
                        />
                        <i
                          className={
                            openEye === 1
                              ? "bi bi-eye-slash bi-eye"
                              : "bi bi-eye-slash"
                          }
                          id="togglePassword"
                          onClick={handleEyeIcon}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                          <input type="checkbox" id="html" />
                          <label htmlFor="html">
                            I agree to the Terms &amp; Policy
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="account-btn">Create Account</button>
                </form>
                <div className="alternate-signup-box">
                  <h6>or signup WITH</h6>
                  <div className="btn-group gap-4">
                    <a
                      href
                      className="eg-btn google-btn d-flex align-items-center"
                    >
                      <i className="bx bxl-google" />
                      <span>signup whit google</span>
                    </a>
                    <a
                      href
                      className="eg-btn facebook-btn d-flex align-items-center"
                    >
                      <i className="bx bxl-facebook" />
                      signup whit facebook
                    </a>
                  </div>
                </div>
                <div className="form-poicy-area">
                  <p>
                    By clicking the "signup" button, you create a Cobiro
                    account, and you agree to Cobiro's{" "}
                    <a href="#">Terms &amp; Conditions</a> &amp;{" "}
                    <a href="#">Privacy Policy.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>)
  );
}

export default SignupPage;
