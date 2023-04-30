import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import IntroBenefits from '../components/Membership/IntroBenefits';
import BenefitStyle from '../components/Membership/BenefitStyle';
import Footer from "../components/Layouts/Footer";

export default function Membership() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="멤버십 혜택 소개"
        homePageUrl="/"
        homePageText="Main"
        activePageText="멤버십 혜택 소개"
      />

      <IntroBenefits/>

      <BenefitStyle/>
    

      <Footer />
    </>
  );
}
