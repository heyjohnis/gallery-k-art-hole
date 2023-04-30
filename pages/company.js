import React from "react";
import AboutCompany from "../components/Common/AboutCompany";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import MembershipStyle from "../components/Membership/MembershipStyle";

export default function Company() {
  return (
    <>
      <PageBanner
        pageTitle="그린갤러리"
        homePageUrl="/"
        homePageText="Main"
        activePageText="그린갤러리"
      />
      {/* <AboutGreenGolf/> */}
      <AboutCompany />

      <MembershipStyle />

      <Footer />
    </>
  );
}
