import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeFive/MainBanner";
import About from "../components/HomeFive/About";
import WhyChooseUs from "../components/HomeFive/WhyChooseUs";
import Services from "../components/HomeFive/Services";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhatWeOffer from "../components/HomeFive/WhatWeOffer";
import CaseStudies from "../components/HomeFive/CaseStudies";
import Testimonials from "../components/Common/Testimonials";
import Faq from "../components/HomeFive/Faq";
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";
import BenefitSlider from '../components/Common/BenefitSlider';

export default function Index5() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

      <BenefitSlider/>

      <WhyChooseUs />

      <Services />

      <MakeYourBusiness />

      <WhatWeOffer />

      <CaseStudies />

      <Testimonials />

      <Faq />

      <News />

      <Footer />
    </>
  );
}
