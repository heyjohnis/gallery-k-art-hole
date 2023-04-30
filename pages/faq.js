import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/Layouts/Footer";

export default function Faq() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="FAQ"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
      />

      <FaqContent />

      <Footer />
    </>
  );
}
