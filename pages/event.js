import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import EventCard from '../components/News/EventCard';

export default function NewsGrid() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="이벤트"
        homePageUrl="/"
        homePageText="Home"
        activePageText="이벤트"
      />

      <EventCard/>

      <Footer />
    </>
  );
}
