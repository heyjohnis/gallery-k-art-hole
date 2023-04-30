import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutCompany from '../components/Company/AboutCompany';
import MembershipStyle from '../components/Company/MembershipStyle';
import Footer from "../components/Layouts/Footer";

export default function Company() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="그린갤러리"
        homePageUrl="/"
        homePageText="Main"
        activePageText="그린갤러리"
      />
      
      <AboutCompany/>

      <MembershipStyle/>

      <Footer />
    </>
  );
}
