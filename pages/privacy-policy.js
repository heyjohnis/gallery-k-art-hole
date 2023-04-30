import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PrivacyPolicyText from '../components/Private/PrivacyPolicyText';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="개인정보 처리방침"
        homePageUrl="/"
        homePageText="Home"
        activePageText="개인정보 처리방침"
      />

      <div className="text-container ptb-100">
        <div className="container">
          <PrivacyPolicyText/>
        </div>
      </div>

      <Footer />
    </>
  );
}
