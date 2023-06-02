import React from "react";
import PageBanner from "../components/Common/PageBanner";
import IntroGolf from "../components/Golf/IntroGolf";
import Footer from "../components/Layouts/Footer";

export default function Membership() {
  return (
    <>
      <PageBanner
        pageTitle="골프서비스"
        homePageUrl="/"
        homePageText="Home"
        activePageText="골프서비스"
      />

      <IntroGolf />

      <Footer />
    </>
  );
}
