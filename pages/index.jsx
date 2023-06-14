/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useRouter } from "next/router";
//import BenefitSlider from "../components/Home/BenefitSlider";
//import About from "../components/Home/About";
import MainBanner from "../components/Home/MainBanner";
//import Products from "../components/Home/Products";
import Footer from "../components/Layouts/Footer";
import ReservationModal from "../components/Mypage/ReservationModal";
import ContactForm from "../components/Home/ContactForm";

export default function Index({ user }) {
  const router = useRouter();
  const modalRef = useRef(null);
  const showReservationModal = () => {
    if (!user) {
      router.push("/login");
    }
    modalRef.current.showModal();
  };
  return (
    <>
      <MainBanner showReservationModal={showReservationModal} />

      {/* <About /> */}

      {/* <BenefitSlider /> */}

      {/* <Products /> */}

      <ContactForm />
      <Footer />

      <ReservationModal
        user={user}
        updateReservation={() => {}}
        ref={modalRef}
      />
    </>
  );
}
