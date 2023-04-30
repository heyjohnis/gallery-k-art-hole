import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import Footer from "../components/Layouts/Footer";

export default function Contact() {
  return (
    <>
      <PageBanner
        pageTitle="Contact Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Style One"
      />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
