import React from "react";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import News from "../components/Common/News";
import PartnerSlider from "../components/Common/PartnerSlider";
import Testimonials from "../components/Common/Testimonials";
import About from "../components/HomeFive/About";
import CaseStudies from "../components/HomeFive/CaseStudies";
import Faq from "../components/HomeFive/Faq";
import MainBanner from "../components/HomeFive/MainBanner";
import Services from "../components/HomeFive/Services";
import WhatWeOffer from "../components/HomeFive/WhatWeOffer";
import WhyChooseUs from "../components/HomeFive/WhyChooseUs";
import Footer from "../components/Layouts/Footer";

export default function Index5() {
  return (
    <>
      <MainBanner />

      <PartnerSlider />

      <About />

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
