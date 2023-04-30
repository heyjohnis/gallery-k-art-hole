import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactFormStyleTwo from "../components/Contact/ContactFormStyleTwo";
import ContactInfo from "../components/Contact/ContactInfo";
import Footer from "../components/Layouts/Footer";

export default function Contact2() {
  return (
    <>
      <PageBanner
        pageTitle="Contact Style Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Style Two"
      />

      <ContactInfo />

      <ContactFormStyleTwo />

      <Footer />
    </>
  );
}
