import React, { useEffect } from "react";
import Router from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { CompleteTitle } from '../../components/Common/CompleteTitle';
import { GolfCompleteContent } from '../../components/Booking/GolfCompleteContent';
import { GolfCompleteRecommend } from '../../components/Booking/GolfCompleteRecommend';

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
        pageTitle="골프장 예약"
        homePageUrl="/booking/"
        homePageText="Golf Booking"
        activePageText="골프장 예약 완료"
      />
      <section className='container' >
        <CompleteTitle
          iconUrl={`/images/booking/ico_golf_tit.png`}
          title = '골프장 신청이 완료되었습니다!'
          text = '담당자 확인 후 예약 안내드리겠습니다.'
        />
        <GolfCompleteContent/>
        <GolfCompleteRecommend/>
      </section>
      <Footer />
    </>
  );
};

export default MyPag;
