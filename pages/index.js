import React from "react";
import BenefitSlider from "../components/Home/BenefitSlider";
import MainMov from "../components/Home/MainMov";
import News from "../components/Home/News";

import About from "../components/Home/About";
import MainBanner from "../components/Home/MainBanner";
import Products from "../components/Home/Products";
import Footer from "../components/Layouts/Footer";

export default function Index5({ children, user }) {
  return (
    <>
      <MainBanner />

      <About />

      <BenefitSlider />

      <Products />

      <Footer />
    </>
  );
}
