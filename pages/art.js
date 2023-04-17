import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import IntroArt from '../components/Benefits/IntroArt';
import AboutArtist from '../components/Benefits/AboutArtist';
import ArtCard from '../components/Benefits/ArtCard';

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
