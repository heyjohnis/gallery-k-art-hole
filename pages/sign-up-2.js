import axios from "axios";
import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SignupComp from "../components/Signup/SignupComp";

export default function SignUp() {

  return (
    <>
      <PageBanner
        pageTitle="회원가입"
        homePageUrl="/"
        homePageText="Home"
        activePageText="회원가입"
      />
      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SignupComp compType={'reg'} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
