import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import News from "../components/Common/News";
import Testimonials from "../components/Common/Testimonials";
import About from "../components/HomeOne/About";
import Features from "../components/HomeOne/Features";
import MainBanner from "../components/HomeOne/MainBanner";
import Services from "../components/HomeOne/Services";
import WhatWeOffer from "../components/HomeOne/WhatWeOffer";
import WhyChooseUs from "../components/HomeOne/WhyChooseUs";
import Footer from "../components/Layouts/Footer";

export default function Index() {
  return (
    <>
      <MainBanner />

      <Features />

      <About />

      <WhyChooseUs />

      <Services />

      <MakeYourBusiness />

      <WhatWeOffer />

      <Testimonials />

      <News />

      <Footer />
    </>
  );
}
