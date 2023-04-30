import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ServiceDetailsContent from "../components/ServiceDetails/ServiceDetailsContent";

export default function ServiceDetails() {
  return (
    <>
      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
