import React from "react";
import BenefitStyle from "../components/Membership/BenefitStyle";
import IntroBenefits from "../components/Membership/IntroBenefits";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function Membership() {
  return (
    <>
      <PageBanner
        pageTitle="멤버십 혜택 소개"
        homePageUrl="/"
        homePageText="Home"
        activePageText="멤버십 혜택 소개"
      />

      <IntroBenefits/>

      <BenefitStyle />

      <Footer />
    </>
  );
}
