import React, { useEffect } from "react";
import Router from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { ScreenBookingPage } from "../../components/Booking/ScreenBookingPage";

const ScreenBooking = ({ user }) => {
  {
    /* harry 0605 pagebanner 정보 변경 */
  }
  return (
    <>
      <PageBanner
        pageTitle="스크린 골프"
        homePageUrl="/booking/"
        homePageText="Golf Booking"
        activePageText="스크린 골프"
      />
      <ScreenBookingPage user={user} />
      <Footer />
    </>
  );
};

export default ScreenBooking;
