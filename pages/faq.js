import React from "react";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/Layouts/Footer";

export default function Faq() {
  return (
    <>
      <PageBanner
        pageTitle="FAQ"
        homePageUrl="/"
        homePageText="Main"
        activePageText="FAQ"
      />

      <FaqContent />

      <Footer />
    </>
  );
}
