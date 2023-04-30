import React from "react";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import News from "../components/Common/News";
import PartnerSlider from "../components/Common/PartnerSlider";
import Testimonials from "../components/Common/Testimonials";
import About from "../components/HomeThree/About";
import CaseStudies from "../components/HomeThree/CaseStudies";
import Faq from "../components/HomeThree/Faq";
import MainBanner from "../components/HomeThree/MainBanner";
import Services from "../components/HomeThree/Services";
import WhatWeOffer from "../components/HomeThree/WhatWeOffer";
import WhyChooseUs from "../components/HomeThree/WhyChooseUs";
import Footer from "../components/Layouts/Footer";

export default function Index3() {
  return (
    <>
      <MainBanner />

      <div className="pt-100">
        <PartnerSlider />
      </div>

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
