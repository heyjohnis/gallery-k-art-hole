import React, { useEffect } from "react";
import Router from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { CompleteTitle } from "../../components/Common/CompleteTitle";
import { GolfCompleteContent } from "../../components/Booking/GolfCompleteContent";
import RecommendService from "../../components/RecommendService";

const Complete = ({ user }) => {
  return (
    <>
      <PageBanner
        pageTitle="골프장 예약"
        homePageUrl="/booking/"
        homePageText="Golf Booking"
        activePageText="골프장 예약 완료"
      />
      <section className="container">
        <CompleteTitle
          iconUrl={`/images/booking/ico_golf_tit.png`}
          title="골프장 신청이 "
          title2="완료되었습니다!"
          text="담당자 확인 후 예약 안내드리겠습니다."
        />
        <GolfCompleteContent />
        <RecommendService user={user} pdKind={"service"} />
      </section>
      <Footer />
    </>
  );
};

export default Complete;
