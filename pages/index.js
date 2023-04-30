import React from "react";
import BenefitSlider from "../components/Common/BenefitSlider";
import MainMov from "../components/Common/MainMov";
import News from "../components/Common/News";
import About from "../components/HomeFive/About";
import MainBanner from "../components/HomeFive/MainBanner";
import Products from "../components/HomeFive/Products";
import Footer from "../components/Layouts/Footer";

export default function Index5({ children, user }) {
  return (
    <>
      <MainBanner />

      <About />

      <BenefitSlider />

      <Products />

      <MainMov />

      <News />

      <Footer />
    </>
  );
}
