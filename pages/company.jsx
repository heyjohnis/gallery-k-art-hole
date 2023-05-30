import React from "react";
import AboutCompany from "../components/Company/AboutCompany";
import PageBanner from "../components/Common/PageBanner";
import MembershipStyle from "../components/Company/MembershipStyle";
import Footer from "../components/Layouts/Footer";

export default function Company() {
  return (
    <>
      <PageBanner
        pageTitle="그린갤러리"
        homePageUrl="/"
        homePageText="Home"
        activePageText="그린갤러리"
      />

      <AboutCompany />

      <MembershipStyle />

      <Footer />
    </>
  );
}
