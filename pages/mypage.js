import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import MyPageMain from "../components/Mypage/MyPageMain";

const NewsDetails = ({ user }) => {
  return (
    <>
      <PageBanner
        pageTitle="마이페이지"
        homePageUrl="/"
        homePageText="Home"
        activePageText="마이페이지"
      />

      <MyPageMain user={user} />

      <Footer />
    </>
  );
};
export default NewsDetails;
