import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeFive/MainBanner";
import About from "../components/HomeFive/About";
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";
import BenefitSlider from '../components/Common/BenefitSlider';
import GreenGolf from '../components/Common/GreenGolf';
import GreenBenefit from '../components/Common/GreenBenefit';
import GreenArt from '../components/Common/GreenArt';
import MainMov from '../components/Common/MainMov';
import Products from '../components/HomeFive/Products';

export default function Index5() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

      <BenefitSlider/>

      <Products/>
      
      <MainMov/>

      <News />

      <Footer />
    </>
  );
}
