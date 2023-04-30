import React from "react";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ServicesStyleFour from "../components/Services/ServicesStyleFour";

export default function Services4() {
  return (
    <>
      <PageBanner
        pageTitle="Services Style Four"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Four"
      />
      <ServicesStyleFour />

      <MakeYourBusiness />

      <Footer />
    </>
  );
}
