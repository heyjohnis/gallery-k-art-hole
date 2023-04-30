import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PrivacyPolicyText from "../components/Private/PrivacyPolicyText";

export default function PrivacyPolicy() {
  return (
    <>
      <PageBanner
        pageTitle="개인정보 처리방침"
        homePageUrl="/"
        homePageText="Main"
        activePageText="개인정보 처리방침"
      />

      <div className="text-container ptb-100">
        <div className="container">
          <PrivacyPolicyText />
        </div>
      </div>

      <Footer />
    </>
  );
}
