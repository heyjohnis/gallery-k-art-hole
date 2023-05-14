import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import GgmallList from '../components/Ggmall/GgmallList';

export default function Team() {
  return (
    <>
      <PageBanner
        pageTitle="포인트몰"
        homePageUrl="/"
        homePageText="Home"
        activePageText="포인트몰"
      />

      <GgmallList/>

      <Footer />
    </>
  );
}
