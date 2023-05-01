import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import NewsCard from '../components/News/NewsCard';

export default function NewsGrid() {
  return (
    <>
      <PageBanner
        pageTitle="뉴스"
        homePageUrl="/"
        homePageText="Home"
        activePageText="뉴스"
      />

      <NewsCard/>

      <Footer />
    </>
  );
}
