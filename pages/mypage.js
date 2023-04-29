import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import MyPageMain from '../components/Mypage/MyPageMain';

export default function NewsDetails() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="마이페이지"
        homePageUrl="/"
        homePageText="Home"
        activePageText="마이페이지"
      />

      <MyPageMain />

      <Footer />
    </>
  );
}
