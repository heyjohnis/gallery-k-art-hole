import React from 'react';
import PageBanner from "../../components/Common/PageBanner";
import Footer from '../../components/Layouts/Footer';
import { MobileMyBookingDetail } from '../../components/NewMypage/MobileMyBookingDetail';

export default function Reserdetail() {
  return (
    <>
      <PageBanner
        pageTitle="예약 확인 상세"
        homePageUrl="/mypage/"
        homePageText="예약확인 상세"
        activePageText="예약확인 상세"
      />
      <section className="container">
        <MobileMyBookingDetail/>
      </section>
      <Footer/>
    </>
  );
}

