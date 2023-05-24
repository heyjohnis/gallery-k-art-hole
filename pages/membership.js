import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import MembershipStyle from "../components/Company/MembershipStyle";
import Footer from "../components/Layouts/Footer";

export default function Membership() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="멤버십 소개"
        homePageUrl="/"
        homePageText="Home"
        activePageText="멤버십 소개"
      />

      <MembershipStyle />

      <Footer />
    </>
  );
}
