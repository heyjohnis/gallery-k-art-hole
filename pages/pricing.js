import React from "react";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PricingStyleOne from "../components/Pricing/PricingStyleOne";

export default function Pricing() {
  return (
    <>
      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
      />

      <PricingStyleOne />

      <div className="bg-fafafa">
        <MakeYourBusiness />
      </div>

      <Footer />
    </>
  );
}
