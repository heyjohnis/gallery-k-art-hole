import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ServicesStyleThree from "../components/Services/ServicesStyleThree";

export default function Services3() {
  return (
    <>
      <PageBanner
        pageTitle="Services Style Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Three"
      />

      <ServicesStyleThree />

      <Footer />
    </>
  );
}
