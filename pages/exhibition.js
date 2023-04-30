import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ExhibitionCard from '../components/News/ExhibitionCard';

export default function NewsGrid() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="행사"
        homePageUrl="/"
        homePageText="Home"
        activePageText="행사"
      />

      <ExhibitionCard/>

      <Footer />
    </>
  );
}
