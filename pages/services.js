import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ServicesStyleOne from "../components/Services/ServicesStyleOne";

export default function Services() {
  return (
    <>
      <PageBanner
        pageTitle="Services Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style One"
      />

      <ServicesStyleOne />

      <Footer />
    </>
  );
}
