import React, { useEffect } from "react";
import Router from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import ArtworkList from "../../components/Artworks/ArtworkList";
import BookingForm from "../../components/Booking/BookingForm";

const MyPag = ({ user }) => {
  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      Router.push("/login");
    }
  }, [user]);

  {/* harry 0605 pagebanner 정보 변경 */ }
  return (
    <>
      <PageBanner
        pageTitle="예약1"
        homePageUrl="/booking/"
        homePageText="Reservation"
        activePageText="예약"
      />
      <BookingForm />
      <Footer />
    </>
  );
};

export default MyPag;
