import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/Layouts/Footer';
import { MyPoint } from '../../components/NewMypage/MyPoint';

export default function point() {
  return (
    <div>
      <PageBanner
        pageTitle="예약 확인 상세"
        homePageUrl="/mypage/"
        homePageText="예약확인 상세"
        activePageText="예약확인 상세"
      />
      <section className="container">
        <ul className="mypage_tab_menu">
          <li>HOME</li>
          <li>예약조회</li>
          <li>주문ㆍ배송조회</li>
          <li className="active">포인트 이용내역</li>
          <li>1:1 상담</li>
        </ul>
        <MyPoint/>
      </section>

      <Footer/>
    </div>
  );
}


