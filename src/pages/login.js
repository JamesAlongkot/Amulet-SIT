import Link from "next/link";
import React, { useState } from "react";
import Breacrumb from "../components/common/Breacrumb";
import Layout from "../components/layout/Layout";

function LoginPage() {
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
      <Breacrumb pageName="Log In" pageTitle="Log In" />
      <div className="login-section pt-120 pb-120">
        <img
          alt="imges"
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-top"
        />
        <img
          alt="imges"
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-bottom"
        />
        <div className="container">
          <div className="row d-flex justify-content-center g-4">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div
                className="form-wrapper wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <div className="form-title">
                  <h3>Log In</h3>
                  <p>
                    New Member?{" "}
                    <Link href="/signup">
                      signup here
                    </Link>
                  </p>
                </div>
                <form className="w-100">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Enter Your Email *</label>
                        <input type="email" placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <div className="col-12">
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
                    <div className="col-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                          <input type="checkbox" id="html" />
                          <label htmlFor="html">
                            I agree to the <a href="#">Terms &amp; Policy</a>
                          </label>
                        </div>
                        <a href="#" className="forgot-pass">
                          Forgotten Password
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="account-btn">Log in</button>
                </form>
                <div className="alternate-signup-box">
                  <h6>or signup WITH</h6>
                  <div className="btn-group gap-4">
                    <a
                      href="#"
                      className="eg-btn google-btn d-flex align-items-center"
                    >
                      <i className="bx bxl-google" />
                      <span>signup whit google</span>
                    </a>
                    <a
                      href="#"
                      className="eg-btn facebook-btn d-flex align-items-center"
                    >
                      <i className="bx bxl-facebook" />
                      signup whit facebook
                    </a>
                  </div>
                </div>
                <div className="form-poicy-area">
                  <p>
                    By clicking the `signup` button, you create a Cobiro
                    account, and you agree to Cobiros{" "}
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

export default LoginPage;
