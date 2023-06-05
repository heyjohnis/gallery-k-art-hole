import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import Footer from "../components/Layouts/Footer";

{/* harry 0605 pagebanner 정보 변경 */ }
export default function Contact() {
  return (
    <>
      <PageBanner
        pageTitle="상담/문의"
        homePageUrl="/contact"
        homePageText="SUPPORT"
        activePageText="상담/문의"
      />

      {/* <ContactInfo /> */}

      <ContactForm />

      <Footer />
    </>
  );
}
