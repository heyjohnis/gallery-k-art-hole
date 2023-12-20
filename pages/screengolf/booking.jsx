import React, { useEffect } from "react";
import Router from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import ScreenBookingForm from '../../components/Booking/ScreenBookingForm';

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
        pageTitle="스크린 골프"
        homePageUrl="/booking/"
        homePageText="Golf Booking"
        activePageText="스크린 골프"
      />
      <ScreenBookingForm/>
      <Footer />
    </>
  );
};

export default MyPag;
