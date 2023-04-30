import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import NewsGridCard from "../components/News/NewsGridCard";

export default function NewsGrid() {
  return (
    <>
      <PageBanner
        pageTitle="News Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Grid"
      />

      <NewsGridCard />

      <Footer />
    </>
  );
}
