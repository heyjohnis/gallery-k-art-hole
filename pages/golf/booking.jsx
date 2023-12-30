import React, { useEffect } from "react";
import Router from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { GolfBookingPage } from "../../components/Booking/GolfBookingPage";

const MyPag = ({ user }) => {
  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      Router.push("/login");
    }
  }, [user]);

  return (
    <>
      <PageBanner
        pageTitle="골프장 예약"
        homePageUrl="/booking/"
        homePageText="Golf Booking"
        activePageText="골프장 예약"
      />
      <GolfBookingPage user={user} />
      <Footer />
    </>
  );
};

export default MyPag;
