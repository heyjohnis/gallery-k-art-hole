import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import IntroGolf from '../components/Golf/IntroGolf';
import Footer from "../components/Layouts/Footer";



export default function Membership() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="골프서비스"
        homePageUrl="/"
        homePageText="Main"
        activePageText="골프서비스"
      />

      <IntroGolf/>
    
      <Footer />
    </>
  );
}
