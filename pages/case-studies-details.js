import React from "react";
import CaseStudiesDetailsContent from "../components/CaseStudiesDetails/CaseStudiesDetailsContent";
import CTA from "../components/Common/CTA";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function CaseStudiesDetails() {
  return (
    <>
      <PageBanner
        pageTitle="Case Studies Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies Details"
      />

      <CaseStudiesDetailsContent />

      <CTA />

      <Footer />
    </>
  );
}
