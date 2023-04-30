import React from "react";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import News from "../components/Common/News";
import Newsletter from "../components/Common/Newsletter";
import Partner from "../components/Common/Partner";
import Testimonials from "../components/Common/Testimonials";
import About from "../components/HomeTwo/About";
import Features from "../components/HomeTwo/Features";
import MainBanner from "../components/HomeTwo/MainBanner";
import Pricing from "../components/HomeTwo/Pricing";
import Services from "../components/HomeTwo/Services";
import WhatWeOffer from "../components/HomeTwo/WhatWeOffer";
import Footer from "../components/Layouts/Footer";

export default function Index2() {
  return (
    <>
      <MainBanner />

      <Features />

      <About />

      <Services />

      <Pricing />

      <Newsletter />

      <MakeYourBusiness />

      <Testimonials />

      <WhatWeOffer />

      <News />

      <div className="pb-50">
        <Partner />
      </div>

      <Footer />
    </>
  );
}
