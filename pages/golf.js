import React from "react";
import IntroGolf from "../components/Benefits/IntroGolf";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function Membership() {
  return (
    <>
      <PageBanner
        pageTitle="골프서비스"
        homePageUrl="/"
        homePageText="Main"
        activePageText="골프서비스"
      />

      <IntroGolf />

      {/* <TableGolf/> */}

      <Footer />
    </>
  );
}
