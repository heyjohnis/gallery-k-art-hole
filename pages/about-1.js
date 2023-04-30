import React from "react";
import About from "../components/AboutOne/About";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import PageBanner from "../components/Common/PageBanner";
import Partner from "../components/Common/Partner";
import TeamTwo from "../components/Common/TeamTwo";
import Testimonials from "../components/Common/Testimonials";
import Footer from "../components/Layouts/Footer";

export default function About1() {
  return (
    <>
      <PageBanner
        pageTitle="About Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Style One"
      />

      <About />

      <MakeYourBusiness />

      <Testimonials />

      <TeamTwo />

      <div className="pb-50">
        <Partner />
      </div>

      <Footer />
    </>
  );
}
