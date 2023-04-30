import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TestimonialsContent from "../components/Testimonials/TestimonialsContent";

export default function Testimonials() {
  return (
    <>
      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
      />

      <TestimonialsContent />

      <Footer />
    </>
  );
}
