import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TermsConditionsText from '../components/Private/TermsConditionsText';

export default function TermsConditions() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="그린갤러리 이용약관"
        homePageUrl="/"
        homePageText="Home"
        activePageText="그린갤러리 이용약관"
      />

      <div className="text-container ptb-100">
        <div className="container">
          <TermsConditionsText/>
        </div>
      </div>

      <Footer />
    </>
  );
}
