import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import NewsCard from '../components/News/NewsCard';

{/* harry 0605 pagebanner 정보 변경 */ }
export default function NewsGrid() {
  return (
    <>
      <PageBanner
        pageTitle="뉴스"
        homePageUrl="/contact"
        homePageText="SUPPORT"
        activePageText="뉴스"
      />

      <NewsCard />
      <Footer />
    </>
  );
}
