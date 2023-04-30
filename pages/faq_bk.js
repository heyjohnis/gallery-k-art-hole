import React from "react";
import PageBanner from "../components/Common/PageBanner";
import AskQuestionForm from "../components/Faq/AskQuestionForm";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/Layouts/Footer";

export default function Faq() {
  return (
    <>
      <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Frequently Asked Questions"
      />

      <FaqContent />

      <AskQuestionForm />

      <Footer />
    </>
  );
}
