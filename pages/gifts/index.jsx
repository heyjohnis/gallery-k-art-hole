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
        homePageUrl="/artworks"
        homePageText="MEMBER PRIVILEGES"
        activePageText="사은품"
      />
      <p className="text-center">
        <img src="/images/gift.jpg" alt="gifts" />
      </p>
      <Footer />
    </>
  );
};

export default artworks;
