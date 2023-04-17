import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import IntroBenefits from '../components/Benefits/IntroBenefits';
import BenefitStyle from '../components/Benefits/BenefitStyle';

export default function Membership() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="멤버십 소개"
        homePageUrl="/"
        homePageText="Main"
        activePageText="멤버십 소개"
      />

      <IntroBenefits/>

      <BenefitStyle/>
    

      <Footer />
    </>
  );
}
