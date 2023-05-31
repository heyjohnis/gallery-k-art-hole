import React from "react";
import PageBanner from "./../../components/Common/PageBanner";
import Footer from "./../../components/Layouts/Footer";

const artworks = () => {
  return (
    <>
      <PageBanner
        pageTitle="사은품"
        homePageUrl="/사은품"
        homePageText="Home"
        activePageText="사은품"
      />
      <p className="text-center" style={{ margin: "200px 0" }}>
        준비중입니다.
      </p>
      <Footer />
    </>
  );
};

export default artworks;
