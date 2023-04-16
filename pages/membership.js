import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Footer from "../components/Layouts/Footer";
import MembershipStyle from '../components/Membership/MembershipStyle';

export default function Membership() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="멤버십 소개"
        homePageUrl="/"
        homePageText="Main"
        activePageText="멤버십 소개"
      />

      <MembershipStyle/>

      <div className="bg-fafafa">
        <MakeYourBusiness />
      </div>

      <Footer />
    </>
  );
}
