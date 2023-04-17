import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import AddServiceCard from '../components/Benefits/AddServiceCard';

export default function NewsGrid() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="부가서비스 소개"
        homePageUrl="/"
        homePageText="Main"
        activePageText="부가서비스 소개"
      />

      <AddServiceCard/>
      <Footer />
    </>
  );
}
