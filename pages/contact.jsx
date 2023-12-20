import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";

export default function Contact() {
  return (
    <>
      <PageBanner
        pageTitle="상담문의"
        homePageUrl="/contact"
        homePageText="Support"
        activePageText="상담문의"
      />

      {/* <ContactInfo /> */}


      <ContactForm />

      <Footer />
    </>
  );
}
