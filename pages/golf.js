import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import IntroBenefits from '../components/Benefits/IntroBenefits';
import BenefitStyle from '../components/Benefits/BenefitStyle';
import IntroGolf from '../components/Benefits/IntroGolf';
import TableGolf from '../components/Benefits/TableGolf';

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

      <TableGolf/>
    
      <Footer />
    </>
  );
}
