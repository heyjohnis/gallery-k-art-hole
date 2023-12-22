import React, { useEffect } from "react";
import Router from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import ScreenBookingForm from '../../components/Booking/ScreenBookingForm';
import { CompleteTitle } from '../../components/Common/CompleteTitle';
import { ScreenCompleteContent } from '../../components/Booking/ScreenCompleteContent';

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
        activePageText="스크린 골프 예약완료"
      />
      <section className='container' >
        <CompleteTitle
          iconUrl={`/images/booking/screen_point.png`}
          title = '포인트 신청이 완료되었습니다!'
          text = '담당자 확인 후 포인트 사용이 확정됩니다.'
        />
        <ScreenCompleteContent/>
      </section>
      <Footer />
    </>
  );
};

export default MyPag;
