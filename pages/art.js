import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import IntroArt from '../components/Art/IntroArt';
import AboutArtist from '../components/Art/AboutArtist';
import ArtCard from '../components/Art/ArtCard';
import Footer from "../components/Layouts/Footer";

export default function Membership() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="미술품 소개"
        homePageUrl="/"
        homePageText="Main"
        activePageText="미술품 소개"
      />

      <IntroArt/>
      
      <AboutArtist/>
      <ArtCard/>

      <Footer />
    </>
  );
}
