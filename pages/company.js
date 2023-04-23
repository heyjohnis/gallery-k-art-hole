import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import AboutCompany from '../components/Common/AboutCompany';
import AboutGreenGolf from '../components/Common/AboutGreenGolf';
import MembershipStyle from '../components/Membership/MembershipStyle';

export default function Company() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="회사소개"
        homePageUrl="/"
        homePageText="Main"
        activePageText="회사소개"
      />
      {/* <AboutGreenGolf/> */}
      <AboutCompany/>

      <MembershipStyle/>

      <Footer />
    </>
  );
}
