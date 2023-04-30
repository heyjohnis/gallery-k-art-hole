import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="상담/문의"
        homePageUrl="/"
        homePageText="Home"
        activePageText="상담/문의"
      />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
