import React, { useEffect } from "react";
import Router from "next/router";
import PageBanner from "./../../components/Common/PageBanner";
import Footer from "./../../components/Layouts/Footer";

const artworks = ({ user }) => {
  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      Router.push("/login");
    }
  }, [user]);
  return (
    <>
      <PageBanner
        pageTitle="사은품"
        homePageUrl="/사은품"
        homePageText="Home"
        activePageText="사은품"
      />
      <p className="text-center" style={{ margin: "200px 0" }}>
        준비중입니다.
      </p>
      <Footer />
    </>
  );
};

export default artworks;