import React from "react";
import About from "../components/AboutTwo/About";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import PageBanner from "../components/Common/PageBanner";
import PartnerSlider from "../components/Common/PartnerSlider";
import Testimonials from "../components/Common/Testimonials";
import Footer from "../components/Layouts/Footer";

export default function About2() {
  return (
    <>
      <PageBanner
        pageTitle="About Style Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Style Two"
      />

      <About />

      <WhyChooseUs />

      <MakeYourBusiness />

      <Testimonials />

      <PartnerSlider />

      <Footer />
    </>
  );
}
