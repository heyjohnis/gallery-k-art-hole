import React from "react";
import PageBanner from "../components/Common/PageBanner";
import AssociateItems from "../components/Ggmall/AssociateItems";
// import AssociateText from '../components/Ggmall/AssociateText';
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

      <AssociateItems />
      {/* <AssociateText/> */}

      <Footer />
    </>
  );
}
