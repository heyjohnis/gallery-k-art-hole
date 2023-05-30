import React from "react";
import PageBanner from "./../../components/Common/PageBanner";
import Footer from "./../../components/Layouts/Footer";
import ArtworkList from "./../../components/Artworks/ArtworkList";

const artworks = () => {
  return (
    <>
      <PageBanner
        pageTitle="미술품 보기"
        homePageUrl="/미술품"
        homePageText="Home"
        activePageText="미술품 보기"
      />
      <ArtworkList />
      <Footer />
    </>
  );
};

export default artworks;
