import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import Footer from "../components/Layouts/Footer";

export default function Contact() {
  return (
    <>
      <PageBanner
        pageTitle="상담/문의"
        homePageUrl="/"
        homePageText="Home"
        activePageText="상담/문의"
      />

      {/* <ContactInfo /> */}

      <ContactForm />

      <Footer />
    </>
  );
}
