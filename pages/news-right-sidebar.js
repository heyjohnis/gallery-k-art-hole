import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import NewsGridTwo from "../components/News/NewsGridTwo";

export default function NewsRightSidebar() {
  return (
    <>
      <PageBanner
        pageTitle="News Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Right Sidebar"
      />

      <NewsGridTwo />

      <Footer />
    </>
  );
}
