import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import MembershipStyle from "../components/Membership/MembershipStyle";

export default function Membership() {
  return (
    <>
      <PageBanner
        pageTitle="멤버십 소개"
        homePageUrl="/"
        homePageText="Main"
        activePageText="멤버십 소개"
      />

      <MembershipStyle />

      {/* <MembershipBenefits/> */}

      <Footer />
    </>
  );
}
