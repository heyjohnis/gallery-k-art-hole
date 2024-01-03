import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../components/Home/MobileMain.module.scss";
import MobileHomeItems from "../../components/Home/MobileHomeItems";
import MobileReservation from "../../components/Home/MobileReservation";
import MobileGallery from "../../components/Home/MobileGallery";
import Footer from "../../components/Layouts/Footer";

export default function Index({ user }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

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
      <div className={`${styles.mainContainer}`}>
        <MobileReservation user={user} />
        <MobileHomeItems />
        <MobileGallery />
      </div>
      <Footer />
    </>
  );
}
