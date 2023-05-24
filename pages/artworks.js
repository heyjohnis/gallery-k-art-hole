import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const artworks = () => {
  return (
    <>
      <PageBanner
        pageTitle="제휴서비스 소개"
        homePageUrl="/"
        homePageText="Home"
        activePageText="제휴서비스 소개"
      />

      <Footer />
    </>
  );
};

export default artworks;
