import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import EventCard from "../components/News/EventCard";

export default function NewsGrid() {
  return (
    <>
      <PageBanner
        pageTitle="이벤트"
        homePageUrl="/"
        homePageText="Home"
        activePageText="이벤트"
      />

      <EventCard />

      <Footer />
    </>
  );
}
