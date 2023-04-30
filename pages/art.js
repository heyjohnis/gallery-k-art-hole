import React from "react";
import AboutArtist from "../components/Benefits/AboutArtist";
import ArtCard from "../components/Benefits/ArtCard";
import IntroArt from "../components/Benefits/IntroArt";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function Membership() {
  return (
    <>
      <PageBanner
        pageTitle="미술품 소개"
        homePageUrl="/"
        homePageText="Main"
        activePageText="미술품 소개"
      />

      <IntroArt />

      <AboutArtist />
      <ArtCard />

      <Footer />
    </>
  );
}
