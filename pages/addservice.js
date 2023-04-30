import React from "react";
import AddServiceCard from "../components/Benefits/AddServiceCard";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function NewsGrid() {
  return (
    <>
      <PageBanner
        pageTitle="부가서비스 소개"
        homePageUrl="/"
        homePageText="Main"
        activePageText="부가서비스 소개"
      />

      <AddServiceCard />
      <Footer />
    </>
  );
}
