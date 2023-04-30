import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import About from "../components/Home/About";
import News from "../components/Home/News";
import BenefitSlider from '../components/Home/BenefitSlider';
import MainMov from '../components/Home/MainMov';
import Products from '../components/Home/Products';
import Footer from "../components/Layouts/Footer";

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
