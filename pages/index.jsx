import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Layouts/Footer";
import BookingComp from "../components/Home/BookingComp";
import { SectionsContainer } from "react-fullpage";
import ServiceComp from "../components/Home/ServiceComp";
import { Section } from "react-fullpage";
import GoghBanner from "../components/Home/Banner/GoghBanner";
import RenoirBanner from "../components/Home/Banner/RenoirBanner";
import MonetBanner from "../components/Home/Banner/MonetBanner";
import { ro } from "date-fns/locale";
import GalleryComp from "../components/Home/GalleryComp";

const options = {
  anchors: ["intro", "booking", "mall", "gallery", "footer"],
  verticalCentered: true,
};
export default function Index({ user }) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [serviceGroup, setServiceGroup] = useState("gogh");
  useEffect(() => {
    console.log({ user });
    if (user?.service_group) {
      setIsLogin(true);
      setServiceGroup(user.service_group);
    }
  }, [user]);

  useEffect(() => {
    const handWindowSize = () => {
      const { innerWidth } = window;
      if (innerWidth < 768) {
        console.log("mobile");
        router.push("/m");
      } else {
        console.log("pc");
        router.push("/");
      }
    };
    handWindowSize();
    window.addEventListener("resize", handWindowSize);
    return () => {
      window.removeEventListener("resize", handWindowSize);
    };
  }, []);
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
        <GalleryComp />
      </Section>
      <Section>
        <Footer />
      </Section>
    </SectionsContainer>
  );
}
