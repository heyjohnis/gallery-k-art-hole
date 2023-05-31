import React, { useEffect } from "react";
import Router from "next/router";
import PageBanner from "./../../components/Common/PageBanner";
import Footer from "./../../components/Layouts/Footer";
import ArtworkList from "./../../components/Artworks/ArtworkList";

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
        pageTitle="미술품 보기"
        homePageUrl="/미술품"
        homePageText="Home"
        activePageText="미술품 보기"
      />
      <ArtworkList />
      <Footer />
    </>
  );
};

export default artworks;
