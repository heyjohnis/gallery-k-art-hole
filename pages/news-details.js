import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import NewsDetailsContent from "../components/News/NewsDetailsContent";

export default function NewsDetails() {
  return (
    <>
      <PageBanner
        pageTitle="News Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Details"
      />

      <NewsDetailsContent />

      <Footer />
    </>
  );
}
