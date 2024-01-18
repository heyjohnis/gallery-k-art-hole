import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Layouts/Footer";
import BookingComp from "../components/Home/BookingComp";
import ServiceComp from "../components/Home/ServiceComp";
import GoghBanner from "../components/Home/Banner/GoghBanner";
import RenoirBanner from "../components/Home/Banner/RenoirBanner";
import MonetBanner from "../components/Home/Banner/MonetBanner";
import GalleryComp from "../components/Home/GalleryComp";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "./index.module.scss";

export default function Index({ user }) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [serviceGroup, setServiceGroup] = useState("01");

  useEffect(() => {
    console.log({ user });
    if(user?.service_group) {
      setIsLogin(true);
      setServiceGroup(user.service_group);
    } else if(router.query.data) {
      setServiceGroup(router.query.data);
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
    <>
      {serviceGroup === "01" && (
        <ReactFullpage
          navigation
          licenseKey={"0CVM9-4IA6I-SKM1I-SNVJ9-JYYGL"}
          normalScrollElements={".scrollable-content"}
          render={() => (
            <ReactFullpage.Wrapper
              scrollingSpeed={1000}
              scrollHorizontally={true}
            >
              <div className={`section`}>
                <GoghBanner />
              </div>
              <div className={`section`}>
                <BookingComp />
              </div>
              <div className={`section`}>
                <ServiceComp user={user} serviceGroup={serviceGroup} />
              </div>
              <div className={`section ${styles.fullSize}`}>
                <GalleryComp />
              </div>
              <div className={`section scrollable-content`}>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      )}
      {serviceGroup === "02" && (
        <ReactFullpage
          navigation
          licenseKey={"0CVM9-4IA6I-SKM1I-SNVJ9-JYYGL"}
          normalScrollElements={".scrollable-content"}
          render={() => (
            <ReactFullpage.Wrapper
              scrollingSpeed={1000}
              scrollHorizontally={true}
            >
              <div className={`section`}>
                <RenoirBanner />
              </div>
              <div className={`section`}>
                <ServiceComp user={user} serviceGroup={serviceGroup} />
              </div>
              <div className={`section`}>
                <BookingComp />
              </div>
              <div className={`section ${styles.fullSize}`}>
                <GalleryComp />
              </div>
              <div className={`section scrollable-content`}>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      )}
      {serviceGroup === "03" && (
        <ReactFullpage
          navigation
          licenseKey={"0CVM9-4IA6I-SKM1I-SNVJ9-JYYGL"}
          normalScrollElements={".scrollable-content"}
          render={() => (
            <ReactFullpage.Wrapper
              scrollingSpeed={1000}
              scrollHorizontally={true}
            >
              <div className={`section`}>
                <MonetBanner />
              </div>
              <div className={`section`}>
                <ServiceComp user={user} serviceGroup={serviceGroup} />
              </div>
              <div className={`section`}>
                <BookingComp />
              </div>
              <div className={`section ${styles.fullSize}`}>
                <GalleryComp />
              </div>
              <div className={`section scrollable-content`}>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      )}
    </>
  );
}
