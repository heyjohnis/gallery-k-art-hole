import React from "react";
import PageBanner from "../components/Common/PageBanner";
import GgmallItems from '../components/Ggmall/GgmallItems';
import GgmallText from '../components/Ggmall/GgmallText';
import Footer from "../components/Layouts/Footer";

export default function NewsGrid() {
  return (
    <>
      <PageBanner
        pageTitle="제휴서비스 상세"
        homePageUrl="/"
        homePageText="Home"
        activePageText="제휴서비스 상세"
      />

      <GgmallItems/>
      <GgmallText/>

      <Footer />
    </>
  );
}
