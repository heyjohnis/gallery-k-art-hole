import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import TeamTwo from "../components/Common/TeamTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import AboutCompany from '../components/Common/AboutCompany';
import AboutGreenGolf from '../components/Common/AboutGreenGolf';

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
      <AboutGreenGolf/>
      <AboutCompany/>

      <Footer />
    </>
  );
}
