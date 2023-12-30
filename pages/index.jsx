import React, { useState, useEffect } from "react";
import Footer from "../components/Layouts/Footer";
import BookingComp from "../components/Home/BookingComp";
import { SectionsContainer } from "react-fullpage";
import ServiceComp from "../components/Home/ServiceComp";
import { Section } from "react-fullpage";
import GoghBanner from "../components/Home/Banner/GoghBanner";
import RenoirBanner from "../components/Home/Banner/RenoirBanner";
import MonetBanner from "../components/Home/Banner/MonetBanner";

const options = {
  anchors: ["Intro", "GolfBooking", "Gallery", "GGmall", "Footer"],
  verticalCentered: true,
};
export default function Index({ user }) {
  const [isLogin, setIsLogin] = useState(false);
  const [serviceGroup, setServiceGroup] = useState("gogh");
  useEffect(() => {
    console.log({ user });
    if (user?.service_group) {
      setIsLogin(true);
      setServiceGroup(user.service_group);
    }
  }, [user]);
  return (
    <SectionsContainer {...options}>
      <Section>
        {serviceGroup === "gogh" && <GoghBanner />}
        {serviceGroup === "renoir" && <RenoirBanner />}
        {serviceGroup === "monet" && <MonetBanner />}
      </Section>
      {serviceGroup === "gogh" && (
        <>
          <BookingComp />
          <ServiceComp />
        </>
      )}
      {serviceGroup !== "gogh" && (
        <>
          <ServiceComp />
          <BookingComp />
        </>
      )}
      <Section>
        <Footer />
      </Section>
    </SectionsContainer>
  );
}
