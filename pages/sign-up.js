import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="회원가입 2"
        homePageUrl="/"
        homePageText="Home"
        activePageText="회원가입 2"
      />

      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">회원인증</h3>
                </div>

                <form method="post">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                    <div className="radio">
                      <label>
                        <input type="radio" value="option1" checked={true} />
                        Option 1
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="option2" />
                        Option 2
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="option3" />
                        Option 3
                      </label>
                    </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Enter Your Username"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="password"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Register Account
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Already have an account?
                        <Link href="/login">Login</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
