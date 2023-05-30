import React from "react";
import PageBanner from "../components/Common/PageBanner";
import IntroArt from "../components/Art/IntroArt";
import AboutArtist from "../components/Art/AboutArtist";
import ArtCard from "../components/Art/ArtCard";
import Footer from "../components/Layouts/Footer";

export default function Membership() {
  return (
    <>
      <PageBanner
        pageTitle="미술품 소개"
        homePageUrl="/"
        homePageText="Home"
        activePageText="미술품 소개"
      />

      <IntroArt />

      <AboutArtist />
      <ArtCard />

      <Footer />
    </>
  );
}
