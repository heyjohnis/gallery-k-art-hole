import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ArtworkList from "../components/Artworks/ArtworkList";

const artworks = () => {
  return (
    <>
      <PageBanner
        pageTitle="제휴서비스 소개"
        homePageUrl="/"
        homePageText="Home"
        activePageText="제휴서비스 소개"
      />
      <ArtworkList />
      <Footer />
    </>
  );
};

export default artworks;
