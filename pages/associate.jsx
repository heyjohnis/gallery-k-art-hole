import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Associate from "../components/Ggmall/Associate";
import Footer from "../components/Layouts/Footer";

export default function NewsGrid() {
  return (
    <>
      <PageBanner
        pageTitle="제휴서비스 소개"
        homePageUrl="/"
        homePageText="Home"
        activePageText="제휴서비스 소개"
      />

      <Associate />
      <Footer />
    </>
  );
}
