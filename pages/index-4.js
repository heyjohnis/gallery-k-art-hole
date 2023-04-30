import React from "react";
import Newsletter from "../components/Common/Newsletter";
import PartnerSliderTwo from "../components/Common/PartnerSliderTwo";
import Team from "../components/Common/Team";
import Testimonials from "../components/Common/Testimonials";
import About from "../components/HomeFour/About";
import CaseStudies from "../components/HomeFour/CaseStudies";
import Faq from "../components/HomeFour/Faq";
import MainBanner from "../components/HomeFour/MainBanner";
import MakeYourBusiness from "../components/HomeFour/MakeYourBusiness";
import News from "../components/HomeFour/News";
import Services from "../components/HomeFour/Services";
import WhatWeOffer from "../components/HomeFour/WhatWeOffer";
import WhyChooseUs from "../components/HomeFour/WhyChooseUs";
import Footer from "../components/Layouts/Footer";

export default function Index4() {
  return (
    <>
      <div className="body-bg-color">
        <MainBanner />

        <PartnerSliderTwo />

        <About />

        <Services />

        <WhyChooseUs />

        <MakeYourBusiness />

        <WhatWeOffer />

        <CaseStudies />

        <Team />

        <Testimonials />

        <Faq />

        <Newsletter />

        <News />

        <Footer />
      </div>
    </>
  );
}
