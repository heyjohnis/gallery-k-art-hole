import React from "react";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ServicesStyleTwo from "../components/Services/ServicesStyleTwo";
import WhatWeOffer from "../components/Services/WhatWeOffer";

export default function Services2() {
  return (
    <>
      <PageBanner
        pageTitle="Services Style Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Two"
      />

      <ServicesStyleTwo />

      <MakeYourBusiness />

      <WhatWeOffer />

      <Footer />
    </>
  );
}
