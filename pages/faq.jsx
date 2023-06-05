import React from "react";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/Layouts/Footer";

{/* harry 0605 pagebanner 정보 변경 */ }
export default function Faq() {
  return (
    <>
      <PageBanner
        pageTitle="FAQ"
        homePageUrl="/contact"
        homePageText="SUPPORT"
        activePageText="FAQ"
      />

      <FaqContent />

      <Footer />
    </>
  );
}
