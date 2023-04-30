import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ExhibitionCard from "../components/News/ExhibitionCard";

export default function NewsGrid() {
  return (
    <>
      <PageBanner
        pageTitle="행사"
        homePageUrl="/"
        homePageText="Home"
        activePageText="행사"
      />

      <ExhibitionCard />

      <Footer />
    </>
  );
}
